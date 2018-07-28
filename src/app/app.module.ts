import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Route } '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';

const routes: Route = [
  {path: '', component: HelloComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
