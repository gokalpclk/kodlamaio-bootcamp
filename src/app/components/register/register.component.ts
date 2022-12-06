import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IApplicantAddRequestModel } from './../../models/applicant/request/ApplicantAddRequestModel';
import { ApplicantService } from './../../services/applicant/applicant.service';
import { CurrentUserService } from './../../services/current-user/current-user.service';
import { CurrentUserComponent } from './../current-user/current-user/current-user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IApplicantAllModel } from 'src/app/models/applicant/request/ApplicantAllModel';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private currentUserService: CurrentUserService,
    private applicantService:ApplicantService,
    private router:Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      nationalIdentity: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      about: ['', [Validators.required]],
    });
  }

  addApplicant() {
    if(this.registerForm.valid){
      let user:IApplicantAddRequestModel=Object.assign({}, this.registerForm.value)
      user.role="ROLE_APPLICANT";
      user.token=new Date().toLocaleString();
      user.state=1
      this.applicantService.addApplicant(user).subscribe((data)=>{
        this.currentUserService.addUser(user).subscribe((dat)=>{
          this.router.navigate(["/login"])
          this.toastrService.success("Register is success", "Succes")
        })
        
      })

    }
  }
}
