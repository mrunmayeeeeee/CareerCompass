import { Component, OnInit } from '@angular/core';
import { QuestionService, Question } from '../../services/question';
import { CommonModule } from '@angular/common'; // Import this
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-student-exam',
  imports: [CommonModule, Header, Footer],
  templateUrl: './student-exam.html',
  styleUrls: ['./student-exam.css']
})
export class StudentExamComponent implements OnInit {
  questions: Question[] = [];
  userAnswers: { [key: number]: string } = {};
  score = 0;
  submitted = false;

  constructor(private qService: QuestionService) {}

  ngOnInit() {
    this.qService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  submitExam() {
    this.score = 0;
    this.questions.forEach(q => {
      if (this.userAnswers[q.id!] === q.correctOption) {
        this.score++;
      }
    });
    this.submitted = true;
  }
}