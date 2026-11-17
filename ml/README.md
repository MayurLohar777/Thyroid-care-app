# Care Your Thyroid — Machine Learning & AI Pipeline

## Architecture Overview
The ML subsystem is strictly decoupled from the clinical guidelines rules engine and OCR text extraction.

### Core Modules
- `data/`: Versioned feature sets and synthetic patient datasets (strictly partitioned at the patient level).
- `preprocessing/`: Handling missing values, laboratory reference range normalization, and feature scaling.
- `training/`: Training routines for LightGBM/XGBoost models with cross-validation.
- `evaluation/`: Comprehensive assessment of Sensitivity, Specificity, Precision, Recall, F1, AUROC, AUPRC, and Brier Score.
- `inference/`: Production model inference engine supporting confidence and uncertainty scoring.
- `explainability/`: Local and global SHAP (SHapley Additive exPlanations) generators to show which biomarkers influenced predictions.

### Safety Guidelines
1. **Never fabricate model performance metrics or clinical efficacy.**
2. **Mandatory Patient-Level Splitting:** Prevent data leakage across longitudinal tests.
3. **No Binary Force:** Explicit support for `indeterminate` and `insufficient_data` states.
