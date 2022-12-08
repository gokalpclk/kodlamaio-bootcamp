import { AuthGuard } from './../../../guards/auth.guard';
import { IApplicationAllModel } from './../../../models/application/request/ApplicationAllModel';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationStates } from './../../../enums/applicationState';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  allApplicationList: IApplicationAllModel[] = [];
  constructor(
    private applicationService: ApplicationService,
    public authGuard: AuthGuard
  ) {}

  ngOnInit(): void {
    this.getAllApplication();
  }

  getAllApplication() {
    this.applicationService.getAllApplication().subscribe((data) => {
      this.allApplicationList = data;
    });
  }
}
