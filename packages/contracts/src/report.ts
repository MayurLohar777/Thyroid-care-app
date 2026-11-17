export type BiomarkerType =
  | "TSH"
  | "FT4"
  | "FT3"
  | "T3"
  | "T4"
  | "Anti_TPO"
  | "Anti_Tg";

export type OCRStatus = "pending" | "processing" | "completed" | "failed";

export interface ExtractedBiomarker {
  id: string;
  biomarker: BiomarkerType;
  raw_text: string;
  numeric_value: number | null;
  unit: string;
  reference_low: number | null;
  reference_high: number | null;
  reference_text: string | null;
  confidence_score: number;
  user_corrected: boolean;
}

export function isBiomarkerType(val: unknown): val is BiomarkerType {
  const allowed = ["TSH", "FT4", "FT3", "T3", "T4", "Anti_TPO", "Anti_Tg"];
  return typeof val === "string" && allowed.includes(val);
}
