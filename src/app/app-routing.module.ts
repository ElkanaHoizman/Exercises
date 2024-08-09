import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'characters',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'comics',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    canActivate: [AuthGuard],
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
