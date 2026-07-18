import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconCheck,
  IconDownload,
  IconEye,
  IconPencil,
  IconPlus,
  IconQuotes,
  IconRefresh,
  IconUndo,
} from '../../../shared/components/Icons';
import { createBudgetPdfFile, downloadBudgetPdfFile } from '../../../shared/utils/budgetPdf';
import { publicAsset } from '../../../shared/utils/urls';
import { fetchQuote, fetchQuotes, markQuoteAsSent, returnQuoteToPending } from '../api/quotesApi';
import * as S from './QuotesScreenStyled';

const editableStatuses = new Set(['Borrador', 'Pendiente de envío']);
const sentChannelOptions = ['WhatsApp', 'Instagram', 'Facebook', 'TikTok', 'Email', 'Impreso en mano'];
const budgetHeaderSrc = publicAsset('assets/presupuesto-encabezado-v2.png');
const budgetSignatureStampSrc = publicAsset('assets/presupuesto-espacio-firma.png');
const budgetSellerSignatureSrc = publicAsset('assets/firma_sin_fondo.png');

const formatMoney = (value) => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(Number.isFinite(Number(value)) ? Number(value) : 0);

const formatDate = (value) => {
  if (!value) return '-';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';

  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const getStatusVariant = (status) => {
  if (status === 'Enviado') return 'success';
  if (status === 'Pendiente de envío') return 'warning';
  return 'neutral';
};

const getMethodLabel = (method) => (method === 'air' ? 'Aéreo' : 'Marítimo');

const parsePayload = (payload) => {
  if (!payload) return null;
  if (typeof payload === 'object') return payload;

  try {
    return JSON.parse(payload);
  } catch {
    return null;
  }
};

const base64ToPdfBlob = (base64) => {
  const cleanBase64 = String(base64 || '').replace(/^data:application\/pdf;base64,/, '');
  const byteCharacters = atob(cleanBase64);
  const byteArrays = [];
  const sliceSize = 1024;

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = Array.from(slice, character => character.charCodeAt(0));
    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: 'application/pdf' });
};

const buildQuotePdfFile = async (quote) => {
  const payload = parsePayload(quote.payload);

  if (payload?.form && payload?.sellerForm && payload?.quote && payload?.quoteResult) {
    return createBudgetPdfFile({
      form: payload.form,
      sellerForm: payload.sellerForm,
      productImages: payload.productImages || [],
      quote: payload.quote,
      quoteResult: payload.quoteResult,
      method: payload.method || quote.method,
      headerSrc: budgetHeaderSrc,
      signatureStampSrc: budgetSignatureStampSrc,
      sellerSignatureSrc: budgetSellerSignatureSrc,
    });
  }

  if (quote.pdf_base64) {
    return {
      filename: quote.pdf_filename || `presupuesto-${quote.id}.pdf`,
      base64: quote.pdf_base64,
      blob: base64ToPdfBlob(quote.pdf_base64),
    };
  }

  throw new Error('El presupuesto no tiene PDF guardado.');
};

const openPreviewWindow = () => {
  const targetWindow = window.open('about:blank', '_blank');

  if (targetWindow) {
    targetWindow.opener = null;
    targetWindow.document.title = 'Presupuesto Imponect';
    targetWindow.document.body.textContent = 'Generando presupuesto...';
  }

  return targetWindow;
};

const openPdfBlob = (blob, targetWindow) => {
  const url = URL.createObjectURL(blob);

  if (targetWindow) {
    targetWindow.location.href = url;
  } else {
    window.open(url, '_blank');
  }

  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
};

