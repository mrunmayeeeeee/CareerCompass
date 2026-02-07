import { Routes } from '@angular/router';
import { LoginComponent } from './components/ui/login/login.js';
import { RegisterComponent } from './components/ui/register/register.js';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard.js';
import { StudentExamComponent } from './pages/student-exam/student-exam.js';
import { authGuard } from './guard/auth-guard.js';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Protected Admin Route
  { 
    path: 'admin', 
    component: AdminDashboard, 
    canActivate: [authGuard], 
    data: { roles: ['admin'] } 
  },
  
  // Protected Exam Route
  { 
    path: 'exam', 
    component: StudentExamComponent,
    canActivate: [authGuard],
    data: { roles: ['student', 'admin'] }
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];