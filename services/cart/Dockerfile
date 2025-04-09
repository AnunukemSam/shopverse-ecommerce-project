# syntax=docker/dockerfile:1

### ----------- BUILD STAGE -----------
ARG GO_VERSION=1.20
FROM golang:${GO_VERSION}-alpine AS build

WORKDIR /app

# Copy go.mod first for dependency caching
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source
COPY . .

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux go build -o cart .



### ----------- FINAL STAGE -----------
FROM alpine:latest AS final

WORKDIR /app

# Install minimal runtime dependencies
RUN apk --no-cache add ca-certificates tzdata

# Add non-root user
RUN adduser -S -u 10001 appuser
USER appuser

# Copy the built binary
COPY --from=build /app/cart .

# Set port and expose it
ENV PORT=3002
EXPOSE 3002

# Start the server
CMD ["./cart"]
 
