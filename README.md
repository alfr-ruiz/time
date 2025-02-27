# Next.js + PocketBase on Google Cloud Run

## Development Setup

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
