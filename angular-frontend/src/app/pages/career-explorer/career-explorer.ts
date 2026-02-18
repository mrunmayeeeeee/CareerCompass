import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private router: Router,
    private cd: ChangeDetectorRef // <--- Inject it here
  ) { }

  ngOnInit() {
    // 1. Get the stream name from URL (e.g. "Science")
    this.stream = this.route.snapshot.paramMap.get('stream') || '';

    // 2. Fetch data
    if (this.stream) {
      this.fetchCourses();
    } else {
      this.loading = false; // No stream? Stop loading.
    }
  }

  fetchCourses() {
    this.loading = true; // Ensure loading starts

    this.http.get<any[]>(`http://localhost:5000/api/courses/stream/${this.stream}`)
      .subscribe({
        next: (data) => {
          console.log("✅ Frontend received courses:", data); // Check console to confirm
          this.courses = data;
          this.loading = false; // Stop loading
          this.cd.detectChanges(); // <--- FORCE SCREEN UPDATE
        },
        error: (err) => {
          console.error("❌ Error loading courses:", err);
          this.loading = false; // Stop loading even on error
          this.cd.detectChanges(); // <--- FORCE SCREEN UPDATE
        }
      });
  }

  goBack() {
    this.router.navigate(['/exam']);
  }
}