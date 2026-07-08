# Backend deploy gratuito

Recomendacion actual para Imponect:

- Backend Node/Express: Render Web Service free.
- Base PostgreSQL: Neon Free.
- Frontend: GitHub Pages.

## 1. Neon

1. Crear cuenta en https://neon.com.
2. Crear un proyecto Postgres.
3. Copiar el connection string del proyecto.
4. Usarlo como `DATABASE_URL` en Render.

## 2. Render

1. Crear cuenta en https://render.com.
2. New > Blueprint.
3. Conectar el repo `NicoEliceche/ImponectApp`.
4. Render detecta `render.yaml` y crea el servicio `imponect-api`.
5. Completar estas variables:

```env
DATABASE_URL=
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
MICROSOFT_REDIRECT_URI=https://TU_BACKEND.onrender.com/api/auth/microsoft/callback
CLICKUP_CLIENT_ID=
CLICKUP_CLIENT_SECRET=
CLICKUP_REDIRECT_URI=https://TU_BACKEND.onrender.com/api/auth/clickup/callback
GEMINI_API_KEY=
```

`FRONTEND_URL` ya queda configurada como:

```env
https://nicoeliceche.github.io/ImponectApp
```

## 3. Microsoft Azure

En la App Registration de Microsoft, agregar Redirect URI:

```text
https://TU_BACKEND.onrender.com/api/auth/microsoft/callback
```

Debe coincidir exactamente con `MICROSOFT_REDIRECT_URI`.

## 4. Redeploy frontend

Cuando el backend responda en Render:

```powershell
cd frontend
$env:VITE_API_BASE_URL='https://TU_BACKEND.onrender.com'
npm run deploy
```

Verificar:

- `https://TU_BACKEND.onrender.com/health`
- `https://TU_BACKEND.onrender.com/health/db`
- `https://nicoeliceche.github.io/ImponectApp/documents`
