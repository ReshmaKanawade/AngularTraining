import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  isLiked : boolean = true;
  likesCount : number = 10
  constructor() { }

  onClick(){
this. isLiked= !this.isLiked;

this.likesCount +=   this.isLiked == true  ? 1 : -1;
  }

  ngOnInit(): void {
  }

}
