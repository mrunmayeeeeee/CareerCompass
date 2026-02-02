import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import type { Question } from "../data/questions";

interface AdminProps {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const AptitudeTest = ({ questions, setQuestions }: AdminProps) => {
  // Local state for the "Add New Question" form only
  const [newQ, setNewQ] = useState({
    q: "",
    category: "Science" as "Science" | "Math" | "Arts",
    options: ["", "", "", ""],
    correct: "",
  });

  const addQuestion = () => {
    if (newQ.q === "" || newQ.correct === "") {
      alert("Please fill in the question and the correct answer.");
      return;
    }
    
    // Create new question object
    const questionToAdd: Question = {
      ...newQ,
      id: Date.now(),
    };

    // Update the SHARED state in App.tsx
    setQuestions([...questions, questionToAdd]);

    // Reset local form
    setNewQ({ q: "", category: "Science", options: ["", "", "", ""], correct: "" });
  };

  const deleteQuestion = (id: number) => {
    // Update the SHARED state in App.tsx
    setQuestions(questions.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "48px 24px", maxWidth: "1024px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#00529b", marginBottom: "8px" }}>Admin: Question Bank</h1>
        <p style={{ marginBottom: "32px", color: "#4b5563" }}>Add or remove questions. Changes will reflect instantly in the Student Portal.</p>

        {/* CREATE SECTION */}
        <section style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Add New Question</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input 
              placeholder="Enter Question Text" 
              value={newQ.q} 
              onChange={(e) => setNewQ({...newQ, q: e.target.value})}
              style={{ padding: "10px", border: "1px solid #d1d5db", borderRadius: "6px" }}
            />
            
            <div style={{ display: "flex", gap: "10px" }}>
              <select 
                value={newQ.category} 
                onChange={(e) => setNewQ({...newQ, category: e.target.value as any})}
                style={{ flex: 1, padding: "10px", border: "1px solid #d1d5db", borderRadius: "6px" }}
              >
                <option value="Science">Science</option>
                <option value="Math">Math/Commerce</option>
                <option value="Arts">Arts</option>
              </select>

              <input 
                placeholder="Correct Answer (must match one option exactly)" 
                value={newQ.correct} 
                onChange={(e) => setNewQ({...newQ, correct: e.target.value})}
                style={{ flex: 2, padding: "10px", border: "1px solid #d1d5db", borderRadius: "6px" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {newQ.options.map((opt, i) => (
                <input 
                  key={i}
                  placeholder={`Option ${i+1}`}
                  value={opt}
                  onChange={(e) => {
                    const updatedOpts = [...newQ.options];
                    updatedOpts[i] = e.target.value;
                    setNewQ({...newQ, options: updatedOpts});
                  }}
                  style={{ padding: "8px", border: "1px solid #d1d5db", borderRadius: "6px" }}
                />
              ))}
            </div>
            
            <button 
              onClick={addQuestion}
              style={{ backgroundColor: "#00529b", color: "white", padding: "12px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", marginTop: "10px", border: "none" }}
            >
              Add to Question Bank
            </button>
          </div>
        </section>

        {/* LIST & DELETE SECTION */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Current Questions ({questions.length})</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {questions.map((item) => (
              <div key={item.id} style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", borderLeft: `6px solid ${item.category === 'Science' ? '#10b981' : item.category === 'Math' ? '#3b82f6' : '#f59e0b'}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", color: "#6b7280" }}>{item.category}</span>
                    <p style={{ fontSize: "18px", fontWeight: "600", margin: "4px 0 12px 0" }}>{item.q}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {item.options.map((opt, idx) => (
                        <div key={idx} style={{ 
                          fontSize: "14px", 
                          color: opt === item.correct ? "#059669" : "#374151", 
                          backgroundColor: opt === item.correct ? "#ecfdf5" : "#f9fafb", 
                          padding: "6px 12px", 
                          borderRadius: "4px",
                          border: opt === item.correct ? "1px solid #10b981" : "1px solid transparent"
                        }}>
                          {idx + 1}. {opt} {opt === item.correct && "✔"}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteQuestion(item.id)}
                    style={{ color: "#ef4444", fontWeight: "bold", cursor: "pointer", background: "none", border: "none", padding: "10px" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AptitudeTest;