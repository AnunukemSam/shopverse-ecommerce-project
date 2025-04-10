# ---------- BUILD STAGE ----------
ARG RUST_VERSION=1.72
ARG APP_NAME=inventory_service

FROM rust:${RUST_VERSION}-alpine AS builder

WORKDIR /app

# Install required build packages
RUN apk add --no-cache musl-dev

# Cache dependencies
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main() {}" > src/main.rs && cargo build --release && rm -r src

# Copy full source and build
COPY . .
RUN cargo build --release


# ---------- RUNTIME STAGE ----------
FROM alpine:latest

ARG APP_NAME=inventory_service

# Add minimal packages
RUN apk --no-cache add ca-certificates

# Create non-root user
RUN adduser -S -u 10001 appuser
USER appuser

WORKDIR /app

# Copy the compiled binary from builder stage
COPY --from=builder /app/target/release/${APP_NAME} /usr/local/bin/${APP_NAME}

EXPOSE 3005

CMD ["/usr/local/bin/inventory_service"]

