import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks;
  filteredTasks;
  subscription: Subscription;
  page;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.subscription = this.taskService.getAll()
      .subscribe(tasks => {
        this.tasks = this.filteredTasks = tasks;
      });
  }

  filterTasks(query: string) {
    this.filteredTasks = (query) ?
      this.tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
      : this.tasks;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
