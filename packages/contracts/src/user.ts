export type UserRole = "patient" | "doctor" | "admin";

export interface UserSummary {
  id: string;
  email: string | null;
  phone: string | null;
  role: UserRole;
  is_active: boolean;
  is_verified: boolean;
  created_at: string;
}

export function isUserRole(val: unknown): val is UserRole {
  return typeof val === "string" && ["patient", "doctor", "admin"].includes(val);
}
