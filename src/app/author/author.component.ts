import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title= "Author!"
  catImage1= "https://tse1.mm.bing.net/th?id=OIP.krXgDcts2hh2AT61oGCDrgHaE8&pid=Api&P=0&w=244&h=163"
  catImage2 = "https://tse3.mm.bing.net/th?id=OIP.lXn2MLYBWA_J-QBuVeGIMwHaEK&pid=Api&P=0&w=319&h=180"
  authors;
  constructor(services:SerService) { 
this.authors= services.getAuthors();
  }

  ngOnInit(): void {
  }

}
