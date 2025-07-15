import { Observable } from 'rxjs';
import { User } from '../../domain/user.model';

export abstract class UserRepositoryPort {
  abstract getAll(): Observable<User[]>;
  abstract getById(id: string): Observable<User>;
  abstract create(user: Omit<User, 'id'>): Observable<User>;
  abstract update(
    id: string,
    user: Partial<User>
  ): Observable<User | undefined>;
  abstract delete(id: string): Observable<void>;
}
