export type HealthStatus = "healthy" | "degraded" | "unhealthy";

export interface HealthCheckResponse {
  status: HealthStatus;
  app_name: string;
  version: string;
  environment: string;
  timestamp: string;
  checks?: {
    database?: boolean;
    redis?: boolean;
    storage?: boolean;
  };
}

export function isHealthStatus(val: unknown): val is HealthStatus {
  return typeof val === "string" && ["healthy", "degraded", "unhealthy"].includes(val);
}
