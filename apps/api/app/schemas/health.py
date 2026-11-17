from typing import Optional, Dict
from datetime import datetime
from pydantic import BaseModel, Field


class HealthStatusChecks(BaseModel):
    database: Optional[bool] = None
    redis: Optional[bool] = None
    storage: Optional[bool] = None


class HealthResponse(BaseModel):
    status: str = Field(..., example="healthy")
    app_name: str = Field(..., example="Care Your Thyroid")
    version: str = Field(..., example="1.0.0")
    environment: str = Field(..., example="development")
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    checks: Optional[HealthStatusChecks] = None
