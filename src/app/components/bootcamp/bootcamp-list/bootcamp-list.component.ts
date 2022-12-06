import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { IBootcampAllModel } from './../../../models/bootcamp/request/BootcampAllModel';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  allBootcampsList: IBootcampAllModel[] = [];

  constructor(
    private bootcampService: BootcampService,
    public authGuard: AuthGuard,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.getAllBootcamps();
  }

  getAllBootcamps() {
    this.bootcampService.getAllBootcamps().subscribe((data) => {
      this.allBootcampsList = data;
    });
  }
  getInstructorById(id:number) {
    this.instructorService.getInstructorById(id).subscribe((data) => {
      console.log(data.firstName);
    });
  }
}
