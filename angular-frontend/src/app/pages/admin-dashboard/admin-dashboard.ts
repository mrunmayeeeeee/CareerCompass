import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { UserService } from '../../services/user-services';
import { QuestionService } from '../../services/question';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.html', 
  styleUrls: ['./admin-dashboard.css']   
})
export class AdminDashboardComponent implements OnInit {
  // State Variables
  activeTab: 'users' | 'quiz' = 'users';
  users: any[] = [];
  questions: any[] = [];
  questionForm: FormGroup;
  showForm = false;

  constructor(
    private userService: UserService,
    private qService: QuestionService,
    private fb: FormBuilder,
    public auth: AuthService
  ) {
    // Initialize the Add Question Form
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
    this.loadUsers();
    this.loadQuestions();
  }

  // ==========================================
  // 1. MANAGE USERS (CRUD)
  // ==========================================

  // READ: Fetch all users
  loadUsers() {
    // Only Admin can see users
    if (this.auth.isAdmin()) {
      this.userService.getAllUsers().subscribe({
        next: (data) => this.users = data,
        error: (err) => console.error('Error fetching users:', err)
      });
    }
  }

  // DELETE: Remove a user
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          alert('User deleted successfully');
          this.loadUsers(); // Refresh the list
        },
        error: (err) => alert('Failed to delete user')
      });
    }
  }

  // ==========================================
  // 2. MANAGE QUIZ (CRUD)
  // ==========================================

  // READ: Fetch all questions
  loadQuestions() {
    this.qService.getQuestions().subscribe({
      next: (data) => this.questions = data,
      error: (err) => console.error('Error fetching questions:', err)
    });
  }

  // CREATE: Add a new question
  addQuestion() {
    if (this.questionForm.valid) {
      this.qService.addQuestion(this.questionForm.value).subscribe({
        next: () => {
          alert('Question added!');
          this.loadQuestions(); // Refresh list
          this.showForm = false; // Hide form
          this.questionForm.reset({ category: 'Science', correctOption: 'A' }); // Reset form
        },
        error: (err) => alert('Failed to add question')
      });
    } else {
      alert('Please fill all fields');
    }
  }

  // DELETE: Remove a question
  deleteQuestion(id: number) {
    if (confirm('Delete this question permanently?')) {
      this.qService.deleteQuestion(id).subscribe({
        next: () => {
          this.loadQuestions(); // Refresh list
        },
        error: (err) => alert('Failed to delete question')
      });
    }
  }
}