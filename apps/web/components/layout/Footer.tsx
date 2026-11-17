import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, Heart, AlertCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Medical Safety & Compliance Advisory Banner */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                Clinical Safety & Regulatory Notice
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Care Your Thyroid is an assistive health technology and clinical decision support system. The platform
                does not provide medical diagnoses, dispense medical advice, or recommend modifying pharmaceutical
                regimens. All AI-assisted extraction and pattern visualizations must be reviewed and verified by a licensed
                healthcare practitioner. If you are experiencing a medical emergency, please contact local emergency
                services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center text-brand-mint">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Care Your Thyroid</span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              &quot;Your Thyroid Health, Connected and Simplified.&quot; A modern, unified platform connecting patients,
              laboratory reports, and certified thyroid specialists.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-mint">
              <ShieldCheck className="w-4 h-4" />
              <span>HIPAA / DPDP Compliant Architecture & Encryption</span>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Patient Portal</h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/register" className="hover:text-brand-mint transition-colors">
                  Thyroid Screening
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-mint transition-colors">
                  Upload Lab Reports
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-mint transition-colors">
                  Longitudinal Trends
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-brand-mint transition-colors">
                  Book Specialist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Specialists</h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/register" className="hover:text-brand-mint transition-colors">
                  Doctor Registration
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-mint transition-colors">
                  Clinical Summaries
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-mint transition-colors">
                  Credential Verification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Platform</h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-brand-mint transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-mint transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-mint transition-colors">
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Care Your Thyroid Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Security Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
