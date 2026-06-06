@echo off
setlocal
cd /d "%~dp0"
TITLE Imponect App - Launcher

echo ==========================================
echo INICIANDO IMPONECT APP (WEB-FIRST)
echo ==========================================
echo.

echo [1/2] Iniciando Backend en una nueva ventana...
:: Abrimos el backend en su carpeta
start "Imponect - Backend" cmd /k "cd /d "%~dp0backend" && npm run dev"

:: Wait for backend to start
echo Esperando a que el backend inicie...
timeout /t 5 >nul

echo [2/2] Iniciando Frontend en una nueva ventana...
:: Abrimos el frontend en su carpeta
start "Imponect - Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo.
echo ==========================================
echo SISTEMA EN MARCHA
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo ==========================================
pause
