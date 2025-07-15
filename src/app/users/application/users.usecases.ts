import { inject } from '@angular/core';
import { User } from '../domain/user.model';
import { UserRepositoryPort } from './ports/users.port';
import { Observable } from 'rxjs';

export class UsersUseCases {
  private userRepo = inject(UserRepositoryPort);

  getAll(): Observable<User[]> {
    return this.userRepo.getAll();
  }

  create(user: User): Observable<User> {
    return this.userRepo.create(user);
  }
}
