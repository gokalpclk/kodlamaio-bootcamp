import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName: ["",[]],
      lastName: ["",[]],
      email: ["",[]],
      password: ["",[]],
      nationalIdentity: ["",[]],
      dateOfBirth: ["",[]],
      about: ["",[]]
    })
  }

  register(){
    
  }



}
