import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  form;
  @Output() search = new EventEmitter();

  constructor(
    
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl() 
    });
  }

  onSubmit(book) {
    this.search.emit(book);
  }

}
