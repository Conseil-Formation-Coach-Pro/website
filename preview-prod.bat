@echo off
cd /d "%~dp0"
call npm.cmd run build
if errorlevel 1 (
    pause
    exit /b 1
)
start "Amelie Riche Preview Server" cmd /k "npm.cmd run preview"
timeout /t 3 /nobreak >nul
start "" "http://localhost:4173"
