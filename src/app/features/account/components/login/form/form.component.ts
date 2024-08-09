import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../models/user';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  errorMessages = {
    required: 'The name field is required',
    email: 'Please enter a valid email',
  };
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
  });

  age = new FormControl(null, [Validators.required]);

  ngOnInit(): void {}
  login() {
    if (this.loginForm?.valid) {
      const { email, username, password }: any = this.loginForm?.value;
      this._authService.login(username, password).subscribe((data: any) => {
        if (data?.error) {
          alert(data.error);
          return;
        }
        this._router.navigate(['/']);
      });
    }
  }
}
