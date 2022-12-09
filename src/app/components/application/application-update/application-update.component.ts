import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ToastrService } from 'ngx-toastr';
import { IApplicationAllModel } from './../../../models/application/request/ApplicationAllModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IApplicationUpdateRequestModel } from './../../../models/application/request/ApplicationUpdateRequestModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationStates } from 'src/app/enums/applicationState';
@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css'],
})
export class ApplicationUpdateComponent implements OnInit {
  getApplication: IApplicationUpdateRequestModel;
  applicationUpdateForm: FormGroup;
  applications: IApplicationAllModel;

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private applicantService: ApplicantService
  ) {}
  public getapplicationState(): typeof ApplicationStates {
    return ApplicationStates;
  }

  // applicationStates: ApplicationStates
  ngOnInit(): void {
    this.getApplicationById();
  }

  getApplicationById() {
    this.applicationService
      .getApplicationById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getApplication = data;
        this.createUpdateApplicationForm();
      });
  }
  createUpdateApplicationForm() {
    this.applicationUpdateForm = this.formBuilder.group({
      applicantName: [this.getApplication.applicantName, Validators.required],
      bootcampName: [this.getApplication.bootcampName, Validators.required],
      applicationState: [
        this.getApplication.applicationState,
        Validators.required,
      ],
    });
  }

  updateApplication() {
    if (this.applicationUpdateForm.valid) {
      let applicationModel = Object.assign(
        {},
        this.applicationUpdateForm.value
      );
      this.applicationService
        .updateApplication(this.getApplication.id, applicationModel)
        .subscribe((data) => {
          this.router.navigate(['admin-panel/application-list']);
          this.toastrService.success('Update succesfull');
        });
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  deleteApplication() {
    this.applicationService
      .deleteApplication(this.getApplication.id)
      .subscribe((data) => {
        console.log(this.getApplication.id);
        this.router.navigate(['admin-panel/application-list']);
        this.toastrService.success('Application deleted');
      });
  }
}
