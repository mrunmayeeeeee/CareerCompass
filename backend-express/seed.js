import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
import { User } from "./models/User.js";
import { Quiz } from "./models/Quiz.js"; // Ensure this matches your Entity name
import bcrypt from "bcrypt";

const seedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("🌱 Connected to Database. Starting Seed...");

    const userRepo = AppDataSource.getRepository(User);
    const quizRepo = AppDataSource.getRepository(Quiz);

    // 1. CLEAR EXISTING DATA (Optional: careful in production!)
    console.log("🧹 Clearing old data...");
    await quizRepo.delete({});
    await userRepo.delete({});

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

    console.log("🚀 Database Seeded Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();