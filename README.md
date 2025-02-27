# Next.js + Supabase on Google Cloud Run

## Development Setup

1. Replace Supabase credentials in `.env.local`
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

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
```
