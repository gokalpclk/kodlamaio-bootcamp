import { ApplicantListOfBootcampComponent } from './components/bootcamp/applicant-list-of-bootcamp/applicant-list-of-bootcamp.component';
import { IndexAboutComponent } from './components/index-about/index-about.component';
import { ApplicationUpdateComponent } from './components/application/application-update/application-update.component';
import { ApplicationListComponent } from './components/application/application-list/application-list.component';
import { ApplicationAddComponent } from './components/application/application-add/application-add.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCurrentUserComponent } from './components/current-user/update-current-user/update-current-user.component';
import { BlackListAddComponent } from './components/blackList/black-list-add/black-list-add.component';
import { PanelIndexComponent } from './components/panel-index/panel-index.component';
import { LoginComponent } from './components/login/login.component';
import { BlackListListComponent } from './components/blackList/black-list-list/black-list-list.component';
import { BootcampUpdateComponent } from './components/bootcamp/bootcamp-update/bootcamp-update.component';
import { BootcampAddComponent } from './components/bootcamp/bootcamp-add/bootcamp-add.component';
import { BootcampListComponent } from './components/bootcamp/bootcamp-list/bootcamp-list.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update/admin-update.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list/admin-list.component';
import { InstructorUpdateComponent } from './components/instructor/instructor-update/instructor-update.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './components/index/index.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'index-about', component: IndexAboutComponent },

  {
    path: 'admin-panel',
    component: PanelIndexComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'applicant-list',
        component: ApplicantListComponent,
      },
      { path: 'applicant-add', component: ApplicantAddComponent },
      {
        path: 'applicant-list/applicant-update/:id',
        component: ApplicantUpdateComponent,
      },

      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employee-add', component: EmployeeAddComponent },
      {
        path: 'employee-list/employee-update/:id',
        component: EmployeeUpdateComponent,
      },
      {
        path: 'application-list/application-update/:id',
        component: ApplicationUpdateComponent,
      },

      { path: 'instructor-list', component: InstructorListComponent },
      { path: 'instructor-add', component: InstructorAddComponent },
      {
        path: 'instructor-list/instructor-update/:id',
        component: InstructorUpdateComponent,
      },

      { path: 'admin-list', component: AdminListComponent },
      { path: 'admin-add', component: AdminAddComponent },
      { path: 'admin-update/:id', component: AdminUpdateComponent },

      { path: 'bootcamp-list', component: BootcampListComponent },
      { path: 'bootcamp-add', component: BootcampAddComponent },
      {
        path: 'bootcamp-list/bootcamp-update/:id',
        component: BootcampUpdateComponent,
      },

      { path: 'blacklist', component: BlackListListComponent },
      {
        path: 'applicant-list/blacklist-add/:id',
        component: BlackListAddComponent,
      },
      { path: 'application-list', component: ApplicationListComponent },
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE',
    },
  },
  {
    path: 'instructor-panel',
    component: PanelIndexComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'applicant-list',
        component: ApplicantListComponent,
      },
      { path: 'bootcamp-list', component: BootcampListComponent },

      { path: 'blacklist', component: BlackListListComponent },
      {
        path: 'instructor-update/:id',
        component: InstructorUpdateComponent,
      },
      { path: 'application-list', component: ApplicationListComponent },
      {
        path: 'bootcamp-list/detail-bootcamp/:id',
        component: ApplicantListOfBootcampComponent,
      },
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_INSTRUCTOR',
    },
  },
  {
    path: 'applicant-panel',
    component: PanelIndexComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'user-update/:id',
        component: UpdateCurrentUserComponent,
      },
      { path: 'bootcamp-list', component: BootcampListComponent },
      { path: 'application-list', component: ApplicationListComponent },
      // {
      //   path: 'bootcamp-list/application-add/:id',
      //   component: ApplicationAddComponent,
      // },
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_APPLICANT',
    },
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
