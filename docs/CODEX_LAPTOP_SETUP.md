# Configurar Codex En Una Laptop Windows

Esta guía replica los comandos de PowerShell usados para trabajar con Codex:

- `codex`: abre Codex directamente en `Blockchain-Vulnerabilities-Reports`.
- `codex-here`: abre Codex en el directorio actual.
- `codex-raw`: abre Codex con los permisos y confirmaciones normales.

Los comandos `codex` y `codex-here` deshabilitan el sandbox y las confirmaciones. Usarlos únicamente en repositorios y máquinas confiables.

## Requisitos

Instalar antes de ejecutar el configurador:

- Git para Windows con acceso SSH a GitHub.
- PowerShell 7.
- Visual Studio Code con el comando `code` disponible en `PATH`.

Verificar:

```powershell
git --version
pwsh --version
code --version
ssh -T git@github.com
```

Si la autenticación SSH de GitHub todavía no está configurada, completarla antes de ejecutar el instalador. También se puede usar temporalmente HTTPS:

```powershell
.\scripts\setup-codex-laptop.ps1 `
  -BlockchainRepoUrl 'https://github.com/NicoEliceche/Blockchain-Vulnerabilities-Reports.git'
```

## Instalación Automática

Después de clonar o actualizar `ImponectApp`, abrir PowerShell dentro del repositorio y ejecutar:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\setup-codex-laptop.ps1
```

El script:

1. Instala o actualiza la extensión oficial de OpenAI para VS Code.
2. Crea `C:\Workspaces`.
3. Clona el repositorio Blockchain si todavía no existe.
4. Agrega los comandos al perfil de PowerShell actual sin duplicarlos.
5. Marca como confiables en `$HOME\.codex\config.toml` todos los repos Git existentes bajo `C:\Workspaces`.
6. Instala los skills personalizados incluidos en `codex/skills`.
7. Valida que el ejecutable de Codex esté disponible.

Codex no soporta trust recursivo por carpeta padre. Para obtener ese comportamiento,
`codex-here` registra automáticamente el repo Git actual como confiable antes de
abrir Codex, siempre que esté dentro de `C:\Workspaces`. No registra rutas externas.

Para usar otra ruta:

```powershell
.\scripts\setup-codex-laptop.ps1 -WorkspaceRoot 'D:\Workspaces'
```

## Primer Uso

Cerrar y volver a abrir PowerShell. Luego ejecutar:

```powershell
codex-here --version
codex
```

Codex puede solicitar autenticación en el primer uso. Iniciar sesión desde la laptop; no copiar `auth.json` entre máquinas.

## Pedirle A Codex Que Complete La Configuración

Desde la laptop, después de hacer `git pull`, se puede iniciar Codex en `ImponectApp` y pedir:

```text
Leé docs/CODEX_LAPTOP_SETUP.md, ejecutá scripts/setup-codex-laptop.ps1 y verificá que funcionen codex y codex-here.
```

## Archivos Que No Se Sincronizan

Por seguridad y para evitar estado inconsistente, Git no incluye:

- `$HOME\.codex\auth.json`
- Historial y sesiones de Codex
- Credenciales locales
- `config/.env`
- Cambios locales no commiteados del repositorio Blockchain

Antes de cambiar de máquina, commitear y pushear cualquier trabajo necesario del repositorio Blockchain.

## Skills Incluidos

El instalador sincroniza estos skills personalizados:

- `blockchain-vuln-handoff`: flujo de auditoría y validación de vulnerabilidades.
- `project-conventions`: convenciones de arquitectura y seguridad de ImponectApp.
