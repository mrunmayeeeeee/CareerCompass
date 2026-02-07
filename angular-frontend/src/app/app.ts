import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import your component (check the path is correct for your folder structure)
import { StudentExamComponent } from './pages/student-exam/student-exam';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add StudentExamComponent to this array
  imports: [RouterOutlet, StudentExamComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'CareerCompass';
}