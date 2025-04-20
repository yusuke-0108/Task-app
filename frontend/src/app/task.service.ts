import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  detail: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';
  private taskListUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  // Obervableはいつか来るデータのために、処理を登録しておく仕組み
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}${id}/`)
  }

  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  editTask(task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}${task.id}/`, task);
  }
  
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

  notifyTaskListUpdate() {
    this.taskListUpdated.next();
  }

  onTaskListUpdate(): Observable<void> {
    return this.taskListUpdated.asObservable();
  }
}
