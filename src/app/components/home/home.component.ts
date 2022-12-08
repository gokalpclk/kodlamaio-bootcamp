import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalApplicants = 0;
  totalEmployee = 0;
  totalInstructors = 0;
  totalBootcamps = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllApplicants();
    this.getTotalEmployee();
    this.getTotalInstructors();
    this.getTotalBootcamps();
  }
  getAllApplicants() {
    this.dashboardService.getTotalApplicants().subscribe((data: any) => {
      this.totalApplicants = data.length;
    });
  }
  getTotalEmployee() {
    this.dashboardService.getTotalEmployee().subscribe((data: any) => {
      this.totalEmployee = data.length;
    });
  }
  getTotalInstructors() {
    this.dashboardService.getTotalInstructors().subscribe((data: any) => {
      this.totalInstructors = data.length;
    });
  }
  getTotalBootcamps() {
    this.dashboardService.getTotalBootcamps().subscribe((data: any) => {
      this.totalBootcamps = data.length;
    });
  }
}
