import { Component, inject, OnInit } from '@angular/core';
import { UsersFacade } from '../users.facade';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class UsersComponent implements OnInit {
  private readonly facade = inject(UsersFacade);

  readonly users = this.facade.users;
  readonly isLoading = this.facade.isLoading;

  ngOnInit(): void {
    this.facade.loadUsers();
  }
}
