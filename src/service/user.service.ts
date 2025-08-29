import { Injectable } from '@angular/core';
import {User} from '../components/naumen/types/user.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true },
    { id: 4, name: 'Diana', email: 'diana@example.com', active: true },
    { id: 5, name: 'Edward', email: 'edward@example.com', active: false },
    { id: 6, name: 'Fiona', email: 'fiona@example.com', active: true },
    { id: 7, name: 'George', email: 'george@example.com', active: true },
    { id: 8, name: 'Hannah', email: 'hannah@example.com', active: false },
    { id: 9, name: 'Ian', email: 'ian@example.com', active: true },
    { id: 10, name: 'Jane', email: 'jane@example.com', active: true },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

}
