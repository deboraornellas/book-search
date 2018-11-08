import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-search-page',
  templateUrl: './book-search-page.component.html',
  styleUrls: ['./book-search-page.component.css']
})
export class BookSearchPageComponent implements OnInit {
  bookList;
  title = 'Book Search';

  constructor(private bookService: BookService) {}

  ngOnInit() {
  }

  onSearch(bookName) {
    this.bookService.get(bookName.get('name').value)
    .subscribe(bookList => {
      this.bookList = bookList.title;
      console.log(this.bookList);
    });
  }

}
