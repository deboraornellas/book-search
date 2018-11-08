import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  get(name) {
    let params = new HttpParams();
    params = params.append('search', name);
    params = params.append('max', '5');
    return this.http.get('https://reststop.randomhouse.com/resources/titles', { params: params , responseType: "json"}).pipe(map(
      (response: Response) => {
        return JSON.parse(JSON.stringify(response));
      }));
  }
}
