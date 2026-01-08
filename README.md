# Cloud Operations & Infrastructure Sandbox

## 📌 Professional Context
This repository contains generic implementations of infrastructure patterns utilized in enterprise-grade cloud environments. My experience at **Tata Consultancy Services (TCS)** involves maintaining 99.9% availability for large-scale e-commerce platforms (Woolworths Australia).

## 🛠️ Expertise & Implementation
* **Orchestration:** Managing **Kubernetes (K8s) clusters via Rancher** to ensure container health and resource optimization.
* **Observability:** Utilizing **Dynatrace** for full-stack monitoring and **PagerDuty** for automated incident response.
* **Automation:** Designing **Apache Airflow** DAGs for reliable data pipeline orchestration.
* **CI/CD:** Managing environment-specific releases and approvals via **Azure DevOps**.
* **Data Correlation & NoSQL:** Utilizing **MongoDB** queries to troubleshoot order-to-invoice flows by correlating Shopper IDs and Order IDs across high-volume production databases.
* **Incident Root Cause Analysis (RCA):** Investigating pricing ingestion failures and catalog delays by analyzing message counts and throughput trends.
* **Cluster Management:** Performing weekly **Blue-Green cluster rotations**, including proactive POD scaling in inactive clusters via Rancher to ensure 100% capacity before traffic cutover.

## 📂 Repository Structure
* `kubernetes/`: Generic YAML manifests for Deployments, Services, and HPA.
* `automation/`: Sample Airflow DAGs for data workflow management.
* `monitoring/`: Documentation on SRE best practices and incident response workflows.
* `database/`  : MongoDB scripts for pinning down invoice PDFs by correlating Shopper IDs to Order IDs across time periods.
* `pipelines/` : Best practices for managing library variables and release approvals for frontend/backend pipelines.
