import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';
import books from "../../assets/data.json";

@Component({
  selector: 'app-anadir-nuevo',
  templateUrl: './anadir-nuevo.component.html',
  styleUrls: ['./anadir-nuevo.component.css']
})
export class AnadirNuevoComponent implements OnInit {
   
  private book ;
  booksList : Book[]; 
  private titulo: string;
  private autor: string;
  private descripcion: string;

@Output() bookEvent = new EventEmitter<Book>();

  constructor() { 
    this.booksList = books;
   }

  ngOnInit() { 
    
  }

  sendBook() { 

    this.book = new Book();
    
    this.book.id = this.booksList.length + 1;
    this.book.titulo = this.titulo;
    this.book.autor = this.autor;
    this.book.descripcion = this.descripcion;
    console.log(this.book)
    
    this.bookEvent.emit(this.book);
  }

}