export const QuotesScreen = () => {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeAction, setActiveAction] = useState('');
  const [sendModal, setSendModal] = useState({ quote: null, channel: sentChannelOptions[0], error: '' });
  const [returnModal, setReturnModal] = useState({ quote: null, error: '' });

  const loadQuotes = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchQuotes();
      setQuotes(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'No se pudieron cargar los presupuestos.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  const quoteRows = useMemo(() => quotes.map(quote => ({
    ...quote,
    isEditable: editableStatuses.has(quote.status),
  })), [quotes]);

  const handlePreview = async (quote) => {
    const targetWindow = openPreviewWindow();
    setActiveAction(`${quote.id}-preview`);

    try {
      const fullQuote = await fetchQuote(quote.id);
      const pdfFile = await buildQuotePdfFile(fullQuote);
      openPdfBlob(pdfFile.blob, targetWindow);
    } catch (previewError) {
      if (targetWindow) targetWindow.close();
      window.alert(previewError.message || 'No se pudo abrir el presupuesto.');
    } finally {
      setActiveAction('');
    }
  };

  const handleDownload = async (quote) => {
    setActiveAction(`${quote.id}-download`);

    try {
      const fullQuote = await fetchQuote(quote.id);
      const pdfFile = await buildQuotePdfFile(fullQuote);
      downloadBudgetPdfFile(pdfFile);
    } catch (downloadError) {
      window.alert(downloadError.message || 'No se pudo descargar el presupuesto.');
    } finally {
      setActiveAction('');
    }
  };

  const editQuoteInCotizador = (quote) => {
    if (!editableStatuses.has(quote.status)) return;
    navigate(`/cotizador?id=${quote.id}`);
  };

  const openSendModal = (quote) => {
    if (quote.status !== 'Pendiente de envío' || activeAction) return;
    setSendModal({ quote, channel: sentChannelOptions[0], error: '' });
  };

  const closeSendModal = () => {
    if (activeAction) return;
    setSendModal({ quote: null, channel: sentChannelOptions[0], error: '' });
  };

  const confirmSendQuote = async (event) => {
    event.preventDefault();
    if (!sendModal.quote || activeAction) return;

    setActiveAction(`${sendModal.quote.id}-send`);
    setSendModal(current => ({ ...current, error: '' }));

    try {
      const updatedQuote = await markQuoteAsSent(sendModal.quote.id, {
        sent_channel: sendModal.channel,
      });

      setQuotes(currentQuotes => currentQuotes.map(quote => (
        String(quote.id) === String(updatedQuote.id) ? updatedQuote : quote
      )));
      setSendModal({ quote: null, channel: sentChannelOptions[0], error: '' });
    } catch (sendError) {
      setSendModal(current => ({
        ...current,
        error: sendError.message || 'No se pudo confirmar el envío.',
      }));
    } finally {
      setActiveAction('');
    }
  };

  const openReturnModal = (quote) => {
    if (quote.status !== 'Enviado' || activeAction) return;
    setReturnModal({ quote, error: '' });
  };

  const closeReturnModal = () => {
    if (activeAction) return;
    setReturnModal({ quote: null, error: '' });
  };

  const confirmReturnQuote = async (event) => {
    event.preventDefault();
    if (!returnModal.quote || activeAction) return;

    setActiveAction(`${returnModal.quote.id}-return`);
    setReturnModal(current => ({ ...current, error: '' }));

    try {
      const updatedQuote = await returnQuoteToPending(returnModal.quote.id);
      setQuotes(currentQuotes => currentQuotes.map(quote => (
        String(quote.id) === String(updatedQuote.id) ? updatedQuote : quote
      )));
      setReturnModal({ quote: null, error: '' });
    } catch (returnError) {
      setReturnModal(current => ({
        ...current,
        error: returnError.message || 'No se pudo regresar el presupuesto a pendiente de envío.',
      }));
    } finally {
      setActiveAction('');
    }
  };

  const isSendModalOpen = Boolean(sendModal.quote);
  const isConfirmingSend = activeAction === `${sendModal.quote?.id}-send`;
  const isReturnModalOpen = Boolean(returnModal.quote);
  const isConfirmingReturn = activeAction === `${returnModal.quote?.id}-return`;

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleContainer>
          <S.Eyebrow>
            <IconQuotes />
            Historial comercial
          </S.Eyebrow>
          <S.Title>Presupuestos Imponect</S.Title>
          <S.Description>Controlá presupuestos generados, estados de envío, PDFs descargables y edición de borradores.</S.Description>
        </S.TitleContainer>
        <S.HeaderActions>
          <S.SecondaryButton type="button" onClick={loadQuotes} disabled={isLoading}>
            <IconRefresh />
            Actualizar
          </S.SecondaryButton>
          <S.PrimaryButton type="button" onClick={() => navigate('/cotizador')}>
            <IconPlus />
            Nuevo presupuesto
          </S.PrimaryButton>
        </S.HeaderActions>
      </S.Header>

      <S.TableCard>
        {isLoading ? (
          <S.EmptyState>
            <strong>Cargando presupuestos</strong>
            <span>Buscando registros guardados en la base de datos.</span>
          </S.EmptyState>
        ) : error ? (
          <S.EmptyState>
            <strong>No se pudo cargar la tabla</strong>
            <span>{error}</span>
            <S.SecondaryButton type="button" onClick={loadQuotes}>
              <IconRefresh />
              Reintentar
            </S.SecondaryButton>
          </S.EmptyState>
        ) : quoteRows.length === 0 ? (
          <S.EmptyState>
            <strong>No hay presupuestos guardados</strong>
            <span>Generá uno desde la sección Cotizador para verlo acá.</span>
          </S.EmptyState>
        ) : (
          <S.TableScroller>
            <S.Table>
              <thead>
                <tr>
                  <S.Th>ID</S.Th>
                  <S.Th>Razón social cliente</S.Th>
                  <S.Th>Fecha generación</S.Th>
                  <S.Th>Monto</S.Th>
                  <S.Th>Estado</S.Th>
                  <S.Th>Tipo</S.Th>
                  <S.Th>Acciones</S.Th>
                </tr>
              </thead>
              <tbody>
                {quoteRows.map(quote => (
                  <tr key={quote.id}>
                    <S.Td $nowrap>
                      <S.QuoteId>#{quote.id}</S.QuoteId>
                    </S.Td>
                    <S.Td>
                      <strong>{quote.razon_social_cliente}</strong>
                    </S.Td>
                    <S.Td $nowrap>{formatDate(quote.generation_date)}</S.Td>
                    <S.Td $nowrap>
                      <S.Amount>{formatMoney(quote.amount)}</S.Amount>
                    </S.Td>
                    <S.Td $nowrap>
                      <S.StatusBadge $variant={getStatusVariant(quote.status)}>
                        {quote.status}
                      </S.StatusBadge>
                    </S.Td>
                    <S.Td $nowrap>
                      <S.MethodBadge $method={quote.method}>{getMethodLabel(quote.method)}</S.MethodBadge>
                    </S.Td>
                    <S.Td $nowrap>
                      <S.ActionsCell>
                        <S.IconActionButton
                          type="button"
                          title="Ver presupuesto"
                          aria-label="Ver presupuesto"
                          onClick={() => handlePreview(quote)}
                          disabled={activeAction !== ''}
                        >
                          <IconEye />
                        </S.IconActionButton>
                        <S.IconActionButton
                          type="button"
                          title="Descargar presupuesto"
                          aria-label="Descargar presupuesto"
                          onClick={() => handleDownload(quote)}
                          disabled={activeAction !== ''}
                        >
                          <IconDownload />
                        </S.IconActionButton>
                        <S.IconActionButton
                          type="button"
                          title={quote.isEditable ? 'Editar presupuesto' : 'Solo editable en Borrador o Pendiente de envío'}
                          aria-label="Editar presupuesto"
                          onClick={() => editQuoteInCotizador(quote)}
                          disabled={!quote.isEditable || activeAction !== ''}
                          $emphasis={quote.isEditable}
                        >
                          <IconPencil />
                        </S.IconActionButton>
                        <S.IconActionButton
                          type="button"
                          title={quote.status === 'Enviado'
                            ? 'Presupuesto enviado'
                            : quote.status === 'Pendiente de envío'
                              ? 'Marcar como enviado'
                              : 'Solo disponible en Pendiente de envío'}
                          aria-label="Marcar presupuesto como enviado"
                          onClick={() => openSendModal(quote)}
                          disabled={quote.status !== 'Pendiente de envío' || activeAction !== ''}
                          $success={quote.status === 'Pendiente de envío' || quote.status === 'Enviado'}
                          $sent={quote.status === 'Enviado'}
                        >
                          <IconCheck />
                        </S.IconActionButton>
                        <S.IconActionButton
                          type="button"
                          title={quote.status === 'Enviado' ? 'Regresar a PENDIENTE DE ENVÍO' : 'Solo disponible en Enviado'}
                          aria-label="Regresar presupuesto a pendiente de envío"
                          onClick={() => openReturnModal(quote)}
                          disabled={quote.status !== 'Enviado' || activeAction !== ''}
                          $undo={quote.status === 'Enviado'}
                        >
                          <IconUndo />
                        </S.IconActionButton>
                      </S.ActionsCell>
                    </S.Td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableScroller>
        )}
      </S.TableCard>

      {isSendModalOpen && (
        <S.ModalOverlay onClick={closeSendModal}>
          <S.Modal onSubmit={confirmSendQuote} onClick={event => event.stopPropagation()}>
            <S.ModalHeader>
              <div>
                <S.ModalTitle>Confirmar envío</S.ModalTitle>
                <S.ModalDescription>
                  Al continuar, se marcará el presupuesto como enviado.
                </S.ModalDescription>
              </div>
            </S.ModalHeader>

            <S.Field>
              Enviado por:
              <select
                value={sendModal.channel}
                onChange={event => setSendModal(current => ({ ...current, channel: event.target.value, error: '' }))}
                disabled={isConfirmingSend}
              >
                {sentChannelOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </S.Field>

            {sendModal.error && <S.ModalError>{sendModal.error}</S.ModalError>}

            <S.ModalActions>
              <S.SecondaryButton type="button" onClick={closeSendModal} disabled={isConfirmingSend}>
                Cancelar
              </S.SecondaryButton>
              <S.PrimaryButton type="submit" disabled={isConfirmingSend}>
                <IconCheck />
                {isConfirmingSend ? 'Confirmando...' : 'Confirmar envío'}
              </S.PrimaryButton>
            </S.ModalActions>
          </S.Modal>
        </S.ModalOverlay>
      )}

      {isReturnModalOpen && (
        <S.ModalOverlay onClick={closeReturnModal}>
          <S.Modal onSubmit={confirmReturnQuote} onClick={event => event.stopPropagation()}>
            <S.ModalHeader>
              <div>
                <S.ModalTitle>Regresar a pendiente</S.ModalTitle>
                <S.ModalDescription>
                  Al continuar, el presupuesto volverá a PENDIENTE DE ENVÍO y se limpiará la información de envío.
                </S.ModalDescription>
              </div>
            </S.ModalHeader>

            {returnModal.error && <S.ModalError>{returnModal.error}</S.ModalError>}

            <S.ModalActions>
              <S.SecondaryButton type="button" onClick={closeReturnModal} disabled={isConfirmingReturn}>
                Cancelar
              </S.SecondaryButton>
              <S.PrimaryButton type="submit" disabled={isConfirmingReturn}>
                <IconUndo />
                {isConfirmingReturn ? 'Confirmando...' : 'Confirmar regreso'}
              </S.PrimaryButton>
            </S.ModalActions>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </S.ScreenWrapper>
  );
};
