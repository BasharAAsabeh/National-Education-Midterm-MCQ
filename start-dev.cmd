@echo off
setlocal
cd /d "%~dp0" || exit /b 1

if exist ".tools\node\package\bin\node.exe" if exist "node_modules\vite\bin\vite.js" (
    ".tools\node\package\bin\node.exe" "node_modules\vite\bin\vite.js" %*
    exit /b
)

where npm.cmd >nul 2>nul
if errorlevel 1 (
    echo Node.js and npm are unavailable. Open dist\quiz.html to study offline.
    exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
    call npm.cmd ci
    if errorlevel 1 exit /b 1
)

call npm.cmd run dev -- %*
