import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepositoryPort } from '../application/ports/users.port';
import { User } from '../domain/user.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserApiAdapter implements UserRepositoryPort {
  create(user: User): Observable<User> {
    return of({
      ...user,
      id: Math.random().toString(36).substr(2, 9),
    });
  }

  update(user: User): Observable<User> {
    return of(user);
  }

  getAll(): Observable<User[]> {
    return of([
      { id: '1', name: 'Alice', email: 'alice@example.com' },
      { id: '2', name: 'Bob', email: 'bob@example.com' },
    ]);
  }

  delete(id: string): Observable<void> {
    return of();
  }
}
