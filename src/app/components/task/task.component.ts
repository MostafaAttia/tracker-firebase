import {Component, OnChanges, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnChanges {
  task: Task = {
    title: '',
    description: '',
    duration: 0,
    createdAt: 0,
    finishedAt: 0
  };
  id: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.taskService.get(this.id).valueChanges().pipe(take(1)).subscribe(task => {
        this.task = task;
        this.task.key = this.id;
      } );
    }
  }

  ngOnChanges() {
  }

}
