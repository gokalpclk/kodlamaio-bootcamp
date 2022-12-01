import { EmployeeService } from 'src/app/services/employee/employee.service';
import { IEmployeeAllModel } from './../../../models/employee/request/EmployeeAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  allEmployeeList: IEmployeeAllModel[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.allEmployeeList = data;
    });
  }
}