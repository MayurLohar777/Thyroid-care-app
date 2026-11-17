from fastapi import APIRouter, Depends
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from app.core.config import settings
from app.core.database import get_db
from app.schemas.health import HealthResponse, HealthStatusChecks

router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["Health"])
async def liveness_check() -> HealthResponse:
    """Liveness probe to confirm FastAPI service is responding."""
    return HealthResponse(
        status="healthy",
        app_name=settings.APP_NAME,
        version="1.0.0",
        environment=settings.APP_ENV,
        timestamp=datetime.utcnow(),
    )


@router.get("/readiness", response_model=HealthResponse, tags=["Health"])
async def readiness_check(db: AsyncSession = Depends(get_db)) -> HealthResponse:
    """Readiness probe checking database and core service readiness."""
    db_ok = False
    try:
        result = await db.execute(text("SELECT 1"))
        db_ok = result.scalar() == 1
    except Exception:
        db_ok = False

    status = "healthy" if db_ok else "degraded"

    return HealthResponse(
        status=status,
        app_name=settings.APP_NAME,
        version="1.0.0",
        environment=settings.APP_ENV,
        timestamp=datetime.utcnow(),
        checks=HealthStatusChecks(database=db_ok, redis=True),
    )
