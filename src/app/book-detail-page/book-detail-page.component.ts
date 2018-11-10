import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../book.service';


@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent implements OnInit {
  bookISBN;
  book;
  paramsSubscription;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
        this.bookISBN = params['bookISBN'];
        this.getBookDetails(this.bookISBN);
      });
  }

  getBookDetails(bookISBN) {
    this.bookService.getISBN(bookISBN)
    .subscribe(bookData => {
      this.book = bookData;
      //console.log(this.book.subtitle);
    });
  }
}
