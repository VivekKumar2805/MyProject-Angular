import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {  

  constructor() { }
  users(){
    return[
      {name : 'vivek' , age: '24' , email: 'vivek@gmail.com'},
      {name : 'shyam' , age: '40' , email: 'shyaam@gmail.com'},
      {name : 'raju' , age: '38' , email: 'raju@gmail.com'},
      {name : 'baburao' , age: '45' , email: 'baburao@gmail.com'}
    ]
  }
}
