import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BooksService {
	constructor(private http: HttpClient) {

	}

	public getBooks(search: string = ''): Observable<BookModel[]> {
		return this.http.get<any>('http://localhost:3000/api/books').pipe(
			map(object => object.data)
		);
	}
}