# URL Shortener Service

A production-ready URL shortener service built with Express.js, TypeScript, and MongoDB.

## Features

- Shorten long URLs with unique 8-character codes
- Redirect short URLs to original URLs
- Tracks click counts
- Rate limiting (100 requests per 15 minutes per IP)
- Security headers with Helmet
- Request logging with Morgan
- Environment configuration with dotenv
- Input validation and sanitization

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or via a cloud provider like MongoDB Atlas)
- TypeScript (`npm install -g typescript`)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided example and update `MONGO_URI` and `BASE_URL` as needed.

4. Build and run the application:

   ```bash
   npm run build
   npm start
   ```

   For development with hot-reloading:

   ```bash
   npm run dev
   ```

## Usage

- **Shorten a URL**: POST to `/shorten`

  ```bash
  curl -X POST http://localhost:3000/shorten -H "Content-Type: application/json" -d '{"url": "https://example.com"}'
  ```

  Response: `{"shortUrl": "http://localhost:3000/abc12345"}`

- **Access Short URL**: Navigate to `http://localhost:3000/abc12345`

## Deployment

- Use a process manager like PM2 for production.
- Deploy MongoDB on a cloud provider (e.g., MongoDB Atlas).
- Set `BASE_URL` to your production domain.
- Configure a reverse proxy (e.g., Nginx) for HTTPS and load balancing.
- Monitor with tools like Prometheus or New Relic.

## Security Considerations

- Regularly update dependencies (`npm audit`).
- Use a strong MongoDB password and network security.
- Consider adding authentication for the `/shorten` endpoint.
- Implement CORS if the API is accessed from a frontend.
