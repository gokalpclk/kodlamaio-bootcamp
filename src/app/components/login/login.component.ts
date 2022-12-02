import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login/login.service';
import { IEmployeeLoginModel } from './../../models/employee/request/EmployeeLoginModel';
import { IEmployeeTokenModel } from './../../models/employee/request/EmployeeTokenModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  tokenModel: IEmployeeTokenModel;
  employeeLoginForm: FormGroup;
  employee: IEmployeeLoginModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.creatEmployeeLoginForm();
  }

  creatEmployeeLoginForm() {
    this.employeeLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  employeeLogin() {
    if (this.employeeLoginForm.valid) {
      this.loginService
        .employeeLogin(this.employeeLoginForm.value)
        .subscribe((data) => {
          if (data.length > 0) {
            this.toastr.success('Giriş Başarılı');
            this.router.navigate(['']);
          }
          else{
            this.toastr.error('Giriş Başarısız');
          }
        });
    }
    else{
      this.toastr.error('Bilgilerinizi Doğru Girdiğinizden Emin Olun');
    }
  }
}
