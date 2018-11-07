import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BookService } from '../book.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output() search = new EventEmitter();

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("onSubmit");
    this.search.emit("Tolkien");
  }

}
