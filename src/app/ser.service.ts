import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {
  authors : string[] = ["authors1","authors2","authors3" ]
  
  getAuthors(){
    
    return this.authors;
  }
  
  constructor() { }
}
