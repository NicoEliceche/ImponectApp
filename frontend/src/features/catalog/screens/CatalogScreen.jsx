import React, { useState, useMemo } from 'react';
import { 
  IconSearch, 
  IconDownload, 
  IconClose,
  IconVideo
} from '../../../shared/components/Icons';
import * as S from './CatalogScreenStyled';

const products = [
  {
    id: 1,
    title: 'Cámara Industrial 4K Pro',
    description: 'Sistema de visión artificial avanzado con resolución 4K y procesamiento en tiempo real para control de calidad en líneas de producción de alta velocidad.',
    category: 'Visión Artificial',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1526733169359-ab1142275411?auto=format&fit=crop&q=80&w=800'
    ],
    useCases: [
      'Inspección de defectos en envases farmacéuticos.',
      'Lectura de códigos QR a 200 piezas por minuto.',
      'Verificación de ensamblaje en componentes electrónicos.'
    ]
  },
  {
    id: 2,
    title: 'Brazo Robótico X-Series',
    description: 'Brazo articulado de 6 ejes con precisión micrométrica. Ideal para tareas de pick and place, soldadura y ensamblaje de precisión en entornos industriales exigentes.',
    category: 'Robótica',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
    ],
    useCases: [
      'Automatización de fin de línea en plantas de alimentos.',
      'Soldadura por arco en chasis automotrices.',
      'Paletizado de cajas de hasta 15kg.'
    ]
  },
  {
    id: 3,
    title: 'Sensor de Proximidad Laser',
    description: 'Sensor de alta fidelidad para medición de distancia sin contacto. Resistente a condiciones extremas de polvo, humedad y vibración.',
    category: 'Sensores',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
    ],
    useCases: [
      'Control de nivel en tanques de almacenamiento de líquidos.',
      'Detección de presencia en bandas transportadoras.',
      'Medición de espesor en láminas de acero en caliente.'
    ]
  },
  {
    id: 4,
    title: 'PLC Master Core 500',
    description: 'Controlador lógico programable de alto rendimiento con conectividad IIoT integrada. Soporta múltiples protocolos de comunicación industrial.',
    category: 'Control',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    ],
    useCases: [
      'Control centralizado de plantas potabilizadoras.',
      'Gestión de energía en edificios inteligentes.',
      'Sincronización de ejes en máquinas de empaque.'
    ]
  }
];

export const CatalogScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return products;

    return products.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }, [search]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
  };

  return (
    <S.ScreenWrapper>
      <S.MainArea>
        <S.TopBar>
          <S.SearchBox>
            <IconSearch />
            <input 
              type="search" 
              placeholder="Buscar por nombre, categoría o descripción..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </S.SearchBox>
          <S.DownloadButton>
            <IconDownload />
            Descargar catálogo como PDF
          </S.DownloadButton>
        </S.TopBar>

        <S.ProductGrid>
          {filteredProducts.map(product => (
            <S.ProductCard key={product.id}>
              <S.ProductImage>
                <img src={product.image} alt={product.title} />
                <S.ProductBadge>{product.category}</S.ProductBadge>
              </S.ProductImage>
              <S.ProductContent>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductDesc>{product.description}</S.ProductDesc>
              </S.ProductContent>
              <S.CardFooter>
                <S.SpecsButton onClick={() => handleOpenModal(product)}>
                  Ver Especificaciones
                </S.SpecsButton>
              </S.CardFooter>
            </S.ProductCard>
          ))}
        </S.ProductGrid>
      </S.MainArea>

      {selectedProduct && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseModal onClick={handleCloseModal}>
              <IconClose />
            </S.CloseModal>
            
            <S.ModalScrollArea>
              <S.CarouselSection>
                <S.CarouselImage 
                  src={selectedProduct.images[currentImageIndex]} 
                  alt={selectedProduct.title} 
                />
                {selectedProduct.images.length > 1 && (
                  <S.CarouselNav>
                    {selectedProduct.images.map((_, idx) => (
                      <S.CarouselDot 
                        key={idx} 
                        $active={idx === currentImageIndex}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </S.CarouselNav>
                )}
              </S.CarouselSection>

              <S.ModalTextContent>
                <S.ModalTitle>{selectedProduct.title}</S.ModalTitle>
                <S.ModalDesc>{selectedProduct.description}</S.ModalDesc>
                
                <S.UseCasesSection>
                  <S.UseCasesHeading>Casos de Uso</S.UseCasesHeading>
                  {selectedProduct.useCases.map((useCase, index) => (
                    <S.UseCaseItem key={index}>
                      <S.UseCaseText>{useCase}</S.UseCaseText>
                    </S.UseCaseItem>
                  ))}
                </S.UseCasesSection>
              </S.ModalTextContent>
            </S.ModalScrollArea>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.ScreenWrapper>
  );
};
