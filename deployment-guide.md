# Deployment Guide for Jewelry Store Application

## Prerequisites
- Docker installed on the server
- Docker Compose installed on the server
- Access to MongoDB instance

## Steps to Deploy
1. Clone the repository:
   ```bash
   git clone https://github.com/yrks12/jewelry-store.git
   cd jewelry-store
   ```

2. Build and start the application using Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Ensure the application is running by accessing `http://localhost:3000`
4. Check logs to ensure there are no errors:
   ```bash
   docker-compose logs
   ```

## Monitoring and Maintenance
- Regularly monitor logs for errors and performance metrics.
- Schedule backups for the MongoDB database.
- Keep dependencies up to date by periodically checking for updates and running:
   ```bash
   npm install
   ```

## Troubleshooting
- If there are issues starting the application, check:
  - Docker logs for the backend service.
  - Ensure MongoDB service is running properly.