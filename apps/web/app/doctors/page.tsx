import React from "react";
import Link from "next/link";
import { Search, Filter, Star, Clock, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Input } from "../../components/ui/Input";

export default function DoctorsDirectoryPage() {
  const doctors = [
    {
      id: "doc-1",
      name: "Dr. Ananya Sharma",
      qualifications: "MBBS, MD (Medicine), DM (Endocrinology)",
      specialty: "Endocrinology & Thyroid Specialist",
      experience: "14+ Years Experience",
      hospital: "Apollo Center for Endocrine Care, New Delhi",
      rating: 4.9,
      reviewsCount: 184,
      fee: "₹1,200",
      nextSlot: "Tomorrow, 10:30 AM",
      verified: true,
      bio: "Specializes in Hashimoto's thyroiditis, subclinical hypothyroidism, thyroid nodules, and post-thyroidectomy hormonal replacement protocols.",
    },
    {
      id: "doc-2",
      name: "Dr. Rajesh K. Varma",
      qualifications: "MBBS, MS (ENT), Fellowship in Endocrine Surgery",
      specialty: "Thyroid & Parathyroid Surgeon",
      experience: "19+ Years Experience",
      hospital: "Medanta Medicity, Gurugram",
      rating: 4.8,
      reviewsCount: 220,
      fee: "₹1,800",
      nextSlot: "Thursday, 02:00 PM",
      verified: true,
      bio: "Expert in minimally invasive thyroidectomy, multinodular goiter evaluation, and fine needle aspiration cytology (FNAC) reviews.",
    },
    {
      id: "doc-3",
      name: "Dr. Meera Iyer",
      qualifications: "MBBS, MD (Internal Medicine), MRCP (UK)",
      specialty: "Endocrinology & Metabolic Disorders",
      experience: "11+ Years Experience",
      hospital: "Manipal Hospital, Bengaluru",
      rating: 4.9,
      reviewsCount: 142,
      fee: "₹1,000",
      nextSlot: "Today, 05:00 PM",
      verified: true,
      bio: "Focuses on gestational thyroid disease, Graves' disease, radioactive iodine therapy counseling, and antibody monitoring.",
    },
    {
      id: "doc-4",
      name: "Dr. Vikram Sethi",
      qualifications: "MBBS, DNB (General Medicine), DNB (Endocrinology)",
      specialty: "Consultant Endocrinologist",
      experience: "8+ Years Experience",
      hospital: "Fortis Memorial Research Institute",
      rating: 4.7,
      reviewsCount: 96,
      fee: "₹950",
      nextSlot: "Friday, 11:00 AM",
      verified: true,
      bio: "Dedicated to longitudinal TSH/Free T4 dosage titration, dietary micronutrient factors in thyroid function, and ultrasound follow-ups.",
    },
  ];

  return (
    <div className="w-full bg-canvas-bg pb-24">
      {/* Header */}
      <section className="bg-white border-b border-stroke-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-subtle text-brand-dark text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
              <span>Certified Healthcare Specialists</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Find Verified Thyroid Specialists
            </h1>
            <p className="text-sm text-typography-secondary mt-1">
              Consult experienced endocrinologists and endocrine surgeons who review your verified longitudinal lab records.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2">
            <div className="md:col-span-8">
              <Input
                placeholder="Search by doctor name, specialty, condition (e.g. Hashimoto's, Goiter)..."
                leftIcon={<Search className="w-4 h-4" />}
              />
            </div>
            <div className="md:col-span-4 flex gap-2">
              <Button variant="outline" size="md" className="flex-1" leftIcon={<Filter className="w-4 h-4" />}>
                Filter Specialties
              </Button>
              <Button variant="primary" size="md">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between pb-6">
          <p className="text-xs text-typography-secondary font-medium">
            Showing <span className="font-semibold text-brand-dark">{doctors.length}</span> verified specialists
            <span className="ml-2 text-[11px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              [Synthetic Demo Profiles]
            </span>
          </p>
          <div className="text-xs text-typography-secondary">
            Sort by: <span className="font-semibold text-brand-dark cursor-pointer">Highest Rated</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} hoverable className="p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-bold text-lg shrink-0">
                      {doctor.name.split(" ")[1]?.charAt(0) || "D"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-brand-dark hover:text-brand-primary transition-colors">
                          {doctor.name}
                        </h3>
                        {doctor.verified && (
                          <Badge variant="success" size="sm">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-brand-primary font-medium mt-0.5">
                        {doctor.specialty}
                      </p>
                      <p className="text-[11px] text-typography-secondary">
                        {doctor.qualifications}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-base font-bold text-brand-dark">{doctor.fee}</div>
                    <span className="text-[10px] text-typography-secondary">per consultation</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-typography-secondary pt-1 border-t border-stroke-border">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span className="truncate max-w-[220px]">{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="font-semibold text-brand-dark">{doctor.rating}</span>
                    <span>({doctor.reviewsCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-typography-secondary shrink-0" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-typography-secondary leading-relaxed line-clamp-2">
                  {doctor.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-stroke-border flex items-center justify-between gap-3">
                <div className="text-xs text-typography-secondary">
                  Next Available: <span className="font-semibold text-emerald-700">{doctor.nextSlot}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/doctors/${doctor.id}`}>
                    <Button variant="outline" size="sm">
                      Profile
                    </Button>
                  </Link>
                  <Link href={`/register?role=patient&doctor=${doctor.id}`}>
                    <Button variant="primary" size="sm">
                      Book Slot
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
