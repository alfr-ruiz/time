# Next.js + PocketBase on Google Cloud Run

## Development Setup

### Windows Setup

1. Set up PocketBase as your home server:
   - Run `scripts/setup-pocketbase.ps1` script with PowerShell:
     ```powershell
     powershell -ExecutionPolicy Bypass -File .\scripts\setup-pocketbase.ps1
     ```
   - Follow the instructions to download PocketBase
   - Once PocketBase is downloaded, run the script again
   - For a persistent server, run the service installer as Administrator:
     ```powershell
     # Run PowerShell as Administrator
     powershell -ExecutionPolicy Bypass -File .\scripts\install-pocketbase-service.ps1
     ```

2. Start development environment:
   - Use the provided batch file to run both PocketBase and Next.js:
     ```bash
     .\scripts\start-dev.bat
     ```
   - On first run, access the PocketBase admin UI at `http://127.0.0.1:8090/_/` to create admin account
   - Configure your collections and schema

### General Setup

1. Set up PocketBase locally:
   - Download PocketBase from [pocketbase.io](https://pocketbase.io/docs/)
   - Run PocketBase locally: `./pocketbase serve`
   - Access the admin UI at `http://127.0.0.1:8090/_/`
   - Create collections and set up your schema

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## Project Structure

The project is organized into the following directories:

- `/src`: Next.js application source code
  - `/app`: Next.js app router 
  - `/components`: Reusable React components
  - `/lib`: Utility functions and shared libraries
  - `/types`: TypeScript type definitions

- `/public`: Static assets served by Next.js

- `/scripts`: Utility scripts for development and deployment
  - `start-dev.bat`: Script to start both PocketBase and Next.js
  - `start-pocketbase.bat`: Script to start only PocketBase
  - `setup-pocketbase.ps1`: PowerShell script for setting up PocketBase
  - `install-pocketbase-service.ps1`: Script for installing PocketBase as a Windows service

- `/config`: Configuration files
  - `.eslintrc.js`: ESLint configuration
  - `.prettierrc.js`: Prettier configuration
  - `postcss.config.js`: PostCSS configuration
  - `tailwind.config.js`: Tailwind CSS configuration

- `/backend`: Backend-related files
  - `pocketbase.exe`: PocketBase executable
  - `pb_data`: PocketBase data directory
  - `pb-schema-*.json`: Schema definitions for PocketBase

## Docker Commands

- Build image:

```bash
docker-compose build
```

- Start container:

```bash
docker-compose up
```

## Deployment

1. Enable Cloud Build API
2. Run deployment:

```bash
gcloud builds submit --config=cloudbuild.yaml
