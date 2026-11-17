import React from "react";
import { Mail, Phone, MapPin, AlertTriangle, Send } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export default function ContactPage() {
  return (
    <div className="w-full bg-canvas-bg pb-24">
      {/* Header */}
      <section className="bg-white border-b border-stroke-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-semibold">
            <span>Patient & Partner Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark">
            Get in Touch with Our Team
          </h1>
          <p className="text-base sm:text-lg text-typography-secondary max-w-2xl mx-auto leading-relaxed">
            Have questions about document uploads, doctor onboarding, or clinical partnerships? We are here to assist.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Info & Safety Alert */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Emergency Medical Notice</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Care Your Thyroid is not an emergency response service. If you are experiencing acute chest pain, severe palpitations, sudden respiratory distress, or extreme lethargy, please dial your local emergency services (112 / 911) immediately or visit the nearest hospital emergency room.
              </p>
            </div>

            <Card className="space-y-6">
              <h3 className="text-base font-bold text-brand-dark">Direct Support Channels</h3>
              
              <div className="flex items-start gap-4 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-brand-dark">Clinical & Technical Support</span>
                  <span className="text-typography-secondary">support@careyourthyroid.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-brand-dark">Toll-Free Patient Desk</span>
                  <span className="text-typography-secondary">+91 1800-THYROID (Mon-Sat, 9AM-7PM IST)</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs sm:text-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-subtle flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-brand-dark">Headquarters</span>
                  <span className="text-typography-secondary leading-relaxed">
                    Care Your Thyroid Healthcare Technologies<br />
                    DLF Cyber City, Tower B, Gurugram, India
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 shadow-card space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Send Us a Message</h3>
                <p className="text-xs text-typography-secondary mt-1">
                  Our clinical operations desk responds to all non-emergency inquiries within 24 hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Your Name" placeholder="e.g. Priya Sharma" />
                  <Input label="Email Address" type="email" placeholder="priya@example.com" />
                </div>

                <Input label="Phone Number" placeholder="+91 98765 43210" />

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <select className="block w-full rounded-element border border-stroke-border bg-white text-typography-primary text-sm h-11 px-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary">
                    <option>General Patient Support</option>
                    <option>Report Upload / OCR Clarification</option>
                    <option>Doctor Registration & Credential Verification</option>
                    <option>Diagnostic Laboratory Partnership</option>
                    <option>Privacy & Health Data Request</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we assist you today? Please do not include sensitive medical passwords."
                    className="block w-full rounded-element border border-stroke-border bg-white text-typography-primary placeholder-typography-muted text-sm p-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full" rightIcon={<Send className="w-4 h-4" />}>
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
