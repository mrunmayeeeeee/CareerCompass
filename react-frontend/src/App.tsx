import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { initialQuestions, type Question } from './data/questions';

// Import your pages
import Home from './pages/Home';
import AptitudeTest from './pages/AptitudeTest';
import AptitudeTestforStudents from './pages/AptitudeTestforStudents';

function App() {
  // Shared state: This allows Admin changes to show up in the Student Exam instantly
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Portal (Manage Questions) */}
        <Route 
          path="/admin" 
          element={<AptitudeTest questions={questions} setQuestions={setQuestions} />} 
        />

        {/* Student Portal (Take Exam) */}
        <Route 
          path="/exam" 
          element={<AptitudeTestforStudents questions={questions} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;