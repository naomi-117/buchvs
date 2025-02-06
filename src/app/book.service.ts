import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): import("rxjs").Observable<{ read: any[]; currentlyReading: any[]; toBeRead: any[]; }> | undefined {
    throw new Error('Method not implemented.');
  }
  private books = new BehaviorSubject<{ [key: string]: string[] }>({
    read: ['The Hobbit', '1984'],
    currentlyReading: ['To Kill a Mockingbird'],
    toBeRead: ['Dune', 'The Catcher in the Rye']
  });

  books$ = this.books.asObservable(); // Observable for components to subscribe to

  moveBook(book: string, fromCategory: string, toCategory: string) {
    const updatedBooks = { ...this.books.value };

    // Remove book from old category
    updatedBooks[fromCategory] = updatedBooks[fromCategory].filter(b => b !== book);
    
    // Add book to new category
    updatedBooks[toCategory].push(book);

    this.books.next(updatedBooks); // Notify components of the change
  }
}
