import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  userLogin: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userLogin = new FormGroup({
      username: new FormControl('', [Validators.minLength(8), Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    });
  }

  onFormSubmit(): void {
    if (this.userLogin.valid) {
      this.onSubmit.emit({
        username: this.userLogin.get('username').value,
        password: this.userLogin.get('password').value
      });
    } else {
      console.log('Invalid form');
      return;
    }
  }

}
