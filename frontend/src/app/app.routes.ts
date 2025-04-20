import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

export const routes: Routes = [
    {
        path:"tasks",
        component: TaskListComponent,
        children: [
            { path: ':id', component: TaskDetailComponent },
            { path: ':id/edit', component: TaskEditComponent },
        ],
    },
    { path: '', redirectTo: 'tasks', pathMatch: 'full'},
];
