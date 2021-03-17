import { Component, OnInit } from '@angular/core';
import books from "../../assets/data.json";
import { Book } from '../../Book';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

 
export class LibrosComponent implements OnInit {

  
booksList : Book[]; 

  constructor() {
    this.booksList = books;  
    console.log(this.booksList)
    
   }

  ngOnInit() { 
  }

  deletebook(id) {
    delete this.booksList[id];
    this.ngOnInit();
  }

  reciveBook($event) {  
    this.booksList.push($event);
    this.ngOnInit();
  }  


   
}
