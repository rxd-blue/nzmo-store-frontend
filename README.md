# NZMO Store Frontend

A modern e-commerce frontend with real-time product filtering and a slide-in cart.

## Features

- 🔍 Real-time product filtering
- 🛒 Slide-in cart with automatic updates
- 🌐 Arabic language support
- ⚡ Responsive design

## Live Demo

Frontend: https://nzmo-store.vercel.app
Backend API: https://large-zigzag-gerbil.glitch.me

## Setup

1. Clone the repository:
```bash
git clone https://github.com/rxd-blue/nzmo-store-frontend.git
cd nzmo-store-frontend
```

2. For local development:
   - Open `index.html` in your browser
   - The frontend will connect to the Glitch backend automatically

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

The `vercel.json` configuration file is already set up for static site deployment.

## API Integration

The frontend integrates with the following API endpoints:

- GET `/api/filter` - Get current filter settings
- GET `/api/cart` - Get cart contents
- POST `/api/cart/named` - Add products to cart by name
- POST `/api/cart/reset` - Clear the cart

All API calls are automatically directed to: https://large-zigzag-gerbil.glitch.me 