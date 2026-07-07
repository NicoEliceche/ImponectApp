# Imponect App

Aplicación web de gestión con frontend React/Vite y backend Node.js/Express.

## Requisitos

- Node.js 20+
- PostgreSQL

## Configuración inicial

```powershell
Copy-Item config/.env.example config/.env
cd backend
npm install
cd ../frontend
npm install
```

Completar `config/.env` con las credenciales locales. El archivo real está excluido de Git.

## Desarrollo

Desde la raíz:

```powershell
.\run-dev.bat
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

La integración de Email utiliza IMAP y SMTP configurados desde la pantalla Email de la App.

## Deploy En GitHub Pages

El frontend se publica igual que `VivenciaGaucha`: se compila `frontend/dist` y se sube el resultado a la rama `gh-pages`.

1. En GitHub, ir a `Settings > Pages > Build and deployment`.
2. Elegir `Deploy from a branch`.
3. Seleccionar `gh-pages` y carpeta `/root`.
4. Ejecutar:

```powershell
cd frontend
npm run deploy
```

La app se compila con base `/ImponectApp/`, por lo que la URL esperada del sitio es `https://nicoeliceche.github.io/ImponectApp/`.

Si el backend está publicado fuera de GitHub Pages, ejecutar el deploy con `VITE_API_BASE_URL` apuntando a esa URL pública, por ejemplo:

```powershell
$env:VITE_API_BASE_URL='https://api.imponect.com'
npm run deploy
```

Para que OneDrive, Email, ClickUp y los asistentes funcionen en GitHub Pages, el backend Express también debe estar publicado en una URL HTTPS. GitHub Pages solo sirve el frontend estático; no ejecuta `/api`. En producción, configurar en el backend:

```env
FRONTEND_URL=https://nicoeliceche.github.io/ImponectApp/
MICROSOFT_REDIRECT_URI=https://TU_BACKEND_PUBLICO/api/auth/microsoft/callback
CLICKUP_REDIRECT_URI=https://TU_BACKEND_PUBLICO/api/auth/clickup/callback
```

Guía corta para deploy gratuito del backend:

- [Backend deploy gratuito](docs/BACKEND_DEPLOY_FREE.md)

## Configurar Codex En Otra Máquina

La guía y el instalador para replicar `codex` y `codex-here` están en:

- [Guía de configuración](docs/CODEX_LAPTOP_SETUP.md)
- `scripts/setup-codex-laptop.ps1`
