"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Activity, Mail, Phone, ShieldCheck, ArrowRight, Lock } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue) return;
    setIsLoading(true);
    // Simulate OTP dispatch
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/verify-otp?contact=${encodeURIComponent(contactValue)}&method=${loginMethod}`);
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-canvas-bg">
      <div className="w-full max-w-md space-y-8">
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
            Sign In to Your Health Portal
          </h2>
          <p className="text-xs text-typography-secondary">
            Secure, passwordless authentication via one-time verification code (OTP).
          </p>
        </div>

        <Card className="p-8 shadow-card border border-stroke-border space-y-6">
          {/* Method Selector Tabs */}
          <div className="grid grid-cols-2 p-1 bg-canvas-bg rounded-element border border-stroke-border">
            <button
              type="button"
              onClick={() => {
                setLoginMethod("email");
                setContactValue("");
              }}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-md transition-all ${
                loginMethod === "email"
                  ? "bg-white text-brand-dark shadow-sm"
                  : "text-typography-secondary hover:text-brand-dark"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email OTP</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginMethod("phone");
                setContactValue("");
              }}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-md transition-all ${
                loginMethod === "phone"
                  ? "bg-white text-brand-dark shadow-sm"
                  : "text-typography-secondary hover:text-brand-dark"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Mobile OTP</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {loginMethod === "email" ? (
              <Input
                label="Registered Email Address"
                type="email"
                placeholder="you@example.com"
                required
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                leftIcon={<Mail className="w-4 h-4" />}
                helperText="We will send a 6-digit secure login code to this email."
              />
            ) : (
              <Input
                label="Registered Mobile Number"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                leftIcon={<Phone className="w-4 h-4" />}
                helperText="Include country code (+91 for India)."
              />
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Send Verification Code
            </Button>
          </form>

          <div className="pt-4 border-t border-stroke-border flex items-center justify-center gap-2 text-xs text-typography-secondary">
            <Lock className="w-3.5 h-3.5 text-brand-primary" />
            <span>Encrypted HttpOnly session protection</span>
          </div>
        </Card>

        {/* Registration Link */}
        <div className="text-center text-xs text-typography-secondary">
          Don&apos;t have an account yet?{" "}
          <Link href="/register" className="font-semibold text-brand-primary hover:underline">
            Register as Patient or Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}
