import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 
  @Input() books;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

}
