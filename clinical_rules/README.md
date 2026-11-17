# Care Your Thyroid — Clinical Guidelines Rules Engine

## Overview
Independently testable, deterministic rule engine implementing American Thyroid Association (ATA) and European Thyroid Association (ETA) diagnostic and monitoring guidelines.

### Characteristics
- Pure Python deterministic decision logic with zero probabilistic/black-box dependencies.
- Classifies patient verified biomarker profiles into clinical categories:
  - Euthyroid
  - Subclinical Hypothyroidism
  - Overt Hypothyroidism
  - Subclinical Hyperthyroidism
  - Overt Hyperthyroidism
  - Isolated Hypothyroxinemia / Indeterminate
  - Insufficient Data
- Generates clear, non-diagnostic patient education statements and clinical summary notes for attending physicians.
