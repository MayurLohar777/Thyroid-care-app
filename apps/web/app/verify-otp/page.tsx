"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Activity, ShieldCheck, ArrowRight, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contact = searchParams.get("contact") || "your registered contact";
  const role = searchParams.get("role") || "patient";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [attempts, setAttempts] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.charAt(value.length - 1);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Simulate OTP verification check
    setTimeout(() => {
      setIsLoading(false);
      // Route based on role
      if (role === "doctor") {
        router.push("/dashboard/doctor/overview");
      } else if (role === "admin") {
        router.push("/dashboard/admin/overview");
      } else {
        router.push("/dashboard/patient/overview");
      }
    }, 700);
  };

  const formatTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
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
            Enter Verification Code
          </h2>
          <p className="text-xs text-typography-secondary">
            We sent a 6-digit code to <span className="font-semibold text-brand-dark">{contact}</span>
          </p>
        </div>

        <Card className="p-8 shadow-card border border-stroke-border space-y-6">
          <form onSubmit={handleVerify} className="space-y-6">
            {/* 6 Digit Input Fields */}
            <div className="flex justify-between gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="w-12 h-14 text-center text-xl font-bold rounded-element border border-stroke-border bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary shadow-sm"
                />
              ))}
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 text-rose-700 text-xs border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Timer and Attempts Indicator */}
            <div className="flex items-center justify-between text-xs text-typography-secondary">
              <div>
                Expires in:{" "}
                <span className={`font-mono font-semibold ${timeLeft < 60 ? "text-status-danger" : "text-brand-dark"}`}>
                  {formatTimer()}
                </span>
              </div>
              <div>
                Attempt <span className="font-semibold text-brand-dark">{attempts}</span> of 3
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Verify & Enter Portal
            </Button>
          </form>

          {/* Resend Code Action */}
          <div className="pt-4 border-t border-stroke-border text-center">
            <button
              type="button"
              disabled={timeLeft > 240}
              onClick={() => {
                setTimeLeft(300);
                setAttempts((prev) => prev + 1);
                setOtp(["", "", "", "", "", ""]);
              }}
              className="text-xs font-semibold text-brand-primary hover:text-brand-dark disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Resend Verification Code</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
