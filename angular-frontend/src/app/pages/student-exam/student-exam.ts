import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService, Question } from '../../services/question';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

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
    this.qService.getQuestions().subscribe({
      next: (data) => {
        // ✅ Shuffle the questions before assigning them
        this.questions = this.shuffleArray(data);
        this.cd.detectChanges();
        
        if (this.questions.length === 0) {
          alert("No questions found in Database!");
        }
      },
      error: (err) => console.error("❌ Error:", err)
    });
  }

  // 🎲 Fisher-Yates Shuffle Algorithm (Standard for randomization)
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

  // ✅ Function moved OUTSIDE of calculateResult
  retakeTest() {
    this.showResult = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers.clear(); // Clear previous answers
    this.questions = this.shuffleArray(this.questions); // 🔀 Re-shuffle for new attempt
  }
}