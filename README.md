# NZMO Store Frontend

A modern e-commerce frontend with real-time product filtering and a slide-in cart.

## Features

- 🔍 Real-time product filtering
- 🛒 Slide-in cart with automatic updates
- 🌐 Arabic language support
- ⚡ Responsive design

## Setup

1. Clone the repository:
```bash
git clone https://github.com/rxd-blue/nzmo-store-frontend.git
cd nzmo-store-frontend
```

2. Open `index.html` in your browser

## Development

The frontend communicates with the backend API running on `http://localhost:3000`. Make sure the backend server is running before using the application.

## API Integration

The frontend integrates with the following API endpoints:

- GET `/api/filter` - Get current filter settings
- GET `/api/cart` - Get cart contents
- POST `/api/cart/named` - Add products to cart by name
- POST `/api/cart/reset` - Clear the cart 