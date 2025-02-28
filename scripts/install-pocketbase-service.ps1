# Install PocketBase as a Windows Service
# Must be run as Administrator

$ErrorActionPreference = "Stop"

# Check if running as Administrator
$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "This script must be run as Administrator. Please restart with admin privileges." -ForegroundColor Red
    exit 1
}

# Install NSSM (Non-Sucking Service Manager) if not already installed
if (-not (Test-Path ".\nssm.exe")) {
    Write-Host "Downloading NSSM..." -ForegroundColor Yellow
    $nssmUrl = "https://nssm.cc/release/nssm-2.24.zip"
    $nssmZip = ".\nssm.zip"
    
    Invoke-WebRequest -Uri $nssmUrl -OutFile $nssmZip
    Expand-Archive -Path $nssmZip -DestinationPath ".\nssm-temp" -Force
    
    # Copy the appropriate nssm.exe for the system architecture
    if ([Environment]::Is64BitOperatingSystem) {
        Copy-Item ".\nssm-temp\nssm-2.24\win64\nssm.exe" -Destination "."
    } else {
        Copy-Item ".\nssm-temp\nssm-2.24\win32\nssm.exe" -Destination "."
    }
    
    # Clean up
    Remove-Item -Path $nssmZip -Force
    Remove-Item -Path ".\nssm-temp" -Recurse -Force
}

# Get the current directory (where PocketBase is located)
$currentDir = (Get-Location).Path
$pocketBasePath = Join-Path -Path $currentDir -ChildPath "pocketbase.exe"

# Check if PocketBase exists
if (-not (Test-Path $pocketBasePath)) {
    Write-Host "PocketBase executable not found at: $pocketBasePath" -ForegroundColor Red
    Write-Host "Please run setup-pocketbase.ps1 first" -ForegroundColor Yellow
    exit 1
}

# Service name
$serviceName = "PocketBaseServer"

# Check if service already exists
$serviceExists = Get-Service -Name $serviceName -ErrorAction SilentlyContinue

if ($serviceExists) {
    Write-Host "Service $serviceName already exists. Removing it first..." -ForegroundColor Yellow
    & .\nssm.exe remove $serviceName confirm
}

# Install the service
Write-Host "Installing PocketBase as a service..." -ForegroundColor Green
& .\nssm.exe install $serviceName $pocketBasePath
& .\nssm.exe set $serviceName AppParameters "serve"
& .\nssm.exe set $serviceName AppDirectory $currentDir
& .\nssm.exe set $serviceName DisplayName "PocketBase Server"
& .\nssm.exe set $serviceName Description "Self-hosted backend for your time tracking application"
& .\nssm.exe set $serviceName Start AUTO_START

# Set service to restart if it fails
& .\nssm.exe set $serviceName AppRestartDelay 10000

# Start the service
Write-Host "Starting PocketBase service..." -ForegroundColor Green
Start-Service -Name $serviceName

# Check service status
$service = Get-Service -Name $serviceName
Write-Host "Service status: $($service.Status)" -ForegroundColor Cyan
Write-Host "PocketBase is now running as a Windows service!" -ForegroundColor Green
Write-Host "PocketBase Admin UI: http://127.0.0.1:8090/_/" -ForegroundColor Cyan
Write-Host "To stop the service: Stop-Service -Name $serviceName" -ForegroundColor White
