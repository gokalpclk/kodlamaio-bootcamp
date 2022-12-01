import { IBootcampAllModel } from './../../../models/bootcamp/request/BootcampAllModel';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  allBootcampsList = this.bootcampService.allBootcamps;
  constructor(private bootcampService: BootcampService) {}

  ngOnInit(): void {
    this.getAllBootcamps();
  }

  getAllBootcamps() {
    this.bootcampService.getAllBootcamps();
  }
}
