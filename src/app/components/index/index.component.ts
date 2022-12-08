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
    public authGuard: AuthGuard
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
}
