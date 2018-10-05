import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { MainTrackerComponent } from './components/main-tracker/main-tracker.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TaskService} from './services/task.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    MainTrackerComponent,
    TrackerComponent,
    SecondsToTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
