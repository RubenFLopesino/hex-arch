import { Observable } from 'rxjs';
import { User } from '../../domain/user.model';

export abstract class UserRepositoryPort {
  abstract getAll(): Observable<User[]>;
  abstract create(user: User): Observable<User>;
  abstract update(user: User): Observable<User>;
  abstract delete(id: string): Observable<void>;
}
