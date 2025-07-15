import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepositoryPort } from '../application/ports/users.port';
import { User } from '../domain/user.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserApiAdapter implements UserRepositoryPort {
  private readonly users = signal<User[]>([
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
  ]);

  create(user: User): Observable<User> {
    const createdUser = {
      ...user,
      id: (+this.users()[this.users().length - 1].id + 1).toString(),
    };
    this.users.update((users) => [...users, createdUser]);
    return of(createdUser);
  }

  update(id: string, user: Partial<User>): Observable<User | undefined> {
    const databaseUser = this.users().find((u) => u.id === id);
    const updatedUser = { ...databaseUser, ...user } as User;
    this.users.update((users) =>
      [...users.filter((stateUser) => stateUser.id === id), updatedUser].sort(
        (a, b) => Number(a.id) - Number(b.id)
      )
    );
    if (databaseUser) return of(databaseUser);
    return of(undefined);
  }

  getById(id: string): Observable<User> {
    return of(this.users().find((u) => u.id === id) as User);
  }

  getAll(): Observable<User[]> {
    return of(this.users());
  }

  delete(id: string): Observable<void> {
    this.users.update((users) => users.filter((user) => user.id === id));
    return of();
  }
}
