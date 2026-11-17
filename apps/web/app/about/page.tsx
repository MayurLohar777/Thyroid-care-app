import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function AboutPage() {
  return (
    <div className="w-full bg-canvas-bg pb-20">
      {/* Hero Header */}
      <section className="bg-white border-b border-stroke-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-semibold">
            <span>Our Clinical Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark">
            Empowering Patients & Endocrinologists Through Clarity
          </h1>
          <p className="text-base sm:text-lg text-typography-secondary max-w-2xl mx-auto leading-relaxed">
            Care Your Thyroid was founded to eliminate fragmented health histories and provide patients with safe, transparent, and verified thyroid care.
          </p>
        </div>
      </section>

      {/* Pillars of Clinical Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-brand-dark">Our Core Principles</h2>
          <p className="text-sm text-typography-secondary mt-1">
            Built from the ground up on medical safety, clinical transparency, and patient empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark">Clinical Safety First</h3>
            <p className="text-sm text-typography-secondary leading-relaxed">
              We never replace doctors. Machine learning and rule engines are strictly assistive tools designed to organize longitudinal lab values for clinical review.
            </p>
          </Card>

          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark">Radical Transparency</h3>
            <p className="text-sm text-typography-secondary leading-relaxed">
              Every extracted number requires user verification. Every AI prediction shows confidence ratings and uncertainty metrics rather than false certainty.
            </p>
          </Card>

          <Card className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-brand-dark">Unified Continuity of Care</h3>
            <p className="text-sm text-typography-secondary leading-relaxed">
              Connecting lab reports, at-home phlebotomy tests, and certified endocrinologists in one longitudinal view that preserves original units and lab ranges.
            </p>
          </Card>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-card border border-stroke-border p-8 sm:p-12 shadow-card">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Standards & Security Commitment</h2>
            <p className="text-sm text-typography-secondary leading-relaxed">
              Care Your Thyroid adheres to the highest data protection and medical device software safety standards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-typography-primary">
                  DPDP Act (India) & HIPAA Compliant Data Enclaves
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-typography-primary">
                  AES-256 Encryption at Rest & TLS 1.3 in Transit
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-typography-primary">
                  Zero Data Leakage Patient-Partitioned ML Training
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-typography-primary">
                  Immutable Audit Logging for Protected Health Information
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
