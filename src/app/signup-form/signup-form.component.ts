import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  myform=new FormGroup({
username: new FormControl('',
[Validators.required,
  Validators.minLength(3),
  UsernameValidators.canNotContainsSpace,
  UsernameValidators.shouldBeUnique]),
password: new FormControl('',Validators.required)
  })

  login(){
    this.myform.setErrors({
      invalidLogin:true
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
