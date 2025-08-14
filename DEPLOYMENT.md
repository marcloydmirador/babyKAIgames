# Deployment Guide for Baby KAI Games

This guide covers deploying Baby KAI Games to production with PayPal integration.

## 🚀 Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: initial Baby KAI Games setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

## 🔧 Environment Variables

### Required for Production

```env
# OpenAI API (for AI features)
OPENAI_API_KEY=sk-...

# PayPal Production
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_production_client_id
PAYPAL_CLIENT_SECRET=your_production_client_secret

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXTAUTH_SECRET=your_super_secret_key
```

### PayPal Configuration

1. **Create PayPal Business Account**
   - Use: marcloyd.mirador@live.com
   - Verify business information
   - Enable API access

2. **Create PayPal App**
   - Go to PayPal Developer Console
   - Create new app for production
   - Copy Client ID and Secret
   - Enable subscriptions

3. **Configure Webhooks**
   - Add webhook endpoint: `https://your-domain.com/api/paypal/webhook`
   - Subscribe to: `BILLING.SUBSCRIPTION.*` events

## 📦 Build Commands

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

## 🔒 Security Checklist

- [ ] HTTPS enabled on domain
- [ ] Environment variables secured
- [ ] PayPal webhooks verified
- [ ] API rate limiting implemented
- [ ] Error monitoring configured
- [ ] Database backups scheduled (if applicable)

## 📊 Monitoring

### Recommended Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance
- **LogRocket**: User session recording
- **PayPal Dashboard**: Transaction monitoring

### Health Checks

- Payment processing functionality
- AI API connectivity
- Game loading performance
- Mobile responsiveness

## 🚀 Manual Deployment Steps

If not using Vercel, follow these steps:

1. **Prepare Production Build**
   ```bash
   npm run build
   npm run export  # if using static export
   ```

2. **Upload to Server**
   ```bash
   rsync -avz out/ user@server:/var/www/baby-kai-games/
   ```

3. **Configure Web Server**
   - Nginx or Apache configuration
   - SSL certificate installation
   - Domain name setup

## 🧪 Pre-Deployment Testing

```bash
# Run all tests
npm test

# Check TypeScript
npm run type-check

# Lint code
npm run lint

# Test PayPal integration
npm run test:paypal

# Performance audit
npm run lighthouse
```

## 🔄 CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - uses: vercel/action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

For deployment issues:
- **Email**: marcloyd.mirador@live.com
- **PayPal**: marcloyd.mirador@live.com
