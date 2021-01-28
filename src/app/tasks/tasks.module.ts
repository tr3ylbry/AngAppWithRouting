import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { tasksRoutes } from './tasks-routing.module';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksRoutes),
  ]
})
export class TasksModule { }
