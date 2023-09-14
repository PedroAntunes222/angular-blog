import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Array<any> = [''];
  newPost: any = [''];

  constructor() { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.newPost = dataFake.slice(0, 3);
    this.posts = dataFake.slice(3);
  }
}
