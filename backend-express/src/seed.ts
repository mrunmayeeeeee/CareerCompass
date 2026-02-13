import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
import { User } from "./models/User.js";
import { QuizQuestion } from "./models/Quiz.js";
import bcrypt from "bcrypt";
import { Course } from "./models/Course.js";

const seedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("🌱 Connected to Database. Starting Seed...");

    const userRepo = AppDataSource.getRepository(User);
    const quizRepo = AppDataSource.getRepository(QuizQuestion);

    // 1. CLEAR EXISTING DATA (Optional: careful in production!)
    console.log("🧹 Clearing old data...");
    await quizRepo.clear();
    await userRepo.clear();

    // 2. CREATE USERS
    console.log("👤 Creating Users...");
    const passwordHash = await bcrypt.hash("password123", 10);

    const users = [
      { username: "admin", email: "admin@example.com", password: passwordHash, role: "admin" },
      { username: "faculty", email: "faculty@example.com", password: passwordHash, role: "faculty" },
      { username: "student", email: "student@example.com", password: passwordHash, role: "student" },
    ];

    await userRepo.save(users);
    console.log("✅ Users Created! (Password: password123)");

    // 3. CREATE QUIZ QUESTIONS
    console.log("📝 Creating Questions...");
    const questions = [
      { category: "Science", questionText: "What is the powerhouse of the cell?", optionA: "Nucleus", optionB: "Mitochondria", optionC: "Ribosome", optionD: "Golgi Body", correctOption: "B" },
      { category: "Science", questionText: "Which law states that for every action there is an equal and opposite reaction?", optionA: "Newton 1st", optionB: "Newton 2nd", optionC: "Newton 3rd", optionD: "Law of Gravity", correctOption: "C" },
      { category: "Science", questionText: "What is the chemical symbol for Gold?", optionA: "Gd", optionB: "Ag", optionC: "Au", optionD: "Fe", correctOption: "C" },
      { category: "Science", questionText: "Which gas is most abundant in Earths atmosphere?", optionA: "Oxygen", optionB: "CO2", optionC: "Hydrogen", optionD: "Nitrogen", correctOption: "D" },
      { category: "Science", questionText: "What is the speed of light approximately?", optionA: "3x10^8 m/s", optionB: "2x10^5 m/s", optionC: "5x10^6 m/s", optionD: "1x10^9 m/s", correctOption: "A" },
      { category: "Math", questionText: "If a shirt costs $20 after a 20% discount, what was the original price?", optionA: "$24", optionB: "$25", optionC: "$30", optionD: "$22", correctOption: "B" },
      { category: "Math", questionText: "Solve for x: 2x + 7 = 15", optionA: "3", optionB: "5", optionC: "4", optionD: "6", correctOption: "C" },
      { category: "Math", questionText: "Which number completes the sequence: 2, 6, 12, 20, ?", optionA: "24", optionB: "28", optionC: "30", optionD: "32", correctOption: "C" },
      { category: "Math", questionText: "What is the square root of 225?", optionA: "12", optionB: "13", optionC: "15", optionD: "25", correctOption: "C" },
      { category: "Math", questionText: "What is 15% of 200?", optionA: "20", optionB: "25", optionC: "30", optionD: "35", correctOption: "C" },
      { category: "Arts", questionText: "Who painted the Mona Lisa?", optionA: "Van Gogh", optionB: "Picasso", optionC: "Da Vinci", optionD: "Claude Monet", correctOption: "C" },
      { category: "Arts", questionText: "Which Indian classical dance form originated in Kerala?", optionA: "Kathak", optionB: "Kathakali", optionC: "Bharatanatyam", optionD: "Odissi", correctOption: "B" },
      { category: "Arts", questionText: "Who is known as the Father of History?", optionA: "Socrates", optionB: "Herodotus", optionC: "Aristotle", optionD: "Plato", correctOption: "B" },
      { category: "Arts", questionText: "The Statue of Liberty was a gift from which country?", optionA: "UK", optionB: "Germany", optionC: "France", optionD: "Italy", correctOption: "C" },
      { category: "Arts", questionText: "Which of these is a famous work by William Shakespeare?", optionA: "The Iliad", optionB: "Hamlet", optionC: "War and Peace", optionD: "The Odyssey", correctOption: "B" },
    ];

    await quizRepo.save(questions);
    console.log("✅ Questions Created!");

    console.log("📚 Creating Courses...");
   const courseRepo = AppDataSource.getRepository(Course); // <--- 'Course' is the Class Entity
    await courseRepo.clear(); // <--- This wipes the table cleanly // Clear old courses

    const courses = [
      // SCIENCE
      { courseName: "B.Tech in Computer Science", stream: "Science", durationYears: 4, fees: "₹1.5L - ₹4L per year", eligibilityCriteria: "12th Science with PCM > 60%", futureScope: "Software Engineer, Data Scientist, AI Specialist" },
      { courseName: "MBBS (Medicine)", stream: "Science", durationYears: 5, fees: "₹50k - ₹20L per year", eligibilityCriteria: "12th Science with PCB + NEET", futureScope: "Doctor, Surgeon, Medical Researcher" },
      { courseName: "B.Sc in Biotechnology", stream: "Science", durationYears: 3, fees: "₹50k - ₹1.5L per year", eligibilityCriteria: "12th Science (PCB/PCM)", futureScope: "Research Analyst, Lab Technician" },

      // COMMERCE
      { courseName: "B.Com (Hons)", stream: "Commerce", durationYears: 3, fees: "₹20k - ₹1L per year", eligibilityCriteria: "12th Commerce > 50%", futureScope: "Accountant, Banker, Tax Consultant" },
      { courseName: "CA (Chartered Accountancy)", stream: "Commerce", durationYears: 5, fees: "Varies", eligibilityCriteria: "12th + CPT Exam", futureScope: "Auditor, Finance Manager, CFO" },
      { courseName: "BBA (Business Admin)", stream: "Commerce", durationYears: 3, fees: "₹1L - ₹3L per year", eligibilityCriteria: "12th Any Stream", futureScope: "HR Manager, Marketing Executive" },

      // ARTS
      { courseName: "BA in Psychology", stream: "Arts", durationYears: 3, fees: "₹30k - ₹1L per year", eligibilityCriteria: "12th Arts", futureScope: "Psychologist, Counselor, HR" },
      { courseName: "BA in Journalism", stream: "Arts", durationYears: 3, fees: "₹50k - ₹2L per year", eligibilityCriteria: "12th Any Stream", futureScope: "Journalist, News Anchor, Content Writer" },
      { courseName: "LLB (Law)", stream: "Arts", durationYears: 5, fees: "₹1L - ₹3L per year", eligibilityCriteria: "12th + CLAT", futureScope: "Lawyer, Judge, Legal Advisor" },
    ];

    console.log("🚀 Database Seeded Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();