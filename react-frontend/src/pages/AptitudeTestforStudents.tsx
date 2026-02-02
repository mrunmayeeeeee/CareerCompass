import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import type { Question } from "../data/questions";

interface StudentProps {
  questions: Question[];
}

const AptitudeTestforStudents = ({ questions }: StudentProps) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId: number, selectedOption: string) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const calculateResults = () => {
    let score = 0;
    let categoryCounts: Record<string, number> = { Science: 0, Math: 0, Arts: 0 };

    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        score++;
        categoryCounts[q.category]++;
      }
    });

    return { score, categoryCounts };
  };

  const results = calculateResults();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <Header />
      <main style={{ flexGrow: 1, padding: "40px 20px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ color: "#00529b", fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>Career Aptitude Exam</h1>
        <p style={{ marginBottom: "30px", color: "#6b7280" }}>Answer the questions below to discover your ideal career path.</p>
        
        {!submitted ? (
          <div>
            {questions.length > 0 ? (
              <>
                {questions.map((q, index) => (
                  <div key={q.id} style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", marginBottom: "20px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", border: "1px solid #e5e7eb" }}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                      <span style={{ backgroundColor: "#dbeafe", color: "#1e40af", padding: "2px 8px", borderRadius: "4px", fontSize: "14px", fontWeight: "bold", height: "fit-content" }}>
                        Q{index + 1}
                      </span>
                      <p style={{ fontWeight: "600", fontSize: "18px", color: "#111827" }}>{q.q}</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {q.options.map((opt) => (
                        <label 
                          key={opt} 
                          style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            gap: "12px", 
                            padding: "12px 16px", 
                            border: answers[q.id] === opt ? "2px solid #00529b" : "1px solid #e5e7eb", 
                            borderRadius: "8px", 
                            cursor: "pointer",
                            backgroundColor: answers[q.id] === opt ? "#eff6ff" : "white",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <input 
                            type="radio" 
                            name={`question-${q.id}`} 
                            value={opt} 
                            checked={answers[q.id] === opt}
                            onChange={() => handleOptionChange(q.id, opt)}
                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                          />
                          <span style={{ fontSize: "16px", color: "#374151" }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    if (Object.keys(answers).length < questions.length) {
                      if (!window.confirm("You haven't answered all questions. Submit anyway?")) return;
                    }
                    setSubmitted(true);
                  }}
                  style={{ width: "100%", backgroundColor: "#00529b", color: "white", padding: "16px", borderRadius: "8px", fontWeight: "bold", fontSize: "18px", cursor: "pointer", border: "none", marginTop: "10px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
                >
                  Submit Final Assessment
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", backgroundColor: "white", borderRadius: "12px" }}>
                <p>No questions available. Please ask an Admin to add questions to the bank.</p>
              </div>
            )}
          </div>
        ) : (
          <div style={{ textAlign: "center", backgroundColor: "white", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontSize: "50px" }}>🎯</span>
              <h2 style={{ fontSize: "32px", color: "#111827", marginTop: "10px" }}>Assessment Complete</h2>
            </div>
            
            <p style={{ fontSize: "22px", color: "#4b5563", marginBottom: "30px" }}>
              You scored <span style={{ fontWeight: "bold", color: "#00529b" }}>{results.score}</span> out of <span style={{ fontWeight: "bold" }}>{questions.length}</span>
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "40px" }}>
              <div style={{ padding: "20px", backgroundColor: "#ecfdf5", borderRadius: "12px", border: "1px solid #10b981" }}>
                <h4 style={{ color: "#065f46", marginBottom: "5px" }}>Science</h4>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#047857" }}>{results.categoryCounts.Science}</p>
              </div>
              <div style={{ padding: "20px", backgroundColor: "#eff6ff", borderRadius: "12px", border: "1px solid #3b82f6" }}>
                <h4 style={{ color: "#1e40af", marginBottom: "5px" }}>Math/Comm</h4>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1d4ed8" }}>{results.categoryCounts.Math}</p>
              </div>
              <div style={{ padding: "20px", backgroundColor: "#fffbeb", borderRadius: "12px", border: "1px solid #f59e0b" }}>
                <h4 style={{ color: "#92400e", marginBottom: "5px" }}>Arts</h4>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#b45309" }}>{results.categoryCounts.Arts}</p>
              </div>
            </div>

            <div style={{ padding: "20px", backgroundColor: "#f8fafc", borderRadius: "12px", textAlign: "left", marginBottom: "30px" }}>
               <h3 style={{ fontWeight: "bold", color: "#00529b", marginBottom: "10px" }}>Compass Suggestion:</h3>
               <p style={{ color: "#334155" }}>
                 Based on your performance, you show a strong affinity for 
                 <strong> {results.categoryCounts.Science >= results.categoryCounts.Math && results.categoryCounts.Science >= results.categoryCounts.Arts ? "Science" : 
                          results.categoryCounts.Math >= results.categoryCounts.Arts ? "Commerce/Math" : "Arts & Humanities"} </strong> 
                 streams.
               </p>
            </div>

            <button 
              onClick={() => window.location.reload()} 
              style={{ color: "#64748b", background: "none", border: "1px solid #cbd5e1", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}
            >
              Retake Assessment
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AptitudeTestforStudents;