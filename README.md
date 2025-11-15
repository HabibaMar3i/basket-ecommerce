# Basket E-commerce

A modern e-commerce web application built with React and Vite, featuring a complete shopping experience with user authentication, product catalog, shopping cart, and payment integration.

## 🚀 Live Demo

- **Frontend**: [https://basket-ecommerce-iota.vercel.app](https://basket-ecommerce-iota.vercel.app)
- **Backend API**: [https://e-commarce-website-eight.vercel.app](https://e-commarce-website-eight.vercel.app)

## ✨ Features

### 🛍️ Shopping Experience
- Product catalog with categories
- Product search and filtering
- Shopping cart management
- Wishlist functionality
- Product reviews and ratings

### 👤 User Management
- User registration and login
- JWT authentication with refresh tokens
- User profile management
- Order history tracking

### 💳 Payment & Checkout
- Secure checkout process
- Stripe payment integration
- Order management system
- Payment success/failure handling

### 📱 UI/UX
- Responsive design for all devices
- Modern and clean interface
- Toast notifications
- Loading states and error handling
- SEO optimized

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Toastify** - Notifications
- **Formik & Yup** - Form handling and validation
- **React Spinners** - Loading indicators

### Backend Integration
- RESTful API integration
- JWT token management
- Automatic token refresh
- Error handling and retry logic

## 📁 Project Structure

```
src/
├── components/
│   ├── context/           # React Context providers
│   ├── BannerCarousel/    # Homepage carousel
│   ├── BestSellers/       # Best selling products
│   ├── Category/          # Product categories
│   ├── Footer/            # Site footer
│   ├── Header/            # Site header
│   ├── Navbar/            # Navigation bar
│   ├── ProductCard/       # Product display card
│   └── ...
├── pages/
│   ├── HomePage/          # Landing page
│   ├── Shop/              # Product listing
│   ├── Cart/              # Shopping cart
│   ├── Checkout/          # Checkout process
│   ├── Login/             # User login
│   ├── Register/          # User registration
│   ├── Profile/           # User profile
│   └── ...
├── hooks/                 # Custom React hooks
├── layouts/               # Page layouts
├── assets/                # Images and static files
├── axiosInstance.js       # API configuration
└── main.jsx              # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd basket-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://e-commarce-website-eight.vercel.app/api/v1
```

### API Integration
The app connects to a backend API for:
- User authentication
- Product data
- Cart management
- Order processing
- Payment handling

## 📱 Key Features Breakdown

### Authentication System
- Secure login/register with form validation
- JWT token storage and management
- Automatic token refresh
- Protected routes

### Shopping Cart
- Add/remove products
- Quantity management
- Real-time price calculation
- Persistent cart state

### Product Management
- Category-based browsing
- Product search
- Detailed product views
- Best sellers section

### Checkout Process
- Secure payment with Stripe
- Order confirmation
- Payment status tracking

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Responsive design patterns
- Custom color scheme
- Component-based styling
- Mobile-first approach

## 🔒 Security Features

- JWT token authentication
- Secure API communication
- Input validation and sanitization
- Protected routes
- CORS handling

## 📦 Deployment

### Vercel Deployment
The project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Build Configuration
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vercel.json` - Vercel deployment settings

## 🐛 Known Issues

- CORS configuration needed on backend for production
- MetaMask integration requires HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact the development team.

---

Built with ❤️ using React and Vite