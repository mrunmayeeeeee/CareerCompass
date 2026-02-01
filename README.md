# CareerCompass

A comprehensive career guidance platform designed to help students and professionals navigate their career paths with data-driven insights, aptitude tests, and personalized recommendations.

## Features

- **Aptitude Testing**: Interactive quiz system to assess skills and interests
- **Career Recommendations**: AI-powered suggestions based on quiz results and user profiles
- **College & Course Database**: Information on colleges, courses, cutoffs, and eligibility
- **Career Roadmaps**: Step-by-step guides for various career paths
- **Skill Analysis**: Match current abilities with high-growth industries
- **Market Trends**: Real-time data on job market trends and salaries
- **User Profiles**: Personalized dashboards for tracking progress

## Tech Stack

### Frontend
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- ESLint for code quality

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- CORS for cross-origin requests

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally on default port 27017)
- npm or yarn package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mrunmayeeeeee/CareerCompass.git
   cd CareerCompass
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend-express
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../react-frontend
   npm install
   ```

## Usage

1. **Start MongoDB:**
   Make sure MongoDB is running on your local machine (default: `mongodb://127.0.0.1:27017/CareerCompass`)

2. **Seed the database (optional but recommended for testing):**
   ```bash
   cd backend-express
   npm run seed
   ```

3. **Start the backend server:**
   ```bash
   cd backend-express
   npm run dev
   ```
   The backend will be available at `http://localhost:5000`

4. **Start the frontend development server:**
   ```bash
   cd ../react-frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or the port shown in the terminal)

5. **Open your browser:**
   Navigate to the frontend URL to start using the application.

## API Endpoints

The backend provides the following API endpoints:

### Users
- `POST /api/users/register` - Register a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/:id/preferences` - Update user preferences

### Careers
- `GET /api/careers` - Get all careers
- `GET /api/careers/:id` - Get career details by ID
- `GET /api/careers/:id/roadmap` - Get career roadmap
- `GET /api/careers/:id/resources` - Get free learning resources

### Colleges
- `GET /api/colleges` - Get all colleges
- `GET /api/colleges/:id` - Get college details by ID
- `GET /api/colleges/course/:courseId` - Get colleges offering a specific course

### Courses
- `GET /api/courses/stream/:stream` - Get courses by stream (Science/Commerce/Arts)
- `GET /api/courses/:id` - Get course details by ID
- `POST /api/courses/compare` - Compare two courses

### Quiz
- `GET /api/quiz` - Get full quiz questions
- `POST /api/quiz/submit` - Submit quiz answers and get career recommendations

### Health Check
- `GET /api/health` - API health check

## Project Structure

```
CareerCompass/
├── backend-express/          # Express.js backend
│   ├── src/
│   │   ├── models/          # Mongoose models
│   │   ├── repositories/    # Data access layer
│   │   ├── services/        # Business logic
│   │   ├── controllers/     # Route handlers
│   │   ├── routes/          # API routes
│   │   └── server.ts        # Main server file
│   ├── package.json
│   └── tsconfig.json
├── react-frontend/           # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main app component
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.