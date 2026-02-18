import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class CareerExplorerComponent implements OnInit {
  stream: string = '';
  courses: any[] = [];
  loading = true;
  
  // New Comparison Logic
  selectedCourses: any[] = [];
  showCompareModal = false;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.stream = this.route.snapshot.paramMap.get('stream') || '';
    if (this.stream) this.fetchCourses();
    else this.loading = false;
  }

  fetchCourses() {
    this.loading = true;
    this.http.get<any[]>(`http://localhost:5000/api/courses/stream/${this.stream}`)
      .subscribe({
        next: (data) => {
          this.courses = data;
          this.loading = false;
          this.cd.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
          this.cd.detectChanges();
        }
      });
  }
  
  // ✅ Toggle Selection
  toggleCompare(course: any) {
    const index = this.selectedCourses.findIndex(c => c.id === course.id);
    
    if (index > -1) {
      // Remove if already selected
      this.selectedCourses.splice(index, 1);
    } else {
      // Add if less than 3
      if (this.selectedCourses.length < 3) {
        this.selectedCourses.push(course);
      } else {
        alert("You can only compare up to 3 courses at a time!");
      }
    }
  }

  // Helper to check if a card is selected
  isSelected(course: any): boolean {
    return this.selectedCourses.some(c => c.id === course.id);
  }

  openComparison() {
    this.showCompareModal = true;
  }

  closeComparison() {
    this.showCompareModal = false;
  }

  goBack() {
    this.router.navigate(['/exam']);
  }
}