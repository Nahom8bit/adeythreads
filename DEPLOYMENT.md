# Adey Threads Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Repository
1. Push your code to GitHub
2. Ensure all files are committed and pushed

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the following settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install --legacy-peer-deps`

### Step 3: Environment Variables
Add these environment variables in your Vercel project settings:

```env
# Required for email functionality
RESEND_API_KEY=your_resend_api_key_here

# Optional for analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

## 📧 Email Setup (Resend)

### 1. Create Resend Account
1. Sign up at [resend.com](https://resend.com)
2. Verify your email address

### 2. Get API Key
1. Go to your Resend dashboard
2. Navigate to "API Keys"
3. Create a new API key
4. Copy the key and add it to your environment variables

### 3. Domain Verification (Optional but Recommended)
1. Add your domain in Resend dashboard
2. Follow the DNS verification steps
3. Update the "from" email in API routes to use your domain

### 4. Test Email Functionality
1. Deploy your site
2. Test the contact form
3. Test the waitlist signup
4. Check that emails are being sent

## 📊 Google Analytics Setup

### 1. Create GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property
3. Choose "Web" as the platform
4. Enter your website details

### 2. Get Measurement ID
1. In your GA4 property, go to "Admin"
2. Under "Property", click "Data Streams"
3. Select your web stream
4. Copy the Measurement ID (G-XXXXXXXXXX)

### 3. Add to Environment Variables
Add the Measurement ID to your Vercel environment variables:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🔧 Custom Domain Setup

### 1. Add Custom Domain in Vercel
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### 2. Update Email Configuration
Update the "from" email addresses in your API routes:
- `/app/api/subscribe/route.ts`
- `/app/api/contact/route.ts`

Change from:
```typescript
from: 'Adey Threads <noreply@adeythreads.com>'
```

To:
```typescript
from: 'Adey Threads <noreply@yourdomain.com>'
```

## 🎨 Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#8B4513',    // Your main brand color
  secondary: '#D2691E',  // Your secondary color
  // ... other colors
}
```

### Update Content
- **Homepage**: `app/page.tsx`
- **About Page**: `app/about/page.tsx`
- **Contact Info**: `app/contact/page.tsx`
- **Policies**: `app/policies/page.tsx`

### Update SEO Meta Tags
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Brand Name',
  description: 'Your brand description',
  // ... other meta tags
}
```

## 🔍 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component for all images
- Optimize images before uploading
- Use appropriate image formats (WebP, AVIF)

### 2. Font Optimization
- Fonts are already optimized with `display: swap`
- Consider using `font-display: optional` for non-critical fonts

### 3. Bundle Analysis
Run bundle analysis:
```bash
npm run build
npx @next/bundle-analyzer
```

## 🛡️ Security

### 1. Environment Variables
- Never commit API keys to version control
- Use Vercel's environment variable system
- Rotate API keys regularly

### 2. Content Security Policy
Add CSP headers in `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
          }
        ]
      }
    ]
  }
}
```

## 📱 PWA Features

The website includes PWA features:
- Web app manifest (`public/site.webmanifest`)
- Service worker (can be added for offline functionality)
- Installable on mobile devices

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Build Issues
1. **Dependency conflicts**: Use `--legacy-peer-deps`
2. **Memory issues**: Increase Node.js memory limit
3. **Timeout issues**: Optimize build process

### Email Issues
1. **Not sending**: Check Resend API key
2. **Domain verification**: Verify domain in Resend
3. **Rate limits**: Check Resend usage limits

### Analytics Issues
1. **Not tracking**: Check GA4 Measurement ID
2. **Real-time data**: Wait 24-48 hours for data
3. **Ad blockers**: Test with ad blockers disabled

## 📈 Monitoring

### 1. Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track performance metrics

### 2. Error Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor API route errors
- Track user experience issues

### 3. Uptime Monitoring
- Use services like UptimeRobot
- Monitor email delivery
- Track form submission success rates

## 🎯 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Contact form works
- [ ] Email signup works
- [ ] Google Analytics is tracking
- [ ] Mobile responsiveness
- [ ] SEO meta tags are correct
- [ ] Performance scores are good
- [ ] Security headers are set
- [ ] Custom domain is working
- [ ] SSL certificate is valid

## 📞 Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Test locally first
4. Contact support if needed

---

**Happy Deploying! 🚀**