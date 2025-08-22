# Adey Threads Website

A premium Habesha fashion brand website built with Next.js 15, TypeScript, and TailwindCSS. This is a static pre-launch website designed to capture emails, build anticipation, and establish brand credibility.

## 🎯 Features

- **Modern Design**: Beautiful, responsive design with Habesha-inspired aesthetics
- **Email Capture**: Integrated waitlist signup with Resend email service
- **Contact Form**: Functional contact form with email notifications
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Google Analytics**: Integrated GA4 tracking
- **Mobile First**: Fully responsive design for all devices
- **Performance**: Optimized for fast loading and high Lighthouse scores

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Email Service**: Resend
- **Analytics**: Google Analytics 4
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Pages

1. **Home** (`/`) - Hero section, brand story, product preview, email capture
2. **About** (`/about`) - Brand story, cultural heritage, values
3. **Contact** (`/contact`) - Contact form and information
4. **Policies** (`/policies`) - Placeholder policies page

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend account (for email functionality)
- Google Analytics account (optional)

### 1. Clone and Install

```bash
git clone <repository-url>
cd adey-threads-website
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Fill in your environment variables:

```env
# Required: Resend API Key
RESEND_API_KEY=your_resend_api_key_here

# Optional: Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add the key to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add these in your Vercel dashboard:

- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Build for Production

```bash
npm run build
npm start
```

## 📧 Email Configuration

### Resend Setup

1. **Domain Verification**: Verify your domain in Resend dashboard
2. **From Email**: Update the from email in API routes to match your domain
3. **Templates**: Customize email templates in `/app/api/subscribe/route.ts` and `/app/api/contact/route.ts`

### Email Templates

The website includes:
- Welcome email for waitlist signups
- Contact form confirmation emails
- Support notification emails

## 🎨 Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#8B4513',    // Main brand color
  secondary: '#D2691E',  // Secondary brand color
  accent: '#F4A460',     // Accent color
  // ... more colors
}
```

### Fonts

The website uses:
- **Playfair Display**: For headings and brand elements
- **Inter**: For body text and UI elements

### Content

Update content in:
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content
- `app/contact/page.tsx` - Contact information
- `app/policies/page.tsx` - Policy information

## 📊 Analytics

### Google Analytics Setup

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable

### Tracking Events

The website tracks:
- Page views (automatic)
- Email form submissions
- Contact form submissions

## 🔧 API Routes

### `/api/subscribe`
- Handles waitlist email signups
- Sends welcome email
- Stores email (currently logs to console)

### `/api/contact`
- Handles contact form submissions
- Sends notification to support
- Sends confirmation to user

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

### Optimization Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: Pre-rendered pages for fast loading

### Lighthouse Targets

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 🔒 Security

- **Input Validation**: All forms include validation
- **CSRF Protection**: Built into Next.js
- **Environment Variables**: Sensitive data in .env files
- **HTTPS**: Required for production

## 📈 SEO

### Meta Tags

- Complete Open Graph tags
- Twitter Card support
- Structured data
- Canonical URLs

### Performance

- Fast loading times
- Mobile-friendly design
- Accessible markup
- Clean URLs

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**: Check Resend API key and domain verification
2. **Build errors**: Ensure all dependencies are installed
3. **Styling issues**: Clear browser cache and restart dev server

### Debug Mode

Enable debug logging by adding to `.env.local`:

```env
DEBUG=true
```

## 📝 License

This project is proprietary to Adey Threads.

## 🤝 Support

For support or questions:
- Email: support@adeythreads.com
- Contact form: `/contact`

## 🚀 Next Steps (v2.0)

Planned features for the next version:
- E-commerce functionality
- Product catalog
- Shopping cart
- User accounts
- CMS integration
- Multi-language support

---

**Built with ❤️ for Adey Threads**
