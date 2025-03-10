# Deployment Guide for Jewelry Store

## Overview
This guide provides step-by-step instructions for deploying the Jewelry Store application using Docker and GitHub Actions.

## Prerequisites
- Ensure Docker and Docker Compose are installed on the server.
- Configure environment variables for database connections and any API keys required.

## Steps to Deploy
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yrks12/jewelry-store.git
   cd jewelry-store
   ```

2. **Build Docker Images**
   ```bash
   docker-compose build
   ```

3. **Run the Application**
   ```bash
   docker-compose up -d
   ```

4. **Access the Application**
   - Frontend: Open your browser and go to `http://localhost:3000`
   - Backend: API is accessible at `http://localhost:5000/api`

## Monitoring and Logging
- Ensure Prometheus and Grafana are set up for monitoring application performance.

## Backup and Recovery
- Regularly back up the MongoDB database to prevent data loss.