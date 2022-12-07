import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployeeAllModel } from './../../../models/employee/request/EmployeeAllModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  updateEmployeeForm: FormGroup;
  employee: IEmployeeAllModel;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeById();
  }

  getEmployeeById() {
    this.employeeService
      .getEmployeeById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.employee = data;
        this.createUpdateEmployeeForm();
      });
  }
  createUpdateEmployeeForm() {
    this.updateEmployeeForm = this.formBuilder.group({
      firstName: [this.employee.firstName, [Validators.required]],
      lastName: [this.employee.lastName, [Validators.required]],
      email: [this.employee.email, [Validators.required]],
      password: [this.employee.password, Validators.required],
      nationalIdentity: [this.employee.nationalIdentity, Validators.required],
      dateOfBirth: [this.employee.dateOfBirth, [Validators.required]],
      position: [this.employee.position, [Validators.required]],
      token: [this.employee.token],
      role: [this.employee.role],
      expiration: [this.employee.expiration],
    });
  }

  updateEmployee() {
    if (this.updateEmployeeForm.valid) {
      let employeeModel = Object.assign({}, this.updateEmployeeForm.value);
      this.employeeService
        .updateEmployee(this.employee.id, employeeModel)
        .subscribe((data) => {
          this.router.navigate(['admin-panel/employee-list']);
          this.toastrService.success('Güncelleme Başarılı');
          console.log(data, ' güncellendi');
        });
    } else {
      this.toastrService.error(
        'Form eksik veya hatalı. Lütfen kontrol ediniz.'
      );
    }
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe((data) => {
      this.router.navigate(['admin-panel/employee-list']);
      this.toastrService.error('Silme İşlemi Başarılı');
    });
  }
}
