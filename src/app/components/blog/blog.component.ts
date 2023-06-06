import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articlesTab:any=[
  {image:"assets/img/blog-1.jpg", title:"Title 1", date1:"date 1", description:"Description 1"},
  {image:"assets/img/blog-2.jpg", title:"Title 2", date1:"date 2", description:"Description 2"},
  {image:"assets/img/blog-3.jpg", title:"Title 3", date1:"date 3", description:"Description 3"}
]
  constructor() { }

  ngOnInit() {
  }

}
