import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/:id', component: TaskDetailComponent }
];
