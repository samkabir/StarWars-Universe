# Star Wars Universe

A full-stack web application that provides an interactive interface to explore the Star Wars universe using the SWAPI (Star Wars API). Built with React frontend and [Express backend middleware](https://github.com/samkabir/Starwars-Universe-Middleware).

# [Live Functional Link](https://starwars-universe-middleware.vercel.app/)

## 🚀 Features

- **Interactive Star Wars Data Explorer**: Browse characters, planets, starships, and more
- **Advanced Search Functionality**: Find your favorite Star Wars entities quickly
- **Pagination Support**: Navigate through large datasets efficiently  
- **Optimized Performance**: Data memoization to reduce API calls and improve user experience
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- **Modern UI Components**: Enhanced user interface with Material-UI components

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - Modern React with hooks and functional components
- **React Router** 6.14.2 - Client-side routing and navigation
- **Tailwind CSS** 3.3.3 - Utility-first CSS framework
- **Material-UI** 7.1.0 - React component library
- **Vite** 4.5.14 - Fast build tool and development server

### Backend
- **Express.js** 5.1.0 - Web application framework
- **Axios** 1.9.0 - HTTP client for API requests
- **dotenv** 16.5.0 - Environment variable management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or fnm package manager

### Steps

1. **Clone both repositories:**
   ```bash
   # Clone the frontend repository
   git clone https://github.com/samkabir/StarWars-Universe
   
   # Clone the middleware repository
   git clone https://github.com/samkabir/Starwars-Universe-Middleware
   ```

2. **Install dependencies:**
   ```bash
   # Navigate to each folder and install dependencies
   cd starwars-frontend
   npm install

   cd ../starwars-middleware
   npm install
   ```

3. **Start the backend server:**
   ```bash
   cd starwars-middleware
   node index.js
   ```

4. **Start the frontend development server**
   ```bash
   cd starwars-frontend
   npm run dev
   ```

4. **Access the application: Open your browser and navigate to http://localhost:5173**

## 🧪 Testing & QA

The application has been thoroughly tested using multiple approaches:

- **End-to-End User Testing**: Comprehensive testing from user perspective
- **Functionality Testing**: Each feature tested individually for proper operation
- **White Box Testing**: Internal logic and code structure validation
- **Performance Testing**: API call optimization and response time evaluation

## 🏗️ Architecture & Design Decisions

### Development Approach
1. **Backend-First Development**: Built robust API endpoints before frontend implementation
2. **SWAPI Integration**: Thoroughly analyzed Star Wars API documentation for optimal integration
3. **Component Architecture**: Focused on creating reusable, modular React components
4. **Performance Optimization**: Implemented data memoization to minimize redundant API calls

### Technology Choices
- **React 18**: Chosen for stability and familiarity with modern React patterns
- **Tailwind CSS v3**: Selected for utility-first approach and rapid UI development
- **Express.js**: Latest version used for robust backend API handling
- **Vite**: Preferred over Create React App for faster development builds

### Key Features Implementation
- **Smart Pagination**: Efficient data loading and navigation
- **Search Optimization**: Real-time search with debouncing
- **Data Caching**: Strategic memoization to reduce API load
- **Responsive Design**: Mobile-first approach with Tailwind utilities

## 🤝 Support

If you encounter any difficulties during installation or setup, please reach out:

**Email**: samkabir26@gmail.com
  
