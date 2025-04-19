import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
      console.log('TaskListComponent: 初期化');
      this.taskService.getTasks().subscribe(data => {
        console.log('データ取得:', data);
        this.tasks = data});
  }
}
