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
