# Premium Metal Products Website

A modern, responsive web application for Premium Metal Products (Shandong) Co., Ltd., built with Next.js, React, Node.js, and MongoDB. This application showcases the company's steel and metal products, services, and provides a platform for customer inquiries and quote requests.

## Features

### Frontend (Next.js + React)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Beautiful, accessible components with smooth animations
- **Homepage**: Hero section, company overview, product showcase, services, news, and factory gallery
- **Product Catalog**: Dynamic product listings with filtering and search
- **News Center**: Article management with categories and search functionality
- **About Us**: Comprehensive company information and values
- **FAQ Section**: Expandable questions and answers
- **Contact Form**: Multi-step contact form with validation
- **Quote Request**: Detailed quote request form with product specifications

### Backend (Node.js + Express)
- **RESTful API**: Complete API endpoints for all features
- **MongoDB Integration**: Robust database models with relationships
- **Email Notifications**: Automated email sending for contact forms and quotes
- **File Upload**: Support for image uploads with Multer
- **Data Validation**: Comprehensive input validation and error handling

### Database Models
- **Products**: Complete product catalog with specifications, features, and categories
- **News**: Article management with categories, tags, and SEO optimization
- **Contacts**: Contact form submissions with status tracking
- **Quotes**: Quote requests with detailed specifications and follow-up tracking

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, customizable icons
- **React Hook Form**: Form handling and validation

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Nodemailer**: Email sending functionality
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd premium-metal-website
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies (if not already installed)
cd server
npm install
cd ..
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/premium-metal
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# API
API_URL=http://localhost:5000/api
```

### 4. Database Setup
Make sure MongoDB is running on your system:
```bash
# Start MongoDB (if running locally)
mongod
```

### 5. Run the Application

#### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev:full

# Or run them separately:
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

#### Production Mode
```bash
# Build the frontend
npm run build

# Start the application
npm start
```

## Project Structure

```
premium-metal-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── news/              # News page
│   ├── products/          # Products page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Homepage hero
│   ├── AboutSection.tsx   # About section
│   ├── ProductsSection.tsx # Products showcase
│   ├── ServicesSection.tsx # Services section
│   ├── NewsSection.tsx    # News section
│   ├── FactoryShowSection.tsx # Factory gallery
│   └── QuoteSection.tsx   # Quote request form
├── server/                # Backend API
│   ├── models/            # MongoDB models
│   │   ├── Product.js     # Product model
│   │   ├── News.js        # News model
│   │   ├── Contact.js     # Contact model
│   │   └── Quote.js       # Quote model
│   ├── uploads/           # File upload directory
│   └── index.js           # Express server
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## API Endpoints

### Products
- `GET /api/products` - Get all products with filtering
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (admin)

### News
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get single article
- `POST /api/news` - Create new article (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Quotes
- `POST /api/quote` - Submit quote request

## Features Overview

### Homepage
- **Hero Section**: Dynamic slideshow with company messaging
- **About Section**: Company values and philosophy
- **Products Section**: Featured product showcase
- **Services Section**: Manufacturing capabilities
- **News Section**: Latest company news
- **Factory Show**: Virtual factory tour
- **Quote Section**: Quick quote request form

### Product Catalog
- **Category Filtering**: Filter by product type
- **Search Functionality**: Search products by name/description
- **Product Details**: Comprehensive product information
- **Specifications**: Technical specifications and features
- **Related Products**: Product recommendations

### News Center
- **Article Management**: Categorized news articles
- **Search & Filter**: Find articles by category or keywords
- **Featured Articles**: Highlighted important news
- **Article Details**: Full article content with related articles

### Contact & Quote System
- **Contact Form**: Multi-field contact form with validation
- **Quote Request**: Detailed quote form with specifications
- **Email Notifications**: Automatic email alerts
- **Status Tracking**: Track inquiry and quote status

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes

### Content
- Update company information in the About page
- Modify product data in the database
- Add news articles through the API
- Customize FAQ questions and answers

### Email Configuration
Configure email settings in the `.env.local` file:
- SMTP server details
- Email credentials
- Notification recipients

## Deployment

### Frontend (Vercel/Netlify)
1. Connect your repository to Vercel or Netlify
2. Set environment variables
3. Deploy automatically on push

### Backend (Heroku/DigitalOcean)
1. Create a new app on your hosting platform
2. Set environment variables
3. Deploy the server code
4. Configure MongoDB Atlas for production

### Database
- Use MongoDB Atlas for production
- Set up proper security and backups
- Configure connection strings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Premium Metal Products (Shandong) Co., Ltd.

## Support

For technical support or questions, please contact:
- Email: 
- Phone: 

---

**Premium Metal Products Co., Ltd.**
*Premium Steel & Metal Solutions*
