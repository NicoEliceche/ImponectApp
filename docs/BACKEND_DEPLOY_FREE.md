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
4. Render detecta `render.yaml` en la raiz y crea el servicio `imponect-api`.
5. El Blueprint ya configura:

```env
NODE_ENV=production
FRONTEND_URL=https://nicoeliceche.github.io/ImponectApp
CORS_ORIGINS=https://nicoeliceche.github.io
DB_SCHEMA=public
JWT_SECRET=<generado automaticamente por Render>
```

6. Completar estas variables cuando Render las pida:

```env
DATABASE_URL=
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
MICROSOFT_REDIRECT_URI=https://imponect-api.onrender.com/api/auth/microsoft/callback
CLICKUP_CLIENT_ID=
CLICKUP_CLIENT_SECRET=
CLICKUP_REDIRECT_URI=https://imponect-api.onrender.com/api/auth/clickup/callback
GEMINI_API_KEY=
```

Si el Blueprint ya existia y agregamos variables nuevas, Render no vuelve a pedir las que tienen `sync: false`; agregarlas manualmente desde `imponect-api > Environment`.

## 3. Microsoft Azure

En la App Registration de Microsoft, agregar Redirect URI:

```text
https://imponect-api.onrender.com/api/auth/microsoft/callback
```

Debe coincidir exactamente con `MICROSOFT_REDIRECT_URI`.

## 4. Redeploy frontend

Cuando el backend responda en Render:

```powershell
cd frontend
$env:VITE_API_BASE_URL='https://imponect-api.onrender.com'
npm run deploy
```

Verificar:

- `https://imponect-api.onrender.com/health`
- `https://imponect-api.onrender.com/health/db`
- `https://nicoeliceche.github.io/ImponectApp/documents`
