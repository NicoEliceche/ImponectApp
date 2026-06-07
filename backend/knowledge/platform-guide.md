# Imponect App - Guía Operativa

## Dashboard

El Dashboard es la pantalla principal de Imponect App. Muestra accesos rápidos a Documentos, ClickUp, la web principal y Email. También contiene IA Assist para consultas generales y el Asistente Imponect para aprender a usar y operar la plataforma.

Ruta: `/`

Cómo usar el Dashboard:

1. Usar Accesos Rápidos para abrir Documentos, ClickUp, Imponect.com o Email.
2. Usar IA Assist para consultas generales que pueden requerir información web.
3. Usar Asistente Imponect para aprender a usar la App o pedirle que navegue y opere funciones permitidas.
4. Abrir el botón flotante del Asistente Imponect para conservar la conversación mientras se navega por otras pantallas.

## Documentos

Documentos administra archivos almacenados en la carpeta IMPONECT de OneDrive.

Desde Documentos se puede:

- Navegar entre carpetas.
- Buscar archivos y carpetas por nombre.
- Crear carpetas.
- Crear archivos Word, Excel y texto.
- Abrir, descargar, copiar, mover, renombrar y eliminar elementos.
- Sincronizar la vista con OneDrive.

Ruta raíz: `/documents`

Para abrir una carpeta se utiliza `/documents/:folderId`.

Las eliminaciones requieren confirmación manual y contraseña. El asistente no elimina archivos.

Cómo crear una carpeta o archivo manualmente:

1. Entrar a Documentos y navegar hasta la carpeta de destino.
2. Presionar Crear.
3. Elegir Nueva Carpeta, Nuevo Word, Nuevo Excel o Archivo de texto.
4. Escribir el nombre y confirmar con Crear.

Cómo buscar y abrir un archivo:

1. Escribir parte del nombre en el buscador de Documentos.
2. Seleccionar el resultado.
3. Hacer doble click para abrirlo o usar el menú contextual para descargarlo, moverlo, copiarlo o ir a su ruta.

También se le puede pedir al Asistente Imponect que busque un archivo por nombre. El asistente navega hasta su carpeta y deja el archivo seleccionado.

## Email

Email permite administrar cuentas IMAP y SMTP, leer carpetas, redactar mensajes, enviar emails y guardar borradores.

Desde Email se puede:

- Leer Bandeja, Enviados, Borradores, Correo no deseado y Papelera.
- Redactar mensajes con destinatarios, CC, formato, firma y adjuntos.
- Guardar borradores en el servidor IMAP.
- Enviar mensajes mediante SMTP.
- Marcar mensajes como leídos o no leídos.
- Mover mensajes entre carpetas.

Ruta: `/email`

Cómo redactar y enviar un email:

1. Elegir la cuenta activa.
2. Presionar Redactar.
3. Completar destinatario, copia opcional, asunto y cuerpo.
4. Adjuntar archivos si corresponde.
5. Presionar Enviar Mensaje. El modal se cierra y el resultado aparece mediante una notificación flotante.

Cómo guardar y encontrar un borrador:

1. En el editor de Nuevo Mensaje, presionar Guardar como borrador.
2. Esperar la confirmación.
3. Abrir la carpeta Borradores de la cuenta activa.

## Agentes Y Asistentes

La sección Agentes / Asistentes permite crear y configurar agentes personalizados, instrucciones, RAG, skills y servidores MCP.

Ruta: `/ai-hub`

Para crear un agente o asistente, entrar a la sección y presionar Nuevo Agente/Asistente. Luego completar su configuración e instrucciones.

## Chats Y CRM

La sección Chats centraliza conversaciones y funciones de CRM.

Ruta: `/crm`

## Presupuestos

La sección Presupuestos permite administrar presupuestos comerciales.

Ruta: `/quotes`

## Cotizador

El Cotizador permite calcular y preparar cotizaciones.

Ruta: `/cotizador`

## Negocio

La sección Negocio concentra información operativa y comercial.

Ruta: `/business`

## Capacidades Del Asistente Imponect

El Asistente Imponect conoce esta guía y puede:

- Explicar cómo usar la plataforma.
- Navegar a pantallas internas.
- Abrir los enlaces permitidos de ClickUp e Imponect.com.
- Buscar archivos y carpetas en OneDrive.
- Llevar al usuario hasta la carpeta donde está un archivo.
- Crear carpetas y archivos Word, Excel o texto.

Por seguridad, el asistente no elimina, mueve, renombra ni envía emails sin un flujo de confirmación explícita implementado.

Ejemplos:

- "Llevame a Email".
- "Buscá el archivo presupuesto junio".
- "Creá una carpeta llamada Clientes 2026".
- "Creá un Word llamado Propuesta Comercial".
- "¿Cómo guardo un email como borrador?".
