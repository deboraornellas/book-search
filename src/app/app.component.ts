import { Component } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Search';

  constructor(
    private bookService: BookService
  ) { }

  onSearch(book) {
    this.bookService.get(book)
      .subscribe(booklist => {
        console.log(booklist);
      });
  }
}
