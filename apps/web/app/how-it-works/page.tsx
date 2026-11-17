import React from "react";
import Link from "next/link";
import { UploadCloud, CheckCircle, LineChart, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Thyroid Laboratory Reports",
      description:
        "Upload any past or recent thyroid function test (TFT), antibody screen, or fine-needle aspiration report in PDF, PNG, or JPG format. Our platform processes your document through an encrypted S3-compatible vault and computes a cryptographic hash to avoid accidental duplicates.",
      icon: <UploadCloud className="w-8 h-8 text-brand-primary" />,
      callout: "Supports Quest, LabCorp, Dr Lal PathLabs, Apollo, Metropolis, and standard clinic sheets.",
    },
    {
      number: "02",
      title: "Verify Extracted Biomarkers Side-by-Side",
      description:
        "Because laboratory report designs and reference intervals vary widely, our Optical Character Recognition (OCR) model parses TSH, FT4, FT3, Total T3/T4, Anti-TPO, and Anti-Tg alongside extraction confidence scores. You review and verify every extracted number side-by-side with your original document before any analysis is performed.",
      icon: <CheckCircle className="w-8 h-8 text-brand-primary" />,
      callout: "Mandatory human-in-the-loop safety verification ensures 100% data integrity.",
    },
    {
      number: "03",
      title: "Understand Longitudinal Trends & Biomarker Shifts",
      description:
        "Once verified, your lab results are plotted on interactive, longitudinal biomarker graphs. View how your TSH and Free T4 correlate over time with your medication dosage (e.g., Levothyroxine). The platform highlights your lab's exact reference ranges without making false claims of disease progression based solely on numerical shifts.",
      icon: <LineChart className="w-8 h-8 text-brand-primary" />,
      callout: "Preserves laboratory-specific units (uIU/mL, pmol/L, ng/dL) and biological reference intervals.",
    },
    {
      number: "04",
      title: "Consult Verified Specialists with Structured History",
      description:
        "Book appointments with certified endocrinologists who can review your structured longitudinal timeline before your call. After each teleconsultation, access bilingual speaker-labeled transcripts, clinical recommendations, and doctor-prescribed follow-up lab orders.",
      icon: <Stethoscope className="w-8 h-8 text-brand-primary" />,
      callout: "Export comprehensive PDF clinical consultation summaries for your offline health binder.",
    },
  ];

  return (
    <div className="w-full bg-canvas-bg pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-stroke-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-semibold">
            <span>Workflow & Data Integrity</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark">
            How Care Your Thyroid Works
          </h1>
          <p className="text-base sm:text-lg text-typography-secondary max-w-2xl mx-auto leading-relaxed">
            A transparent, patient-centric flow engineered to bring order, clarity, and safety to complex thyroid conditions.
          </p>
        </div>
      </section>

      {/* Step by Step Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        {steps.map((step, idx) => (
          <Card key={idx} className="p-8 sm:p-10 border border-stroke-border shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex flex-col items-center sm:items-start">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary font-mono">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center mt-4">
                  {step.icon}
                </div>
              </div>

              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-sm text-typography-secondary leading-relaxed">
                  {step.description}
                </p>
                <div className="p-3.5 rounded-element bg-canvas-bg border border-stroke-border text-xs text-brand-dark font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step.callout}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}

        <div className="text-center pt-8">
          <Link href="/register">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Your Thyroid Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
