import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { RouterModule } from '@angular/router';
import { toolsRoutes } from './tools-routing.module';

@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toolsRoutes),
  ]
})
export class ToolsModule { }
