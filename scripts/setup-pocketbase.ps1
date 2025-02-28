# PocketBase Setup Script for Windows
# This script sets up PocketBase as a home server

$ErrorActionPreference = "Stop"
Write-Host "Setting up PocketBase for your home server..." -ForegroundColor Green

# Step 1: Create .env.local file
$envContent = @"
# PocketBase Configuration
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
"@

Write-Host "Creating .env.local file..." -ForegroundColor Yellow
Set-Content -Path ".env.local" -Value $envContent

# Step 2: Check if PocketBase executable already exists or prompt to download
if (Test-Path ".\pocketbase.exe") {
    Write-Host "PocketBase executable already exists!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "PocketBase executable not found!" -ForegroundColor Yellow
    Write-Host "Please download PocketBase manually by following these steps:" -ForegroundColor Cyan
    Write-Host "1. Visit: https://github.com/pocketbase/pocketbase/releases/latest" -ForegroundColor White
    Write-Host "2. Download 'pocketbase_windows_amd64.zip'" -ForegroundColor White
    Write-Host "3. Extract the zip file" -ForegroundColor White
    Write-Host "4. Move 'pocketbase.exe' to this directory: $(Get-Location)" -ForegroundColor White
    Write-Host "5. Run this script again after downloading" -ForegroundColor White
    Write-Host ""
    
    $downloadNow = Read-Host "Would you like to open the download page now? (y/n)"
    if ($downloadNow -eq 'y') {
        Start-Process "https://github.com/pocketbase/pocketbase/releases/latest"
    }
    
    exit 0
}

# Step 3: Create batch files for running PocketBase
$startPocketbaseContent = @"
@echo off
echo Starting PocketBase server...
start /b pocketbase.exe serve
"@

$startDevContent = @"
@echo off
echo ===================================
echo Starting PocketBase and Next.js Dev
echo ===================================

:: Start PocketBase in a new window
start "PocketBase Server" cmd /k "echo Starting PocketBase... && pocketbase.exe serve"

:: Wait for PocketBase to start
timeout /t 2 /nobreak > nul

:: Start Next.js in this window
echo Starting Next.js...
npm run dev
"@

Write-Host "Creating start scripts..." -ForegroundColor Yellow
Set-Content -Path "start-pocketbase.bat" -Value $startPocketbaseContent
Set-Content -Path "start-dev.bat" -Value $startDevContent

# Step 4: Create database directory if it doesn't exist
if (-not (Test-Path ".\pb_data")) {
    Write-Host "Creating pb_data directory..." -ForegroundColor Yellow
    New-Item -Path ".\pb_data" -ItemType Directory | Out-Null
}

Write-Host ""
Write-Host "=================================" -ForegroundColor Green
Write-Host "PocketBase Setup Complete!" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""
Write-Host "You can now run 'start-dev.bat' to start both PocketBase and Next.js" -ForegroundColor Cyan
Write-Host "First run: You'll need to create an admin account at http://127.0.0.1:8090/_/" -ForegroundColor Yellow
Write-Host ""
Write-Host "Run 'install-pocketbase-service.ps1' as Administrator to install" -ForegroundColor White
Write-Host "PocketBase as a Windows service (for permanent home server)" -ForegroundColor White
