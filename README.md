# The Data House Website

A modern, GitHub-inspired educational website for Sri Lanka's Premier Data Science & AI Learning Hub.

## 🎨 Design System

This website follows GitHub's design principles and uses a comprehensive design system with the following features:

### Color Palette
- **Canvas Colors**: Primary backgrounds using GitHub's dark theme
- **Accent Colors**: Blue (#58a6ff) for interactive elements and highlights
- **Success Colors**: Green (#238636) for positive actions and confirmations
- **Typography Colors**: Carefully chosen text colors for optimal readability

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Hover effects with subtle shadows and smooth transitions
- **Forms**: Consistent input styling with focus states
- **Navigation**: Clean, responsive navigation with active states
- **Typography**: Semantic heading and body text classes

### Key Features
- ✅ Fully responsive design
- ✅ Dark theme with GitHub-inspired aesthetics
- ✅ Smooth animations and transitions
- ✅ Accessible color contrasts
- ✅ Modern typography using system fonts
- ✅ Interactive hover effects
- ✅ Form validation and error handling
- ✅ Loading states and spinners

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Database**: Supabase
- **Deployment**: Netlify
- **Language**: TypeScript

## 📁 Project Structure

```
datahouse-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── pathways/          # Course pathway pages
│   │   │   ├── tech/          # Tech industry pathway
│   │   │   └── biotech/       # Biotech & pharma pathway
│   │   ├── globals.css        # Global styles & design system
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable React components
│   │   ├── AdminPanel.tsx     # Admin dashboard component
│   │   ├── ContactSection.tsx # Contact form component
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   ├── LoadingSpinner.tsx # Loading indicator
│   │   └── Navigation.tsx     # Main navigation
│   └── lib/
│       └── supabase.ts        # Database configuration
├── public/                    # Static assets
│   ├── logo.svg              # Website logo
│   └── grid-pattern.svg      # Background pattern
├── tailwind.config.js        # Tailwind configuration
└── next.config.js            # Next.js configuration
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with logo and call-to-action
- Mission statement with feature highlights
- Pathway selection cards
- Contact form

### Tech Industry Pathway (`/pathways/tech`)
- Course curriculum overview
- Career outcomes
- Industry-focused content

### Biotech & Pharma Pathway (`/pathways/biotech`)
- Specialized course offerings
- Healthcare industry focus
- Career opportunities in biotech

### Admin Dashboard (`/admin`)
- Contact form submissions management
- GitHub-inspired table design
- Real-time data from Supabase

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd datahouse-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Design System Usage

### Typography
```tsx
<h1 className="heading-1">Large Heading</h1>
<h2 className="heading-2">Section Heading</h2>
<p className="body-large">Large body text</p>
<p className="body-medium">Regular body text</p>
<span className="body-small">Small text</span>
```

### Buttons
```tsx
<button className="btn-primary">Primary Action</button>
<button className="btn-secondary">Secondary Action</button>
<button className="btn-outline">Outline Button</button>
```

### Cards
```tsx
<div className="card hover-lift">
  <h3 className="heading-4">Card Title</h3>
  <p className="body-medium text-secondary">Card content</p>
</div>
```

### Forms
```tsx
<input className="form-input" placeholder="Enter text..." />
<textarea className="form-input resize-none" rows={4} />
```

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **GitHub Aesthetic**: Clean, professional design inspired by GitHub
- **Smooth Animations**: Framer Motion for elegant transitions
- **Form Handling**: Contact form with Supabase backend
- **Admin Panel**: Dashboard for managing inquiries
- **SEO Optimized**: Proper meta tags and structure
- **Performance**: Optimized images and code splitting

## 📧 Contact Form

The contact form captures:
- Student name and email
- Interested pathway (Tech or Biotech)
- Custom message
- Automatic timestamp

All submissions are stored in Supabase and accessible via the admin panel.

## 🚀 Deployment

The site is configured for Netlify deployment with:
- Automatic builds on git push
- Environment variable management
- Custom domain support
- SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 The Data House. All rights reserved.

---

**Author**: SaltyHeart  
**Built with**: Next.js, Tailwind CSS, Framer Motion, Supabase  
**Design**: GitHub-inspired modern aesthetic