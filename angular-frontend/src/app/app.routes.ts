// import { Routes } from '@angular/router';
// import { LoginComponent } from './components/ui/login/login.js';
// import { RegisterComponent } from './components/ui/register/register.js';
// import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.js';
// import { StudentExamComponent } from './pages/student-exam/student-exam.js';
// import { authGuard } from './guard/auth-guard.js';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
  
//   // Protected Admin Route
//   { 
//     path: 'admin', 
//     component: AdminDashboardComponent, 
//     canActivate: [authGuard], 
//     data: { roles: ['admin'] } 
//   },
  
//   // Protected Exam Route
//   { 
//     path: 'exam', 
//     component: StudentExamComponent,
//     canActivate: [authGuard],
//     data: { roles: ['student', 'admin'] }
//   },

//   { path: '', redirectTo: 'login', pathMatch: 'full' }
// ];/

import { Routes } from '@angular/router';
import { LoginComponent } from './components/ui/login/login.js';
import { RegisterComponent } from './components/ui/register/register.js';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.js';
import { StudentExamComponent } from './pages/student-exam/student-exam.js';
import { Home } from './pages/home/home.js'; // <--- Import Home
import { authGuard } from './guard/auth-guard.js';
import { CareerExplorerComponent } from './pages/career-explorer/career-explorer.js';

export const routes: Routes = [
  // 1. Default Route now shows Home Page (which will contain Login)
  { path: '', component: Home }, 

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'career-path/:stream', component: CareerExplorerComponent, canActivate: [authGuard] },
  // Protected Admin Route
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['admin'] }
  },

  // Protected Exam Route
  {
    path: 'exam',
    component: StudentExamComponent,
    canActivate: [authGuard],
    data: { roles: ['student', 'admin'] }
  }
];