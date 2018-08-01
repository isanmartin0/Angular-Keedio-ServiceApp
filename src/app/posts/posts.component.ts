import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.dataService.getData().subscribe( data => {
      this.posts = data;
    });
  }

}
