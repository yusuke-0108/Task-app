import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
    {
        path:"tasks",
        component: TaskListComponent,
        children: [
            { path: ':id', component: TaskDetailComponent },
        ],
    },
    { path: '', redirectTo: 'tasks', pathMatch: 'full'},
];
