import { Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterLink,
            TaskListComponent,
            TaskDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'task app';
}
