import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  task: Task = {
    key: '',
    title: '',
    description: '',
    duration: 0,
    createdAt: 0,
    finishedAt: 0
  };

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  onCreate() {
    const newTask = this.taskService.create(this.task);
    this.router.navigate(['/task', newTask.key ]);
  }

  ngOnInit() {
    this.task.duration = Number(this.route.snapshot.queryParamMap.get('totalDuration'));
  }

}
