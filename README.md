## 🚀 How to Run Locally

### 1. Database Setup (PostgreSQL)
1. Install PostgreSQL and open pgAdmin.
2. Create a new database named `careercompassnew`.
3. Make sure your password matches the `.env` file (usually `root` or `admin`).

### 2. Backend Setup
```bash
cd backend-express
npm install

# Create the .env file
echo "DB_HOST=localhost" > .env
echo "DB_PORT=5432" >> .env
echo "DB_USERNAME=postgres" >> .env
echo "DB_PASSWORD=your_password" >> .env
echo "DB_NAME=careercompassnew" >> .env
echo "JWT_SECRET=career_secret_key" >> .env

# ⚡ KEY STEP: Populate Database
npm run seed
# (You should see "✅ Users Created" and "✅ Questions Created")

# Start Server
npm run dev

```

### 3. Frontend Setup

```bash
cd angular-frontend
npm install
ng serve

```

### 4. Login Credentials (Created by Seed)

* **Admin:** `admin@example.com` / `password123`
* **Student:** `student@example.com` / `password123`

