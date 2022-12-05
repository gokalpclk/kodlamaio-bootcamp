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

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'login', component: LoginComponent },

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
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
