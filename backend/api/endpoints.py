from fastapi import APIRouter
from bibliotek import main.py

api_router = APIRouter()

# You can add individual API endpoints here later. For example:


@app.get("/library")
def library():
    return {"message": "Welcome to the library!"}

@app.get("/book")
def book():
    return {"message": "This is a book endpoint."}

@app.get("/authors")
def authors():
    return {"message": "List of authors."}