import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Career from './src/models/Career.js';
import College from './src/models/College.js';
import Course from './src/models/Course.js';
import QuizQuestion from './src/models/Quiz.js';

dotenv.config();

const MONGO_URI = 'mongodb://127.0.0.1:27017/CareerCompass';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to CareerCompass Database');

    // Clear existing data
    await Career.deleteMany({});
    await College.deleteMany({});
    await Course.deleteMany({});
    await QuizQuestion.deleteMany({});

    // Seed Careers
    const careers = await Career.insertMany([
      {
        careerTitle: 'Software Engineer',
        jobDescription: 'Develop and maintain software applications',
        averageSalary: '$120,000',
        requiredSkills: ['JavaScript', 'Python', 'Problem Solving'],
        roadmapSteps: [
          { stepTitle: 'Learn Programming Basics', description: 'Master fundamentals of programming' },
          { stepTitle: 'Choose a Language', description: 'Specialize in JavaScript, Python, or Java' },
          { stepTitle: 'Build Projects', description: 'Create portfolio projects' },
          { stepTitle: 'Get Experience', description: 'Internships and junior positions' }
        ],
        learningResources: [
          { title: 'freeCodeCamp', url: 'https://freecodecamp.org', isFree: true },
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', isFree: true }
        ]
      },
      {
        careerTitle: 'Data Scientist',
        jobDescription: 'Analyze data to extract insights and build models',
        averageSalary: '$130,000',
        requiredSkills: ['Python', 'Statistics', 'Machine Learning'],
        roadmapSteps: [
          { stepTitle: 'Learn Statistics', description: 'Master statistical concepts' },
          { stepTitle: 'Learn Python', description: 'Programming for data analysis' },
          { stepTitle: 'Study ML Algorithms', description: 'Understand machine learning' },
          { stepTitle: 'Build Models', description: 'Practice with real datasets' }
        ],
        learningResources: [
          { title: 'Coursera ML Course', url: 'https://coursera.org/learn/machine-learning', isFree: true },
          { title: 'Kaggle Datasets', url: 'https://kaggle.com/datasets', isFree: true }
        ]
      }
    ]);

    // Seed Courses
    const courses = await Course.insertMany([
      {
        courseName: 'Computer Science Engineering',
        description: 'Comprehensive study of computer systems and software development',
        durationYears: 4,
        fees: '$50,000',
        eligibilityCriteria: '12th grade with Mathematics',
        stream: 'Science',
        futureScope: 'High demand in tech industry'
      },
      {
        courseName: 'Bachelor of Commerce',
        description: 'Study of business, finance, and economics',
        durationYears: 3,
        fees: '$30,000',
        eligibilityCriteria: '12th grade',
        stream: 'Commerce',
        futureScope: 'Opportunities in finance and business'
      },
      {
        courseName: 'Bachelor of Arts in Psychology',
        description: 'Study of human behavior and mental processes',
        durationYears: 3,
        fees: '$25,000',
        eligibilityCriteria: '12th grade',
        stream: 'Arts',
        futureScope: 'Careers in counseling and research'
      }
    ]);

    // Seed Colleges
    await College.insertMany([
      {
        collegeName: 'Tech University',
        location: 'San Francisco, CA',
        websiteUrl: 'https://techuniversity.edu',
        description: 'Leading technology-focused university',
        offeredCourses: [
          { courseId: courses[0]._id, cutoff: '85%' }
        ]
      },
      {
        collegeName: 'Business College',
        location: 'New York, NY',
        websiteUrl: 'https://businesscollege.edu',
        description: 'Premier business education institution',
        offeredCourses: [
          { courseId: courses[1]._id, cutoff: '80%' }
        ]
      }
    ]);

    // Seed Quiz Questions
    await QuizQuestion.insertMany([
      {
        questionText: 'What type of work environment do you prefer?',
        options: [
          { optionText: 'Collaborative team setting', associatedCareerId: careers[0] },
          { optionText: 'Independent research work', associatedCareerId: careers[1] }
        ]
      },
      {
        questionText: 'Which subject interests you more?',
        options: [
          { optionText: 'Mathematics and Logic', associatedCareerId: careers[0] },
          { optionText: 'Statistics and Analysis', associatedCareerId: careers[1] }
        ]
      }
    ]);

    console.log('✅ Database seeded successfully!');
    console.log(`Created ${careers.length} careers, ${courses.length} courses`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📪 Database connection closed');
  }
}

seedDatabase();