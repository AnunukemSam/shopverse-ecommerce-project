# Stage 1: Base Image Setup
FROM python:3.12-slim-bookworm AS base

# Set environment variables for non-interactive apt installs
ENV DEBIAN_FRONTEND=noninteractive

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency file(s) and install dependencies
COPY requirements.txt ./
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# (Optional) Install OpenTelemetry auto-instrumentation if needed
# RUN pip install opentelemetry-bootstrap && opentelemetry-bootstrap -a install

# Copy the entire application source code into the container
COPY . .

# ✅ Copy .env file into the container so pydantic_settings can read it
COPY .env .env

# Set environment variables as needed (e.g., your app’s port)
ENV PORT=3000

# Expose the port on which the application will run
EXPOSE 3000

# Define the entry point: Start the Uvicorn server with your app (adjust the path as needed)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3000"]
 
