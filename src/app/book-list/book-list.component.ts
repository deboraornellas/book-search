import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // books = [
  //   {
  //     name: "Harry Potter",
  //     author: "J.K Rowling"
  //   },
  //   {
  //     name: "Lord of The Rings",
  //     author: "R.R. Tolkien"
  //   }
  // ];
  
  // book = {
  //   name: "Harry Potter",
  //   author: "J.K Rowling"
  // };
  @Input() books;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    // if (this.books !== null) {
      
    //   });
    // }
  }

}
