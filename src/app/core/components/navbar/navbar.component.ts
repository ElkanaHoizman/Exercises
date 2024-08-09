import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  user$: Observable<User | null> = this._authService?.user;

  constructor(private _authService: AuthService) {
    // this.user$.subscribe((data) => {
    //   console.log('data', data?.firstName);
    // });
  }
  logout(event:Event) {
    this._authService.logout();
  }
}
