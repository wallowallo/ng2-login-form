import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
    FormBuilder,
      FormControl,
        FormGroup,
} from '@angular/forms';

const USERS: registeredUser[] = [
 {firstName: 'test', lastName: 'test', email: 'test', password: 'test'}
];

export class registeredUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class SignUpComponent {
  users = USERS;

  signUp: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

constructor (builder: FormBuilder) {
  this.firstName = new FormControl('', []);
  this.lastName = new FormControl('', []);
  this.email = new FormControl('', []);
  this.password = new FormControl('', []);
  this.signUp = builder.group({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password
  });
}

  newUser() { 
    this.users.push(this.signUp.value);
    this.signUp.reset();
    console.log(this.users);
  }

}
