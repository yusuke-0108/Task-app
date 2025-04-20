import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';

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

  ngOnInit(): void {
      console.log('TaskListComponent: 初期化');
      this.taskService.getTasks().subscribe(data => {
        console.log('データ取得:', data);
        this.tasks = data});
  }

  createNewTask(): void {
    this.taskService.createTask(this.newTask).subscribe((createdTask) =>{
      console.log(createdTask);
      alert('新しいタスクを作成しました');
      this.router.navigate(['/tasks', createdTask.id]);
    });
  }

}
