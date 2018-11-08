import { Component, Output, EventEmitter } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Output() publish = new EventEmitter();
  title = 'Book Search';
  bookList;

  constructor(
    private bookService: BookService
  ) { }

  onInit(){
  }

  onSearch(bookName) {
    this.bookService.get(bookName.get('name').value)
    .subscribe(bookList => {
    this.bookList = bookList.title;
    console.log(this.bookList);
    });
  }
}
