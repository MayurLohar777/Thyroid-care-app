# Care Your Thyroid — Document Processing & OCR Pipeline

## Overview
Secure multi-format (PDF, JPG, PNG) lab report extraction pipeline with token-level bounding box confidence scoring.

### Supported Thyroid Analytes
- **TSH** (Thyroid Stimulating Hormone)
- **FT4** (Free Thyroxine)
- **FT3** (Free Triiodothyronine)
- **T3** (Total Triiodothyronine)
- **T4** (Total Thyroxine)
- **Anti-TPO** (Thyroid Peroxidase Antibodies)
- **Anti-Tg** (Thyroglobulin Antibodies)

### Safety Constraint
**OCR extraction is for digitization only.** Extracted values are flagged as unverified until explicitly reviewed and confirmed by the human user against the original uploaded lab report.
