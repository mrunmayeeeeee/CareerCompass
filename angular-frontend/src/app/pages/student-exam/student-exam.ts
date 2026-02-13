import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService, Question } from '../../services/question';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-student-exam',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-exam.html',
  styleUrls: ['./student-exam.css']
})
export class StudentExamComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswers: Map<number, string> = new Map(); // Store ID -> Selected Option

  showResult = false;
  score = 0;
  recommendedStream = '';

  // Breakdown of scores per category
  categoryScores: any = { 'Science': 0, 'Commerce': 0, 'Arts': 0 };

  constructor(
    private qService: QuestionService,
    private router: Router,
    public auth: AuthService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    console.log("⚡ Attempting to load questions...");

    this.qService.getQuestions().subscribe({
      next: (data) => {
        console.log("✅ Data received:", data);
        this.questions = data;
        this.cd.detectChanges();
        if (this.questions.length === 0) {
          alert("No questions found in Database! Please ask Admin to add some.");
        }
      },
      error: (err) => {
        console.error("❌ Error loading questions:", err);
        alert("Failed to load questions! Check console for details.");
      }
    });
  }

  selectOption(qId: number, option: string) {
    this.userAnswers.set(qId, option);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitExam() {
    this.calculateResult();
    this.showResult = true;
  }

  calculateResult() {
    this.score = 0;
    this.categoryScores = { 'Science': 0, 'Commerce': 0, 'Arts': 0 };

    this.questions.forEach(q => {
      const selected = this.userAnswers.get(q.id!);

      if (selected === q.correctOption) {
        this.score++;
        // Add point to the specific category
        if (this.categoryScores[q.category] !== undefined) {
          this.categoryScores[q.category]++;
        }
      }
    });

    // Simple Recommendation Logic: Highest Score Category
    const highest = Object.keys(this.categoryScores).reduce((a, b) =>
      this.categoryScores[a] > this.categoryScores[b] ? a : b
    );

    this.recommendedStream = highest;
  }
}