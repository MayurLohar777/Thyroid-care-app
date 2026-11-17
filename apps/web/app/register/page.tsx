"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Activity, User, Stethoscope, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    specialty: "Endocrinology",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/verify-otp?contact=${encodeURIComponent(formData.email || formData.phone)}&role=${role}`);
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-canvas-bg">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center text-brand-mint shadow-sm">
              <Activity className="w-5 h-5 text-brand-mint" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-dark">
              Care Your Thyroid
            </span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark">
            Create Your Account
          </h2>
          <p className="text-xs text-typography-secondary">
            Join the verified platform designed for patients and medical practitioners.
          </p>
        </div>

        <Card className="p-8 shadow-card border border-stroke-border space-y-6">
          {/* Role Toggle Selector */}
          <div>
            <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
              Select Account Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("patient")}
                className={`p-4 rounded-card border text-left transition-all flex items-start gap-3 ${
                  role === "patient"
                    ? "border-brand-primary bg-brand-subtle/40 ring-1 ring-brand-primary"
                    : "border-stroke-border bg-white hover:bg-canvas-hover"
                }`}
              >
                <div className={`p-2 rounded-lg ${role === "patient" ? "bg-brand-primary text-white" : "bg-slate-100 text-slate-600"}`}>
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark">Patient</h4>
                  <p className="text-[11px] text-typography-secondary">Manage my reports & consult doctors</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRole("doctor")}
                className={`p-4 rounded-card border text-left transition-all flex items-start gap-3 ${
                  role === "doctor"
                    ? "border-brand-primary bg-brand-subtle/40 ring-1 ring-brand-primary"
                    : "border-stroke-border bg-white hover:bg-canvas-hover"
                }`}
              >
                <div className={`p-2 rounded-lg ${role === "doctor" ? "bg-brand-primary text-white" : "bg-slate-100 text-slate-600"}`}>
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark">Doctor</h4>
                  <p className="text-[11px] text-typography-secondary">Clinical provider & specialist portal</p>
                </div>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              placeholder={role === "doctor" ? "Dr. Firstname Lastname" : "Your Full Legal Name"}
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                leftIcon={<Mail className="w-4 h-4" />}
              />
              <Input
                label="Mobile Phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                leftIcon={<Phone className="w-4 h-4" />}
              />
            </div>

            {role === "doctor" && (
              <div className="p-4 rounded-card bg-brand-subtle/30 border border-brand-mint/40 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>Doctor Verification Information</span>
                </div>
                <Input
                  label="Medical Council Registration / License #"
                  placeholder="e.g. MCI-2014-98765"
                  required
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  helperText="Subject to administrator review before receiving consultations."
                />
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Verification
            </Button>
          </form>

          <div className="pt-2 text-center text-xs text-typography-secondary">
            By registering, you agree to our Terms of Service, Privacy Policy, and Medical Disclaimer.
          </div>
        </Card>

        <div className="text-center text-xs text-typography-secondary">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-primary hover:underline">
            Sign In with OTP
          </Link>
        </div>
      </div>
    </div>
  );
}
