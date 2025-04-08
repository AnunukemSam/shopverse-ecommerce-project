# Use an official Python runtime as a parent image
ARG PYTHON_VERSION=3.12.3
FROM python:${PYTHON_VERSION}-slim

# Prevent Python from writing .pyc files to disk and buffer output
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Create a non-privileged user to run the application.
ARG UID=10001
RUN adduser --disabled-password --gecos "" --home "/nonexistent" --shell "/sbin/nologin" --no-create-home --uid "${UID}" appuser

# Copy only the requirements file first to take advantage of Docker cache when dependencies do not change.
COPY requirements.txt .

# Install dependencies without caching to keep the image lean
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the source code into the container
COPY . .

# Switch to the non-privileged user
USER appuser

ENV PYTHONPATH=/app

# Expose the port that the application listens on
EXPOSE 3000

# Use the exec form of CMD so that Docker signals work correctly
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3000"]
 
