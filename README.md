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

El frontend se publica con GitHub Actions desde `.github/workflows/deploy-pages.yml`.

1. Pasar el repositorio a público.
2. En GitHub, ir a `Settings > Pages > Build and deployment` y elegir `GitHub Actions`.
3. Si el backend está publicado fuera de GitHub Pages, crear la variable de repositorio `VITE_API_BASE_URL` con la URL pública del backend, por ejemplo `https://api.imponect.com`.
4. Hacer push a `master` o `main`, o ejecutar manualmente el workflow `Deploy Frontend to GitHub Pages`.

La app se compila con base `/ImponectApp/`, por lo que la URL esperada del sitio es `https://nicoeliceche.github.io/ImponectApp/`.

## Configurar Codex En Otra Máquina

La guía y el instalador para replicar `codex` y `codex-here` están en:

- [Guía de configuración](docs/CODEX_LAPTOP_SETUP.md)
- `scripts/setup-codex-laptop.ps1`
