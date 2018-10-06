import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {MainTrackerComponent} from './components/main-tracker/main-tracker.component';
import {TaskComponent} from './components/task/task.component';
import {TasksComponent} from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'task/:id',
    component: TaskComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'new-task',
    component: NewTaskComponent
  },
  {
    path: 'new-task/:duration',
    component: NewTaskComponent
  },
  {
    path: '',
    component: MainTrackerComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
