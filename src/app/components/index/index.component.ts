import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { IBootcampAllModel } from './../../models/bootcamp/request/BootcampAllModel';
import { BootcampService } from './../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  allBootCampList: IBootcampAllModel[] = [];
  user = '';
  constructor(
    private bootcampService: BootcampService,
    public authGuard: AuthGuard,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBootcamps();
    this.user = localStorage.getItem('role');
  }

  getAllBootcamps() {
    this.bootcampService.getAllBootcamps().subscribe((data) => {
      this.allBootCampList = data;
    });
  }

  apply(bootcamp: any) {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'ROLE_EMPLOYEE') {
        this.router.navigate([
          `admin-panel/bootcamp-list/bootcamp-update/${bootcamp.id}`,
        ]);
      } else if (localStorage.getItem('role') === 'ROLE_APPLICANT') {
        this.router.navigate(['applicant-panel/bootcamp-list']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
