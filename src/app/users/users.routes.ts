import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRepositoryPort } from './application/ports/users.port';
import { UsersComponent } from './presentation/users';
import { UserApiAdapter } from './infrastructure/users-api.adapter';
import { UsersFacade } from './users.facade';
import { UsersUseCases } from './application/users.usecases';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent,
    providers: [
      UsersFacade,
      UsersUseCases,
      { provide: UserRepositoryPort, useClass: UserApiAdapter },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule],
})
export class UsersModule {}
