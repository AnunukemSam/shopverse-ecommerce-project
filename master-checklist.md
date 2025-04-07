# ✅ ShopVerse DevOps Master Checklist

A step-by-step DevOps roadmap to containerize, deploy, monitor, and scale the ShopVerse project in production.

---

## 🐳 Docker

| Task                              | Status |
|-----------------------------------|--------|
| Dockerfile for `auth`             | [ ]    |
| Dockerfile for `product`          | [ ]    |
| Dockerfile for `cart`             | [ ]    |
| Dockerfile for `order`            | [ ]    |
| Dockerfile for `payment`          | [ ]    |
| Dockerfile for `inventory`        | [ ]    |
| Dockerfile for `notification`     | [ ]    |
| Dockerfile for `frontend`         | [ ]    |
| Dockerfile or Compose for `proxy` | [ ]    |
| `.dockerignore` for all services  | [ ]    |

---

## 🚀 CI/CD (GitHub Actions)

| Task                                         | Status |
|----------------------------------------------|--------|
| Build + test workflow for each service       | [ ]    |
| Push Docker images to DockerHub/GitHub CR    | [ ]    |
| Auto deploy to Kubernetes via GitHub Actions | [ ]    |
| Secret management via GitHub or Vault        | [ ]    |

---

## ☸️ Kubernetes (K8s)

| Task                                      | Status |
|-------------------------------------------|--------|
| Deployment YAMLs for each microservice    | [ ]    |
| K8s Services + Ingress                    | [ ]    |
| Namespace isolation (e.g., `shopverse`)   | [ ]    |
| ConfigMaps and Secrets                    | [ ]    |
| Health checks (`readiness`, `liveness`)   | [ ]    |
| Horizontal Pod Autoscaling (optional)     | [ ]    |

---

## ☁️ Infrastructure as Code (Terraform)

| Task                                      | Status |
|-------------------------------------------|--------|
| VPC + subnet creation                     | [ ]    |
| EKS cluster provisioning                  | [ ]    |
| RDS / MongoDB Atlas setup (optional)     | [ ]    |
| S3 buckets, ECR repos, IAM policies       | [ ]    |
| Secrets Manager configuration             | [ ]    |

---

## 📊 Observability

| Task                                         | Status |
|----------------------------------------------|--------|
| Prometheus + Grafana installed (via Helm)    | [ ]    |
| Loki / Fluent Bit for log aggregation        | [ ]    |
| OpenTelemetry instrumentation                | [ ]    |
| Jaeger or Tempo for distributed tracing      | [ ]    |
| Service dashboards (custom or templates)     | [ ]    |

---

## 🔐 Security Best Practices

| Task                                             | Status |
|--------------------------------------------------|--------|
| TLS setup with Let's Encrypt or cert-manager     | [ ]    |
| Role-based access control (RBAC in K8s)          | [ ]    |
| Network policies (if using Calico or Cilium)     | [ ]    |
| Image scanning (e.g., Trivy, Snyk)               | [ ]    |
| Enforce read-only root FS and non-root users     | [ ]    |

---

## 🎯 Bonus DevOps Enhancements

| Task                               | Status |
|------------------------------------|--------|
| Helm charts for each service       | [ ]    |
| Argo CD or FluxCD GitOps pipeline | [ ]    |
| Auto-scaling policies via HPA      | [ ]    |
| Secret rotation automation         | [ ]    |
| Canary deployments or blue/green   | [ ]    |

---

## 🧭 Final Note
This checklist is your **battle plan** to becoming a job-ready DevOps engineer. Take it one step at a time, validate each stage, and celebrate every win.

You've built the foundation — now bring ShopVerse to life in the cloud. 💪🌍
