import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { PostsService } from './posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [PostsListComponent],
  providers: [PostsService],
  exports: [PostsListComponent]
})
export class PostsModule {}
