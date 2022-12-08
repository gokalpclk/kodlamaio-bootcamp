import { ToastrService } from 'ngx-toastr';
import { IApplicationAllModel } from './../../../models/application/request/ApplicationAllModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IApplicationUpdateRequestModel } from './../../../models/application/request/ApplicationUpdateRequestModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationStates } from './../../../enums/applicationState';
@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css'],
})
export class ApplicationUpdateComponent implements OnInit {
  getApplication: IApplicationUpdateRequestModel;
  applicationUpdateForm: FormGroup;
  applications: IApplicationAllModel[];

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getApplicationById();
  }

  getApplicationById() {
    this.applicationService
      .getApplicantById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getApplication = data;
        this.createUpdateApplicationForm();
      });
  }
  createUpdateApplicationForm() {
    this.applicationUpdateForm = this.formBuilder.group({
      applicantId: [this.getApplication.applicantId, Validators.required],
      bootcampId: [this.getApplication.bootcampId, Validators.required],
      state: [this.getApplication.state, Validators.required],
      applicationState: [
        this.getApplication.applicationState,
        Validators.required,
      ],
    });
  }

  updateApplication() {
    if (this.applicationUpdateForm.valid) {
      let getApplicant = Object.assign({}, this.applicationUpdateForm.value);
      this.applicationService
        .updateApplication(this.getApplication.id, getApplicant)
        .subscribe((data) => {
          this.router.navigate(['admin-panel/application-list']);
          this.toastrService.success('Update succesfull');
        });
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  deleteApplication() {}
}
