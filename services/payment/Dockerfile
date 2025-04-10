# ---------- BUILD STAGE ----------
FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS build

WORKDIR /source

COPY . .

# Restore and publish the app
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish



# ---------- RUNTIME STAGE ----------
FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine AS final

WORKDIR /app

# Copy published output from build stage
COPY --from=build /app/publish .

# Add non-root user (optional but recommended)
ARG UID=10001
RUN adduser -S -u "${UID}" appuser
USER appuser

# Inform Docker about the listening port
EXPOSE 3004

# Launch the app
ENTRYPOINT ["dotnet", "payment-service.dll"]
 
