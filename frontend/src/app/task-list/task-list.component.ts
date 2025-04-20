import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from '../task-edit/task-edit.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  newTask = {
    title: '',
    detail: '',
    completed: false
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  resetnewTask(): void {
    this.newTask = {
      title: '',
      detail: '',
      completed: false
    };
  }

  ngOnInit(): void {
      console.log('TaskListComponent: 初期化');
      this.taskService.getTasks().subscribe(data => {
        console.log('データ取得:', data);
        this.loadTasks();

        this.taskService.onTaskListUpdate().subscribe(() => {
          this.loadTasks();
        })
      });
  }

  createNewTask(): void {
    this.taskService.createTask(this.newTask).subscribe((createdTask) =>{
      console.log(createdTask);
      alert('新しいタスクを作成しました');
      this.resetnewTask();
      this.taskService.notifyTaskListUpdate();
      this.router.navigate(['/tasks']);
    });
  }

}
