import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';
import { title } from 'process';
import { parseArgs } from 'util';
// import { Router } from 'express';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})

export class TaskDetailComponent {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.taskService.getTask(id).subscribe(data => {
          this.task = data;
        });
      }
    });
  }

  deleteTask(): void {
    if(!this.task) return;
    
    this.taskService.deleteTask(this.task.id).subscribe(() => {
      alert('削除しました');
      this.router.navigate(['/tasks']);
    });
  }
}
