import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { PostsModule } from './components/posts.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';


const routes: Routes = [{ path: "posts-list", component: PostsListComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PostsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
