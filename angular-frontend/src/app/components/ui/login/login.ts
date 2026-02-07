import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        if (res.role === 'admin') this.router.navigate(['/admin']);
        else if (res.role === 'student') this.router.navigate(['/exam']); // or /home
        else this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}