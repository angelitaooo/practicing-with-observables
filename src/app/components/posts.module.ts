import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { PostsService } from './posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [CommonModule, HttpModule, RouterModule],
  declarations: [PostsListComponent, PostItemComponent],
  providers: [PostsService],
  exports: [PostsListComponent, PostItemComponent]
})
export class PostsModule {}
