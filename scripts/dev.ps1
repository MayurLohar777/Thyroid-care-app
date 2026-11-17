# Developer Startup Script for Care Your Thyroid
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  Starting Care Your Thyroid Development Services " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "Copying .env.example to .env..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
}

Write-Host "Checking Node.js..." -ForegroundColor Green
node -v
Write-Host "Checking NPM..." -ForegroundColor Green
npm -v

Write-Host "Starting Web Development Server (apps/web)..." -ForegroundColor Cyan
npm run dev --workspace=apps/web
