import React from "react";
import Link from "next/link";
import {
  Activity,
  FileText,
  UserCheck,
  Calendar,
  Sparkles,
  Shield,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle,
  Stethoscope,
  Microscope,
  FileCheck,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-white via-canvas-bg to-canvas-bg pt-12 pb-20 md:pt-20 md:pb-32 border-b border-stroke-border">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4EEEE_1px,transparent_1px),linear-gradient(to_bottom,#E4EEEE_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-brand-mint/40 text-brand-dark text-xs font-semibold tracking-wide shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                <span>Modern Healthcare SaaS & Decision Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.12]">
                Your Thyroid Health,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Connected and Simplified.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-typography-secondary max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Seamlessly upload medical reports, verify extracted biomarkers, track longitudinal TSH and Free T4 trends, and consult certified endocrinologists on one unified, HIPAA-ready platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto shadow-md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>

              {/* Trust Metrics Pill */}
              <div className="pt-6 border-t border-stroke-border/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-typography-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory OCR Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Endocrinologists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Non-Diagnostic Clinical Safety</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Card Preview Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-card border border-stroke-border shadow-float p-6 space-y-6">
                {/* Header of preview card */}
                <div className="flex items-center justify-between pb-4 border-b border-stroke-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center text-brand-primary">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-dark">Thyroid Biomarker Tracker</h3>
                      <p className="text-[11px] text-typography-secondary">Live Verified Patient Telemetry</p>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Stable Control</Badge>
                </div>

                {/* Metric Gauges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-element bg-canvas-bg border border-stroke-border">
                    <div className="flex items-center justify-between text-xs text-typography-secondary mb-1">
                      <span>Serum TSH</span>
                      <span className="text-[10px] text-brand-primary font-medium">0.4 - 4.0 uIU/mL</span>
                    </div>
                    <div className="text-2xl font-bold text-brand-dark">2.18</div>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                      <span>✓ Within Optimal Range</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-element bg-canvas-bg border border-stroke-border">
                    <div className="flex items-center justify-between text-xs text-typography-secondary mb-1">
                      <span>Free T4</span>
                      <span className="text-[10px] text-brand-primary font-medium">0.8 - 1.8 ng/dL</span>
                    </div>
                    <div className="text-2xl font-bold text-brand-dark">1.24</div>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                      <span>✓ Standard Euthyroid</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Longitudinal Trend Bar */}
                <div className="p-4 rounded-element bg-canvas-bg border border-stroke-border space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-dark flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-primary" />
                      Historical TSH Trend
                    </span>
                    <span className="text-typography-secondary text-[11px]">Last 3 Lab Tests</span>
                  </div>
                  <div className="h-16 flex items-end justify-between gap-3 px-2 pt-2">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-brand-mint/60 rounded-t h-12" />
                      <span className="text-[10px] text-typography-secondary">Jan 2024</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-brand-secondary rounded-t h-8" />
                      <span className="text-[10px] text-typography-secondary">Jun 2024</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-brand-primary rounded-t h-6" />
                      <span className="text-[10px] text-brand-dark font-semibold">Nov 2024</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Consultation Stub */}
                <div className="flex items-center justify-between p-3 rounded-element bg-brand-subtle/50 border border-brand-mint/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                      DR
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-brand-dark">Dr. Ananya Sharma, MD</h4>
                      <p className="text-[10px] text-typography-secondary">Consultation: Tomorrow at 10:30 AM</p>
                    </div>
                  </div>
                  <Badge variant="brand" size="sm">Confirmed</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM FEATURES INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Core Capabilities
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              An Integrated Ecosystem for Complete Thyroid Care
            </h3>
            <p className="text-base text-typography-secondary">
              Everything required to manage hypothyroid, hyperthyroid, and autoimmune thyroid conditions in one intuitive portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Smart Report Vault & OCR</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Upload lab reports in PDF or image format. Our extraction pipeline identifies TSH, FT4, FT3, and antibodies, requiring human verification before storing.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Longitudinal Trend Analysis</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Track biomarker shifts across months and years with interactive graphs that preserve your lab&apos;s specific reference ranges and dosage changes.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Specialist Telehealth</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Schedule video or in-clinic consultations with certified endocrinologists. Receive bilingual speaker-labeled transcripts and exported clinical summaries.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Home Phlebotomy Collection</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                When a doctor orders thyroid panels, confirm a convenient home blood sample collection and monitor lab processing status right in your dashboard.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Transparent Clinical AI</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Understand lab results through clinically reviewed deterministic rules and explainable ML models that present confidence intervals and uncertainty.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card hoverable className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-brand-primary flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-brand-dark">Audit-Grade Privacy</h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Protected Health Information (PHI) is encrypted at rest and in transit. Strict role-based access ensures only authorized clinicians view your medical records.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. HOW THE PLATFORM WORKS */}
      <section className="py-20 bg-canvas-bg border-t border-stroke-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Simple 4-Step Process
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              How Care Your Thyroid Works
            </h3>
            <p className="text-base text-typography-secondary">
              Designed to eliminate the confusion of fragmented lab reports and provide structured clinical visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-card border border-stroke-border shadow-card relative">
              <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-mint flex items-center justify-center font-bold text-sm mb-4">
                1
              </div>
              <h4 className="text-base font-semibold text-brand-dark mb-2">Upload Reports</h4>
              <p className="text-xs text-typography-secondary leading-relaxed">
                Drag-and-drop any thyroid diagnostic report in PDF or image format into your private digital vault.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-stroke-border shadow-card relative">
              <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-mint flex items-center justify-center font-bold text-sm mb-4">
                2
              </div>
              <h4 className="text-base font-semibold text-brand-dark mb-2">Verify Extraction</h4>
              <p className="text-xs text-typography-secondary leading-relaxed">
                Inspect auto-extracted TSH, FT4, and antibody values side-by-side with your original lab sheet to ensure 100% accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-stroke-border shadow-card relative">
              <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-mint flex items-center justify-center font-bold text-sm mb-4">
                3
              </div>
              <h4 className="text-base font-semibold text-brand-dark mb-2">Track Trends</h4>
              <p className="text-xs text-typography-secondary leading-relaxed">
                View longitudinal interactive charts showing how your thyroid values evolve over months alongside your medication dosage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border border-stroke-border shadow-card relative">
              <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-mint flex items-center justify-center font-bold text-sm mb-4">
                4
              </div>
              <h4 className="text-base font-semibold text-brand-dark mb-2">Consult Specialist</h4>
              <p className="text-xs text-typography-secondary leading-relaxed">
                Connect with verified thyroid doctors who can review your structured history and prescribe tests or consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL SAFETY STATEMENT CALLOUT */}
      <section className="py-16 bg-white border-t border-stroke-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-brand-subtle to-white border border-brand-mint/40 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stroke-border text-brand-dark text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Clinical Governance Standard</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">
                  Built to Assist Clinicians, Never to Replace Them.
                </h3>
                <p className="text-sm text-typography-secondary leading-relaxed max-w-2xl">
                  We believe in responsible medical technology. Care Your Thyroid does not force binary diagnoses or calculate synthetic clinical thresholds. Every AI output is accompanied by confidence ratings and uncertainty metrics, maintaining human clinical judgment as the ultimate authority.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link href="/about">
                  <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Read Safety Framework
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-canvas-bg border-t border-stroke-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-primary">FAQ</h2>
            <h3 className="text-3xl font-bold tracking-tight text-brand-dark">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-typography-secondary">
              Everything you need to know about the Care Your Thyroid platform and security.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-5">
              <h4 className="text-base font-semibold text-brand-dark mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary" />
                Is Care Your Thyroid an AI Doctor?
              </h4>
              <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed pl-6">
                No. Care Your Thyroid is not an AI doctor and does not make clinical diagnoses. The platform provides tools to extract, digitize, and monitor your thyroid lab values, and facilitates consultations with certified medical doctors.
              </p>
            </Card>

            <Card className="p-5">
              <h4 className="text-base font-semibold text-brand-dark mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary" />
                Why is manual OCR verification required?
              </h4>
              <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed pl-6">
                Clinical accuracy is paramount. Because diagnostic lab reports vary across providers in fonts, layout, and units, our safety protocols require you to review and confirm all extracted numbers before they are saved to your profile.
              </p>
            </Card>

            <Card className="p-5">
              <h4 className="text-base font-semibold text-brand-dark mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary" />
                How is my medical data kept private?
              </h4>
              <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed pl-6">
                All data is encrypted in transit and at rest. Strict role-based access control (RBAC) ensures only you and the healthcare professionals you explicitly consult can view your medical reports and historical trends.
              </p>
            </Card>

            <Card className="p-5">
              <h4 className="text-base font-semibold text-brand-dark mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary" />
                Can doctors prescribe tests through the platform?
              </h4>
              <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed pl-6">
                Yes. During or after a consultation, verified doctors can order specialized thyroid panels. Patients can confirm the request and schedule a home phlebotomy blood draw at their convenience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Take Control of Your Thyroid Health Today
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join thousands of patients and certified endocrinologists working together for clearer, simpler thyroid care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto bg-brand-primary hover:bg-white hover:text-brand-dark shadow-md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Create Free Account
              </Button>
            </Link>
            <Link href="/doctors">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
