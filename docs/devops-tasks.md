This is your **DevOps checklist** for completing ShopVerse and deploying it like a pro. 💪

### 🐳 Docker
- [ ] Write Dockerfile for **each microservice**
- [ ] Create `.dockerignore` files
- [ ] Build and test images locally

### 🚀 CI/CD (GitHub Actions)
- [ ] Lint + test workflows
- [ ] Build + push Docker images to DockerHub/GitHub Registry
- [ ] Deploy to Kubernetes via CI/CD

### ☸️ Kubernetes (K8s)
- [ ] Deployment & Service YAMLs for each microservice
- [ ] Ingress (or Gateway) configuration
- [ ] ConfigMap & Secret integration
- [ ] Set resource limits and health checks

### ☁️ Infrastructure (Terraform)
- [ ] Create VPC, Subnets, and EKS cluster
- [ ] Provision RDS/Mongo Atlas/etc. where needed
- [ ] Use `terraform/modules` and `terraform/environments`

### 📊 Monitoring & Observability
- [ ] Install Prometheus + Grafana via Helm
- [ ] Expose dashboards per service
- [ ] Add OpenTelemetry SDKs/instrumentation
- [ ] Enable logging with Loki/FluentBit/ELK

### 🔐 Security
- [ ] K8s Secrets for sensitive configs
- [ ] HTTPS ingress (with TLS certs)
- [ ] Image scanning with Trivy or Snyk

---

📌 You now have a rock-solid roadmap to becoming **DevOps certified + production ready**. Let’s get to the Nginx proxy next!
