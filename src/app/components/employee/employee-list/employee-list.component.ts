import { EmployeeService } from './../../../services/employee/employee.service';
import { IEmployeeAllModel } from './../../../models/employee/request/EmployeeAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
