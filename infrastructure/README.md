# Care Your Thyroid — Infrastructure & Deployment

## Services Orchestrated
- **PostgreSQL 16:** Primary relational store for user credentials, medical metadata, appointments, and consultations.
- **Redis 7:** Ephemeral session caching, OTP rate limiting, and background queue broker.
- **MinIO:** S3-compatible local object storage for original uploaded lab reports.
- **FastAPI Backend (`apps/api`):** Python asynchronous backend service.
- **Next.js Web (`apps/web`):** App Router client.

## Launch Local Stack
```bash
docker-compose up -d
```
