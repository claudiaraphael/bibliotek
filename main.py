from fastapi import FastAPI
from app.api.endpoints import api_router
from app.core.config import settings
from app.db.base import Base
from app.db.session import engine

app = FastAPI(title=settings.BIBLIOTEK, version=settings.v1)

app.include_router(api_router, prefix=settings.API_V1_STR)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "Hello World"}

