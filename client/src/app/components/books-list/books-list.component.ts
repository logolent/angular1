import { BooksService } from './../../services/books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { BookModel } from '../../models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {

	private search: string = '';
	books: BookModel[];

	constructor(private route: ActivatedRoute,
				private booksService: BooksService) {
	}

  	ngOnInit() {
		this.loadBooks(this.search);
  	}

	ngOnDestroy() {

	}

	loadBooks(search: string): void {
		this.booksService.getBooks().subscribe(books => {
			this.books = books.filter(
				book => book.name.includes(search) || book.author.includes(search)
			);

			console.log(this.books);
		});
	}

	deleteBook(id: number): void {
		/* this.booksService. */
	}
}
