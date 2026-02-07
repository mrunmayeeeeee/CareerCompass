import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- REQUIRED for *ngIf
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // <--- REQUIRED for Forms
import { UserService } from '../../services/user-services';
import { QuestionService, Question } from '../../services/question';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <--- Add modules here!
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  // 1. Define the variables your HTML is looking for
  activeTab: 'users' | 'quiz' = 'users'; 
  users: any[] = [];
  questions: Question[] = [];
  questionForm: FormGroup;
  showForm = false;

  constructor(
    private userService: UserService,
    private qService: QuestionService,
    private fb: FormBuilder,
    public auth: AuthService // Public is correct!
  ) {
    // Initialize the form
    this.questionForm = this.fb.group({
      category: ['Science', Validators.required],
      questionText: ['', Validators.required],
      optionA: ['', Validators.required],
      optionB: ['', Validators.required],
      optionC: ['', Validators.required],
      optionD: ['', Validators.required],
      correctOption: ['A', Validators.required]
    });
  }

  ngOnInit() {
    // Load data when page opens
    this.loadUsers();
    this.loadQuestions();
  }

  // --- USER LOGIC ---
  loadUsers() {
    // Only load users if Admin (otherwise backend blocks it)
    if (this.auth.isAdmin()) {
      this.userService.getAllUsers().subscribe({
        next: (data) => this.users = data,
        error: (err) => console.error('Error loading users', err)
      });
    }
  }

  deleteUser(id: number) {
    if(confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }

  // --- QUIZ LOGIC ---
  loadQuestions() {
    this.qService.getQuestions().subscribe(data => this.questions = data);
  }

  addQuestion() {
    if (this.questionForm.valid) {
      this.qService.addQuestion(this.questionForm.value).subscribe(() => {
        this.loadQuestions();
        this.showForm = false; // Hide form after save
        this.questionForm.reset({ category: 'Science', correctOption: 'A' });
      });
    }
  }

  deleteQuestion(id: number) {
    if(confirm('Delete this question?')) {
      this.qService.deleteQuestion(id).subscribe(() => this.loadQuestions());
    }
  }
}