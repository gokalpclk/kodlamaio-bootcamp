import { AuthGuard } from './../../guards/auth.guard';
import { BootcampService } from './../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-about',
  templateUrl: './index-about.component.html',
  styleUrls: ['./index-about.component.css']
})
export class IndexAboutComponent implements OnInit {

  user = '';
  constructor(
    private bootcampService:BootcampService, 
    private authGuard:AuthGuard
    ) { }


  ngOnInit(): void {
    this.user = localStorage.getItem('role');
  }

}
