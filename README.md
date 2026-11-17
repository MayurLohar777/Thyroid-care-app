# Care Your Thyroid

> **"Your Thyroid Health, Connected and Simplified."**

Care Your Thyroid is a unified, enterprise-grade healthcare platform engineered to assist patients in managing thyroid disorders, uploading longitudinal diagnostic lab reports, verifying OCR extractions, consulting verified medical specialists, booking laboratory sample collections, and observing biomarker trajectories over time.

---

## 🏗 System Architecture & Monorepo Structure

```text
care-your-thyroid/
  apps/
    web/                     # Next.js 14 App Router, Tailwind CSS, Redux Toolkit
    mobile/                  # React Native + Expo Mobile Application Shell
    api/                     # Python 3.11+ FastAPI Asynchronous Backend
  packages/
    contracts/               # Shared TypeScript schemas & API contracts
    config/                  # Shared tooling, ESLint, and Tailwind configurations
  ml/                        # Machine Learning Pipeline (Patient-partitioned datasets, SHAP)
  ocr/                       # Document text & table extraction pipeline with confidence scoring
  clinical_rules/            # Deterministic, independently testable clinical rule engines
  infrastructure/            # Docker, Compose, and monitoring configurations
  docs/                      # Clinical protocols, API specifications, and compliance guides
  scripts/                   # Developer automation and database seeds
  tests/                     # Integration and end-to-end test suites
```

---

## 🩺 Strict Medical Safety & Privacy Principles

1. **Non-Diagnostic Assistance:** The platform provides decision support and health organization tools. It does **not** provide independent medical diagnosis or replace licensed physicians.
2. **Explicit Verification Barrier:** All OCR-extracted lab values require explicit human validation before inclusion in clinical rule evaluation or trend analysis.
3. **Decoupled Architecture:** Clinical rules (deterministic guideline logic) and Machine Learning models (probabilistic risk scoring) are completely decoupled.
4. **Data Isolation:** Patient data is partitioned strictly at the patient level to prevent any clinical data leakage.

---

## 🚀 Quickstart & Local Development

### Prerequisites
- Node.js 18+ (Node 20+ recommended)
- Python 3.11+
- Docker & Docker Compose (optional for local DB/Redis/MinIO)

### 1. Environment Setup
```bash
cp .env.example .env
```

### 2. Infrastructure (PostgreSQL, Redis, MinIO)
```bash
docker-compose up -d db redis minio
```

### 3. API Backend (`apps/api`)
```bash
cd apps/api
python -m venv venv
source venv/bin/activate  # Or `.\venv\Scripts\Activate.ps1` on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
API Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)  
Health Check: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)

### 4. Web Application (`apps/web`)
```bash
cd apps/web
npm install
npm run dev
```
Access Web App: [http://localhost:3000](http://localhost:3000)

---

## 📋 Development Methodology

This repository follows a strict 13-phase engineering methodology:
- **Phase 1:** Full-Stack Foundation and Monorepo *(Current Phase)*
- **Phase 2:** Authentication (Email/Mobile OTP, Secure Sessions, Roles)
- **Phase 3:** Patient Profile & Health History
- **Phase 4:** First-Time Thyroid Screening Questionnaire
- **Phase 5:** Doctor Directory & Appointment Booking
- **Phase 6:** Consultation, Telehealth & Transcripts
- **Phase 7:** Testing & Home Sample Phlebotomy
- **Phase 8:** Reports, S3 Storage & Verified OCR
- **Phase 9:** Clinical Rules & AI/ML Analysis
- **Phase 10:** Longitudinal Monitoring & Biomarker Trends
- **Phase 11:** Doctor & Admin Platforms
- **Phase 12:** Notifications & External Integrations
- **Phase 13:** Production Hardening & Security Audit
