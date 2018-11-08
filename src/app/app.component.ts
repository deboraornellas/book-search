import { Component, Output, EventEmitter } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private bookService: BookService
  ) { }

  onInit(){
  }

}
