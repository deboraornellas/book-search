import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookService } from './book.service';
import { BookSearchPageComponent } from './book-search-page/book-search-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookFormComponent,
    BookSearchPageComponent,
    BookDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
