import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: Http) {}

  get() {
    let searchParams = new URLSearchParams();
    searchParams.append('search', 'Tolkien');
    searchParams.append('max', '2');
    return this.http.get('https://reststop.randomhouse.com/resources/titles', { search: searchParams });
  }
}
