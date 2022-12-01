import { ActivatedRoute } from '@angular/router';
import { IEmployeeAllModel } from './../../../models/employee/request/EmployeeAllModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  updateEmployeeForm: FormGroup;
  employee:IEmployeeAllModel;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.employee.id=param["id"];
      this.createUpdateEmployeeForm()
    })
  }

  createUpdateEmployeeForm() {
    this.updateEmployeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.min(10), Validators.max(15)]],
      nationalIdenty: ['', [Validators.min(11),Validators.max(11)]],
      dateOfBird: ['', [Validators.required]],
      position: ['', [Validators.required]]
    });
  }

  updateEmployee(){
    if(this.updateEmployeeForm.valid){
     let employeeModel=Object.assign({}, this.updateEmployeeForm.value);
     this.employeeService.updateEmployee(this.employee.id, employeeModel);
    }

  }

}
