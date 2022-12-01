import { EmployeeService } from './../../../services/employee/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  addEmployeeForm: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  createAddEmployeeForm() {
    this.addEmployeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.min(10), Validators.max(15)]],
      nationalIdenty: ['', [Validators.min(11),Validators.max(11)]],
      dateOfBird: ['', [Validators.required]],
      position: ['', [Validators.required]]
    });
  }

  addEmployee(){
    if(this.addEmployeeForm.valid){
     let employeeModel=Object.assign({}, this.addEmployeeForm.value);
     this.employeeService.addEmployee(employeeModel);
    }

  }
}
