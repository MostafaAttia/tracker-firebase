import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Task} from '../models/task';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFireDatabase) { }

  create(task: Task) {
    return this.db.list('/tasks').push(task);
  }

  getAll() {
    return this.db.list('/tasks').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  get(taskId):  Observable<any> {
    return this.db.object('/tasks/' + taskId).snapshotChanges().pipe(
      map(changes => {
        const key = changes.payload.key;
        return { key, ...changes.payload.val() };
      })
    );
  }

  update(task: Task) {
    const task$ = this.db.object('/tasks/' + task.key);
    delete task.key;
    task$.update(task);
  }

  delete(taskId) {
    return this.db.object('/tasks/' + taskId).remove();
  }

}
