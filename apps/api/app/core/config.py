from typing import List, Union
from pydantic import AnyHttpUrl, validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Care Your Thyroid"
    APP_ENV: str = "development"
    APP_DEBUG: bool = True
    API_V1_STR: str = "/api/v1"

    # Security
    SECRET_KEY: str = "dev_insecure_jwt_secret_key_change_in_production_min32chars"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:19006",
        "http://localhost:8081",
    ]

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/care_your_thyroid"
    DATABASE_URL_SYNC: str = "postgresql://postgres:postgres@localhost:5432/care_your_thyroid"

    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"

    # S3 Object Storage
    S3_ENDPOINT: str = "http://localhost:9000"
    S3_ACCESS_KEY: str = "minioadmin"
    S3_SECRET_KEY: str = "minioadmin"
    S3_BUCKET_NAME: str = "thyroid-reports"
    S3_REGION: str = "us-east-1"
    S3_SECURE: bool = False

    # Medical & AI Safety
    AI_MODEL_VERSION: str = "v1.0.0-synthetic-benchmark"
    REQUIRE_OCR_HUMAN_VERIFICATION: bool = True
    ENABLE_SYNTHETIC_DATA_LABELING: bool = True

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
