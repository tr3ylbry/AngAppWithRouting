import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'tools', loadChildren: './tools/tools.module#ToolsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
