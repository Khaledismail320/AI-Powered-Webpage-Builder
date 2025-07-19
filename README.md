# AI-Powered Webpage Builder

A full-stack application that generates webpages using AI, built with Next.js frontend and NestJS backend.

## Features

- 🤖 AI-powered webpage generation from text prompts
- 📱 Real-time preview of generated HTML pages
- 📚 History of previously generated pages
- 🎨 Modern, responsive UI with Chakra UI
- 💾 MongoDB integration for data persistence

## Tech Stack

### Frontend
- **Next.js** - React framework


### Backend
- **NestJS** - Node.js framework
- **MongoDB** - Database
- **AI Integration** - OpenRouter's API for Qwen coder model

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 
- **npm** 
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Khaledismail320/AI-Powered-Webpage-Builder.git
cd AI-Powered-Webpage-Builder
```

### 2. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the backend directory:
   ```env
   # Database
   MONGODB_URI= YOUR_MONGO_URI

   # Server
   PORT=3001

   # AI Configuration 
   OPENROUTER_API_KEY=your_api_key_here

   #Frontend url
   FRONTEND_URL = locahlhost:300
   
   ```

4. **Start MongoDB:**
   - **Local MongoDB:** Make sure MongoDB service is running
   - **MongoDB Atlas:** Ensure your cluster is active and accessible

5. **Run the backend server:**
   ```bash
   # Development mode
   npm run start:dev

   # Production mode
   npm run start:prod
   ```

   The backend will start on `http://localhost:3001`

### 3. Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the frontend directory:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Run the frontend development server:**
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`

## API Endpoints

### Generate Page
- **POST** `/aibuilder/generate`
- **Body:** `{ "prompt": "your webpage description" }`
- **Response:** Generated HTML code

### Get History
- **GET** `/aibuilder/history`
- **Response:** Array of previously generated pages

## Project Structure

```
AI-Powered-Webpage-Builder/
├── backend/
│   ├── src/
│   │   ├── aibuilder/          # AI builder module
│   │   ├── database/           # Database configuration
│   │   ├── schemas/            # MongoDB schemas
│   │   └── utils/              # Utility functions
│   ├── package.json
│   
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Drawer.js       # History drawer
│   │   │   ├── Form.js         # Generation form
│   │   │   ├── Navbar.js       # Navigation bar
│   │   │   └── Preview.js      # Webpage preview section
│   │   └── pages/              # Next.js pages
│   ├── package.json
│   
└── README.md
```

## Usage

1. **Start both servers** (backend on :3001, frontend on :3000)
2. **Open your browser** and go to `http://localhost:3000`
3. **Enter a description** of the webpage you want to generate
4. **Click "Generate Page"** to create your webpage
5. **View the preview** in the preview section below
6. **Access history** by clicking the "History" button in the navbar
7. **Click on any historical item** to view previously generated pages

## Development Scripts

### Backend
```bash
npm run start:dev    # Start in development mode
npm run start:prod   # Start in production mode
npm run build        # Build the application
npm run test         # Run tests
npm run lint         # Run ESLint
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```


## Troubleshooting

### Common Issues

1. **Backend won't start:**
   - Check if MongoDB is running
   - Verify your MongoDB connection string in `.env`
   - Ensure port 3001 is not in use

2. **Frontend won't connect to backend:**
   - Verify backend is running on port 3001
   - Check `NEXT_PUBLIC_API_URL` in the `.env` of the frontend directory
   - Check `FRONTEND_URL` in the `.env` of the backend directory for cors

3. **Database connection issues:**
   - Verify MongoDB is running
   - Check connection string format
   - Ensure database permissions (if using Atlas)

4. **AI generation not working:**
   - Check your Open Router API key
   

