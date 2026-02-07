import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  id?: number;
  category: string;
  questionText: string;  
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
}

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private apiUrl = 'http://localhost:5000/api/quiz';

  constructor(private http: HttpClient) {}

  // Fetch from PostgreSQL
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  // Save to PostgreSQL
  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  // Delete from PostgreSQL
  deleteQuestion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}