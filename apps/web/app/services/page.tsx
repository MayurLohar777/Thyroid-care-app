import React from "react";
import Link from "next/link";
import {
  FileText,
  TrendingUp,
  UserCheck,
  Microscope,
  Sparkles,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function ServicesPage() {
  const services = [
    {
      title: "Longitudinal Thyroid Biomarker Monitoring",
      description:
        "Visualize historical trajectories of TSH, Free T4, Free T3, and antibodies over months and years. Preserve original laboratory-specific units and reference ranges while observing patterns alongside medication adjustments.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "Interactive multi-year comparison charts",
        "Laboratory-specific reference range shading",
        "Medication dosage correlation markers",
        "Numerical delta calculation without false progression claims",
      ],
      badge: "Core Feature",
    },
    {
      title: "Medical Report Vault & Verified OCR",
      description:
        "Digitize paper and PDF laboratory reports instantly. Our specialized optical character recognition parser extracts thyroid panels with confidence scoring and mandates human verification before archiving.",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "PDF, JPG, and PNG high-resolution upload",
        "SHA-256 duplicate report detection",
        "Analyte parsing (TSH, FT4, FT3, T3, T4, Anti-TPO, Anti-Tg)",
        "Side-by-side human-in-the-loop verification studio",
      ],
      badge: "Data Digitization",
    },
    {
      title: "Specialist Telehealth Consultations",
      description:
        "Consult board-certified endocrinologists through secure video and audio channels. Clinicians gain authorized access to your structured records and provide detailed post-consultation care plans.",
      icon: <UserCheck className="w-6 h-6" />,
      features: [
        "Verified endocrinologists and thyroid specialists",
        "Post-consultation transcripts with speaker turns",
        "Bilingual transcript translation option",
        "One-click PDF clinical summary download",
      ],
      badge: "Clinical Care",
    },
    {
      title: "Home Phlebotomy & Sample Collection",
      description:
        "When your consulting specialist requests diagnostic thyroid panels, confirm a convenient home blood collection appointment and monitor live testing status through sample processing to result delivery.",
      icon: <Microscope className="w-6 h-6" />,
      features: [
        "Doctor-prescribed thyroid test panels",
        "Patient address and slot confirmation",
        "Live phlebotomist and laboratory processing tracking",
        "Automated digital report delivery directly to your vault",
      ],
      badge: "Diagnostic Logistics",
    },
    {
      title: "Clinically Reviewed Decision Support",
      description:
        "Transparent, guideline-driven assessment implementing American and European Thyroid Association protocols. Separates deterministic rule outcomes from probabilistic machine learning with full explainability.",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "Non-diagnostic clinical guidelines evaluation",
        "Patient-level trained LightGBM risk estimation",
        "SHAP feature importance ranking",
        "Support for insufficient-data and indeterminate states",
      ],
      badge: "Decision Support",
    },
    {
      title: "HIPAA & DPDP Protected Health Repository",
      description:
        "Your health data belongs to you. Built with strict role-based access control, cryptographic session storage, and comprehensive audit trails for every medical record viewed or downloaded.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Bank-grade AES-256 encryption at rest",
        "Least-privilege authorization guards",
        "Zero token storage in localStorage or Redux",
        "Tamper-evident audit logging",
      ],
      badge: "Enterprise Security",
    },
  ];

  return (
    <div className="w-full bg-canvas-bg pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-stroke-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-semibold">
            <span>Specialized Clinical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark">
            Comprehensive Thyroid Health Services
          </h1>
          <p className="text-base sm:text-lg text-typography-secondary max-w-2xl mx-auto leading-relaxed">
            From smart lab report digitization to specialized consultations and longitudinal biomarker monitoring.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} hoverable className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                    {service.icon}
                  </div>
                  <Badge variant="brand" size="sm">
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2 border-t border-stroke-border space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-typography-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stroke-border/80">
                <Link href="/register">
                  <Button variant="ghost" size="sm" className="w-full justify-between" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Get Started with this Service
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
