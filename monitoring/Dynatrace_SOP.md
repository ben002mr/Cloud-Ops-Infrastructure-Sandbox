# Observability & Monitoring Standards

### Key Performance Indicators (KPIs)
I monitor the following metrics in **Dynatrace** to maintain high-availability:
- **Failure Rate & Response Codes:** Tracking 4xx/5xx spikes to alert on-call teams.
- **Throughput & Response Time:** Ensuring backend endpoints meet SLAs.
- **Synthetic Monitoring:** Implementing automated browser/HTTP checks for critical service paths.
- **Data Ingestion:** Monitoring Search and Pricing ingestion graphs (message counts) to ensure catalog data is up-to-date.

### Incident Management
- **PagerDuty Integration:** Automated alerting based on Dynatrace anomaly detection.
- **Health Checks:** Routine spotting and health-check monitoring for microservices.
