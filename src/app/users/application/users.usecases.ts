import { inject } from '@angular/core';
import { User } from '../domain/user.model';
import { UserRepositoryPort } from './ports/users.port';
import { Observable } from 'rxjs';

export class UsersUseCases {
  private userRepo = inject(UserRepositoryPort);

  getAll(): Observable<User[]> {
    return this.userRepo.getAll();
  }

  create(user: Omit<User, 'id'>): Observable<User> {
    return this.userRepo.create(user);
  }

  update(id: string, user: Partial<User>): Observable<User | undefined> {
    return this.userRepo.update(id, user);
  }
}
