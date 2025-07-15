import { inject, Injectable, Signal, signal } from '@angular/core';

import { delay, tap } from 'rxjs';
import { UsersUseCases } from './application/users.usecases';
import { User } from './domain/user.model';

@Injectable()
export class UsersFacade {
  private readonly usersState = signal<User[]>([]);

  private readonly loadingState = signal<boolean>(false);

  private readonly useCases = inject(UsersUseCases);

  loadUsers() {
    this.loadingState.set(true);
    this.useCases
      .getAll()
      .pipe(
        delay(1000),
        tap((users) => this.usersState.set(users)),
        tap(() => this.loadingState.set(false))
      )
      .subscribe();
  }

  get users(): Signal<User[]> {
    return this.usersState.asReadonly();
  }

  get isLoading(): Signal<boolean> {
    return this.loadingState.asReadonly();
  }
}
