@echo off
setlocal
cd /d "%~dp0"

echo ==========================================
echo REINICIANDO IMPONECT APP (DEBUG MODE)
echo ==========================================

:: Paso 1: Cerrar ventanas por titulo
echo [1/4] Cerrando ventanas existentes...
taskkill /FI "WINDOWTITLE eq Imponect - Backend" /T /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq Imponect - Frontend" /T /F >nul 2>&1

:: Paso 2: Limpiar procesos de Node (General)
:: Esto es mas seguro si hay procesos huerfanos
echo [2/4] Liberando puertos...

:: Liberar puerto 5000
for /f "tokens=5" %%p in ('netstat -aon ^| findstr :5000') do (
    echo Matando proceso PID %%p en puerto 5000...
    taskkill /F /PID %%p >nul 2>&1
)

:: Liberar puerto 5173
for /f "tokens=5" %%p in ('netstat -aon ^| findstr :5173') do (
    echo Matando proceso PID %%p en puerto 5173...
    taskkill /F /PID %%p >nul 2>&1
)

echo [3/4] Esperando 2 segundos para liberar recursos...
timeout /t 2 >nul

echo [4/4] Lanzando aplicacion...
if exist run-dev.bat (
    echo Todo listo. Iniciando...
    :: Usamos START para que esta ventana no se quede colgada
    start run-dev.bat
) else (
    echo ERROR: No se encontro run-dev.bat
    pause
)

exit
