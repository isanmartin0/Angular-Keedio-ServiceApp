import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: '', redirectTo: '/hello', pathMatch: 'full' },
  {path: 'hello', component: HelloComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
