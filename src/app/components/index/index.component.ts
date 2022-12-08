import { IBootcampAllModel } from './../../models/bootcamp/request/BootcampAllModel';
import { BootcampService } from './../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allBootCampList:IBootcampAllModel[]=[]
  constructor(private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.getAllBootcamps()
  }

  getAllBootcamps(){
    this.bootcampService.getAllBootcamps().subscribe(data=>{
      this.allBootCampList = data
    })
  }

}
