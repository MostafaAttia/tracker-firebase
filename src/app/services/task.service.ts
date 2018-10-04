import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Task} from '../models/task';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFireDatabase) { }

  create(task: Task) {
    task.createdAt = Date.now();
    return this.db.list('/tasks').push(task);
  }

  getAll(): Observable<Task[]> {
    return this.db.list('/tasks').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  get(taskId) {
    return this.db.object('/tasks/' + taskId);
  }

  updateTask(task: Task, duration?: number) {
    let task$ = this.get(task.key);

    task$.valueChanges().pipe(
      take(1)
    ).subscribe(item => {
      task$.update({
        title: task.title,
        description: task.description,
        duration: duration ? duration : task.duration,
        createdAt: task.createdAt,
        finishedAt: Date.now()
      });

    });
  }

}
