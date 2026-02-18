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
      // ================= SCIENCE STREAM =================
      {
        courseName: "B.Tech in Computer Science",
        stream: "Science",
        durationYears: 4,
        fees: "₹1.5L - ₹4L per year",
        eligibilityCriteria: "12th Science with PCM > 60%",
        futureScope: "Software Engineer, Data Scientist, AI Specialist"
      },
      {
        courseName: "MBBS (Medicine)",
        stream: "Science",
        durationYears: 5,
        fees: "₹50k - ₹25L per year",
        eligibilityCriteria: "12th Science with PCB + NEET Rank",
        futureScope: "Doctor, Surgeon, Medical Researcher"
      },
      {
        courseName: "B.Arch (Architecture)",
        stream: "Science",
        durationYears: 5,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th PCM + NATA Score",
        futureScope: "Architect, Urban Planner, Interior Designer"
      },
      {
        courseName: "B.Sc in Biotechnology",
        stream: "Science",
        durationYears: 3,
        fees: "₹50k - ₹1.5L per year",
        eligibilityCriteria: "12th Science (PCB/PCM)",
        futureScope: "Research Analyst, Lab Technician, Bio-Manufacturing"
      },
      {
        courseName: "Commercial Pilot Training (CPL)",
        stream: "Science",
        durationYears: 2,
        fees: "₹25L - ₹40L (Total)",
        eligibilityCriteria: "12th Science (PCM) + Medical Fitness",
        futureScope: "Airline Pilot, Cargo Pilot, Flight Instructor"
      },
      {
        courseName: "B.Pharma (Pharmacy)",
        stream: "Science",
        durationYears: 4,
        fees: "₹80k - ₹2L per year",
        eligibilityCriteria: "12th Science (PCB/PCM)",
        futureScope: "Pharmacist, Drug Inspector, R&D Scientist"
      },
      {
        courseName: "B.Sc in Agriculture",
        stream: "Science",
        durationYears: 4,
        fees: "₹30k - ₹1L per year",
        eligibilityCriteria: "12th Science (PCB)",
        futureScope: "Agriculture Officer, Farm Manager, Soil Scientist"
      },
      {
        courseName: "BCA (Computer Applications)",
        stream: "Science",
        durationYears: 3,
        fees: "₹60k - ₹1.5L per year",
        eligibilityCriteria: "12th Any Stream (Maths preferred)",
        futureScope: "Web Developer, System Admin, App Developer"
      },
      {
        courseName: "B.Sc in Nursing",
        stream: "Science",
        durationYears: 4,
        fees: "₹50k - ₹1.5L per year",
        eligibilityCriteria: "12th Science (PCB)",
        futureScope: "Registered Nurse, Healthcare Administrator"
      },
      {
        courseName: "B.Sc in Data Science",
        stream: "Science",
        durationYears: 3,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th Science with Maths/Stats",
        futureScope: "Data Analyst, Business Intelligence, ML Engineer"
      },

      // ================= COMMERCE STREAM =================
      {
        courseName: "B.Com (Hons)",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹20k - ₹1L per year",
        eligibilityCriteria: "12th Commerce > 50%",
        futureScope: "Accountant, Banker, Tax Consultant"
      },
      {
        courseName: "CA (Chartered Accountancy)",
        stream: "Commerce",
        durationYears: 5,
        fees: "Varies (Exam based)",
        eligibilityCriteria: "12th + CPT/Foundation Exam",
        futureScope: "Auditor, Finance Manager, CFO, Tax Advisor"
      },
      {
        courseName: "CS (Company Secretary)",
        stream: "Commerce",
        durationYears: 3,
        fees: "Varies (Exam based)",
        eligibilityCriteria: "12th + CSEET Exam",
        futureScope: "Corporate Governance, Legal Advisor, Compliance Officer"
      },
      {
        courseName: "BBA (Business Admin)",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th Any Stream",
        futureScope: "HR Manager, Marketing Executive, Entrepreneur"
      },
      {
        courseName: "BMS (Management Studies)",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹50k - ₹2L per year",
        eligibilityCriteria: "12th Commerce > 50%",
        futureScope: "Business Analyst, Operations Manager, Consultant"
      },
      {
        courseName: "CMA (Cost Management Accountant)",
        stream: "Commerce",
        durationYears: 3,
        fees: "Varies (Exam based)",
        eligibilityCriteria: "12th + Foundation Course",
        futureScope: "Cost Accountant, Financial Controller, Analyst"
      },
      {
        courseName: "B.Com in Banking & Insurance",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹40k - ₹1L per year",
        eligibilityCriteria: "12th Commerce",
        futureScope: "Bank PO, Insurance Agent, Loan Officer"
      },
      {
        courseName: "B.Stat (Statistics)",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹20k - ₹80k per year",
        eligibilityCriteria: "12th with Maths/Stats",
        futureScope: "Statistician, Risk Analyst, Actuary"
      },
      {
        courseName: "Certified Financial Planner (CFP)",
        stream: "Commerce",
        durationYears: 1,
        fees: "₹40k - ₹60k (Certification)",
        eligibilityCriteria: "12th Pass",
        futureScope: "Wealth Manager, Portfolio Manager, Investment Advisor"
      },
      {
        courseName: "B.Com with ACCA",
        stream: "Commerce",
        durationYears: 3,
        fees: "₹1.5L - ₹3L per year",
        eligibilityCriteria: "12th Commerce",
        futureScope: "Global Accountant, Audit Associate, Financial Consultant"
      },

      // ================= ARTS & HUMANITIES STREAM =================
      {
        courseName: "BA in Psychology",
        stream: "Arts",
        durationYears: 3,
        fees: "₹30k - ₹1L per year",
        eligibilityCriteria: "12th Arts/Any Stream",
        futureScope: "Psychologist, Counselor, HR Specialist"
      },
      {
        courseName: "BA in Journalism & Mass Comm",
        stream: "Arts",
        durationYears: 3,
        fees: "₹50k - ₹2L per year",
        eligibilityCriteria: "12th Any Stream",
        futureScope: "Journalist, News Anchor, Content Writer, Editor"
      },
      {
        courseName: "LLB (Law)",
        stream: "Arts",
        durationYears: 5,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th + CLAT Score",
        futureScope: "Lawyer, Judge, Corporate Legal Advisor"
      },
      {
        courseName: "B.Des (Fashion Design)",
        stream: "Arts",
        durationYears: 4,
        fees: "₹1.5L - ₹4L per year",
        eligibilityCriteria: "12th + NIFT/Entrance Exam",
        futureScope: "Fashion Designer, Stylist, Textile Manager"
      },
      {
        courseName: "BHM (Hotel Management)",
        stream: "Arts",
        durationYears: 3,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th Any Stream",
        futureScope: "Hotel Manager, Chef, Event Coordinator"
      },
      {
        courseName: "BA in English Literature",
        stream: "Arts",
        durationYears: 3,
        fees: "₹20k - ₹60k per year",
        eligibilityCriteria: "12th Any Stream",
        futureScope: "Writer, Teacher, Editor, Public Relations"
      },
      {
        courseName: "BFA (Fine Arts)",
        stream: "Arts",
        durationYears: 4,
        fees: "₹30k - ₹1L per year",
        eligibilityCriteria: "12th + Aptitude Test",
        futureScope: "Artist, Illustrator, Art Director, UX Designer"
      },
      {
        courseName: "BA in Political Science",
        stream: "Arts",
        durationYears: 3,
        fees: "₹20k - ₹50k per year",
        eligibilityCriteria: "12th Arts",
        futureScope: "Civil Services (IAS/IPS), Policy Analyst, Politician"
      },
      {
        courseName: "BA in Animation & VFX",
        stream: "Arts",
        durationYears: 3,
        fees: "₹1L - ₹3L per year",
        eligibilityCriteria: "12th Any Stream + Creative Portfolio",
        futureScope: "Animator, VFX Artist, Game Designer"
      },
      {
        courseName: "BSW (Social Work)",
        stream: "Arts",
        durationYears: 3,
        fees: "₹20k - ₹50k per year",
        eligibilityCriteria: "12th Any Stream",
        futureScope: "NGO Manager, Social Worker, Community Developer"
      },
    ];

    await courseRepo.save(courses);
    console.log("✅ Courses Created!");

    console.log("🚀 Database Seeded Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();