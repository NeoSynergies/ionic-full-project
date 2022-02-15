import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../../interfaces/post-data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: PostData;
  constructor() { }
}
