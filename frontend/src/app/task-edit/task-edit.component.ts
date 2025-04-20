import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})

export class TaskEditComponent {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    console.log('TaskEditComponent 初期化');
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.taskService.getTask(id).subscribe(data => {
          this.task = data;
        });
      }
    });
  }

  updateTask(): void {
    console.log("編集開始");
    if(!this.task) return;

    this.taskService.editTask(this.task).subscribe((updatedTask) => {
      console.log(updatedTask);
      alert('タスクの編集を行いました');
      this.taskService.notifyTaskListUpdate();
      this.router.navigate([`/tasks/${this.task?.id}`]);
    });
  }
  
}
