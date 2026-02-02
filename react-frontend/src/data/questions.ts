export interface Question {
  id: number;
  category: "Science" | "Math" | "Arts";
  q: string;
  options: string[];
  correct: string;
}

export const initialQuestions: Question[] = [
    // SCIENCE
    { id: 1, category: "Science", q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"], correct: "Mitochondria" },
    { id: 2, category: "Science", q: "Which law states that for every action there is an equal and opposite reaction?", options: ["Newton's 1st", "Newton's 2nd", "Newton's 3rd", "Law of Gravity"], correct: "Newton's 3rd" },
    { id: 3, category: "Science", q: "What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Au", "Fe"], correct: "Au" },
    { id: 4, category: "Science", q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], correct: "Nitrogen" },
    { id: 5, category: "Science", q: "What is the speed of light approximately?", options: ["3x10^8 m/s", "2x10^5 m/s", "5x10^6 m/s", "1x10^9 m/s"], correct: "3x10^8 m/s" },

    // MATH / COMMERCE LOGIC
    { id: 6, category: "Math", q: "If a shirt costs $20 after a 20% discount, what was the original price?", options: ["$24", "$25", "$30", "$22"], correct: "$25" },
    { id: 7, category: "Math", q: "Solve for x: 2x + 7 = 15", options: ["3", "5", "4", "6"], correct: "4" },
    { id: 8, category: "Math", q: "Which number completes the sequence: 2, 6, 12, 20, ?", options: ["24", "28", "30", "32"], correct: "30" },
    { id: 9, category: "Math", q: "What is the square root of 225?", options: ["12", "13", "15", "25"], correct: "15" },
    { id: 10, category: "Math", q: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: "30" },

    // ARTS / HUMANITIES
    { id: 11, category: "Arts", q: "Who painted the 'Mona Lisa'?", options: ["Van Gogh", "Picasso", "Da Vinci", "Claude Monet"], correct: "Da Vinci" },
    { id: 12, category: "Arts", q: "Which Indian classical dance form originated in Kerala?", options: ["Kathak", "Kathakali", "Bharatanatyam", "Odissi"], correct: "Kathakali" },
    { id: 13, category: "Arts", q: "Who is known as the 'Father of History'?", options: ["Socrates", "Herodotus", "Aristotle", "Plato"], correct: "Herodotus" },
    { id: 14, category: "Arts", q: "The 'Statue of Liberty' was a gift to the USA from which country?", options: ["UK", "Germany", "France", "Italy"], correct: "France" },
    { id: 15, category: "Arts", q: "Which of these is a famous work by William Shakespeare?", options: ["The Iliad", "Hamlet", "War and Peace", "The Odyssey"], correct: "Hamlet" },
];