from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

# 1. Initialize FastAPI
app = FastAPI()

# 2. Mount the static directory
# The files in the 'static' directory will be served at '/static'
app.mount("/static", StaticFiles(directory="static"), name="static")

# 3. Define a root route to serve index.html
# This will redirect the user from the root path ('/') to the static HTML file.
from fastapi.responses import FileResponse
import os # We need os to join the path for robustness

@app.get("/")
async def serve_index():
    # Construct the full path to index.html
    # 'static' is the directory name, 'index.html' is the file name
    return FileResponse(os.path.join("static", "index.html"), media_type='text/html')

# Run this application with Uvicorn:
# uvicorn main:app --reload