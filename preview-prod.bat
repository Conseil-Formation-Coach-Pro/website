@echo off
cd /d "%~dp0"
call npm run build
start "Amelie Riche Preview Server" cmd /k "npm run preview"
timeout /t 3 /nobreak >nul
start "" "http://localhost:4173"
