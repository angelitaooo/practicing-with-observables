import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { PostsService } from './posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { RouterModule, Routes } from "@angular/router";
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    HttpModule, 
    RouterModule, 
    ReactiveFormsModule
  ],
  declarations: [PostsListComponent, PostItemComponent, PostFormComponent],
  providers: [PostsService],
  exports: [PostsListComponent, PostItemComponent]
})
export class PostsModule {}
