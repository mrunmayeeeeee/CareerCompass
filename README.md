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
- PostgreSQL with TypeORM
- CORS for cross-origin requests

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (version 16 or higher)
- npm or yarn package manager

### PostgreSQL Installation

#### Windows:
1. Download PostgreSQL from the [official website](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Note down the password you set for the `postgres` superuser
4. PostgreSQL will be installed with pgAdmin (GUI tool)

#### macOS:
```bash
brew install postgresql
brew services start postgresql
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

#### Verify Installation:
```bash
psql --version
```

### PostgreSQL Setup

1. **Create Database and User:**
   ```bash
   # Connect as postgres superuser
   psql -U postgres

   # In psql shell:
   CREATE USER yashm WITH PASSWORD 'root';
   CREATE DATABASE careercompass OWNER yashm;
   GRANT ALL PRIVILEGES ON DATABASE careercompass TO yashm;
   \q
   ```

2. **Test Connection:**
   ```bash
   psql -U yashm -d careercompass -c "SELECT version();"
   ```

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

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend-express` directory:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=yashm
   DB_PASSWORD=root
   DB_NAME=careercompass
   ```

4. **Install frontend dependencies:**
   ```bash
   cd ../react-frontend
   npm install
   ```

## Usage

1. **Ensure PostgreSQL is running:**
   Make sure PostgreSQL service is started and the database `careercompass` exists.

2. **Seed the database with dummy data (optional but recommended for testing):**
   ```bash
   cd backend-express
   # Connect to PostgreSQL
   psql -U yashm -d careercompass

   # Run these INSERT commands in psql:
   INSERT INTO "user" (name, email, "passwordHash", stream, "currentRole", skills, interests) VALUES ('John Doe', 'john@example.com', 'hashedpass1', 'Science', 'Student', ARRAY['Math', 'Physics'], ARRAY['AI', 'Robotics']);
   INSERT INTO "user" (name, email, "passwordHash", stream, "currentRole", skills, interests) VALUES ('Jane Smith', 'jane@example.com', 'hashedpass2', 'Commerce', 'Student', ARRAY['Accounting'], ARRAY['Finance']);

   INSERT INTO career ("careerTitle", "jobDescription", "averageSalary", "requiredSkills", "roadmapSteps", "learningResources") VALUES ('Software Engineer', 'Develop software applications', '$100,000', ARRAY['Programming', 'Algorithms'], '[{"stepTitle": "Learn Basics", "description": "Learn programming"}]'::json, '[{"title": "Codecademy", "url": "https://codecademy.com", "isFree": true}]'::json);

   INSERT INTO course ("courseName", description, "durationYears", fees, "eligibilityCriteria", stream, "futureScope") VALUES ('B.Tech Computer Science', 'Engineering course', 4, '$50,000', '12th Science', 'Science', 'High demand in tech');

   INSERT INTO college ("collegeName", location, "websiteUrl", description, "offeredCourses") VALUES ('IIT Delhi', 'Delhi', 'https://iitd.ac.in', 'Top engineering college', '[{"courseId": 1, "cutoff": "95%"}]'::json);

   INSERT INTO quiz ("questionText", options) VALUES ('What interests you more?', '[{"optionText": "Math", "associatedCareerId": 1}, {"optionText": "Business", "associatedCareerId": 2}]'::json);

   \q
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

## Troubleshooting

### PostgreSQL Connection Issues
- Ensure PostgreSQL service is running
- Verify the credentials in `.env` match your database setup
- Check if the database `careercompass` exists and user `yashm` has permissions

### Port Conflicts
- Backend runs on port 5000 by default
- Frontend runs on port 5173 by default
- Change ports in respective config files if needed

### Database Tables Not Created
- TypeORM auto-creates tables with `synchronize: true` in development
- For production, set `synchronize: false` and use migrations

## Project Structure

```
CareerCompass/
├── backend-express/          # Express.js backend
│   ├── src/
│   │   ├── models/          # TypeORM entities
│   │   ├── repositories/    # Data access layer
│   │   ├── services/        # Business logic
│   │   ├── controllers/     # Route handlers
│   │   ├── routes/          # API routes
│   │   ├── data-source.ts   # TypeORM configuration
│   │   └── server.ts        # Main server file
│   ├── .env                 # Environment variables
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