@echo off
echo ===================================
echo Starting PocketBase and Next.js Dev
echo ===================================

:: Start PocketBase in a new window
start "PocketBase Server" cmd /k "echo Starting PocketBase... && ..\backend\pocketbase.exe serve"

:: Wait for PocketBase to start
timeout /t 2 /nobreak > nul

:: Start Next.js in this window
echo Starting Next.js...
npm run dev
