import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  // email: User = {
  //   email: '',
  //   password: '',
  // };
  errorMessages = {
    required: 'The name field is required',
    email: 'Please enter a valid email',
  };

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {}
  login() {
    if (this.loginForm?.valid) {
      console.log(this.loginForm?.value);
    }
  }

  // onClick(event: any): void {
  //   debugger;
  //   console.log(event);
  // }
}
