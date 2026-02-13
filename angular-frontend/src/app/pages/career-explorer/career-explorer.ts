import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-career-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-explorer.html',
  styleUrls: ['./career-explorer.css']
})
export class CareerExplorer implements OnInit {
  stream: string = '';
  courses: any[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // 1. Get the stream name from URL (e.g. "Science")
    this.stream = this.route.snapshot.paramMap.get('stream') || '';

    // 2. Fetch data
    if (this.stream) {
      this.fetchCourses();
    }
  }

  fetchCourses() {
    this.http.get<any[]>(`http://localhost:5000/api/courses/stream/${this.stream}`)
      .subscribe({
        next: (data) => {
          this.courses = data;
          this.loading = false;
        },
        error: (err) => console.error(err)
      });
  }
  
  goBack() {
    this.router.navigate(['/exam']);
  }
}