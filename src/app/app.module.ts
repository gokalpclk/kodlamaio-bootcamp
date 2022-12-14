import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add.component';
import { InstructorUpdateComponent } from './components/instructor/instructor-update/instructor-update.component';
import { NaviComponent } from './layout/navi/navi.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PanelComponent } from './layout/panel/panel.component';
import { SidebarRightComponent } from './layout/sidebar-right/sidebar-right.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add.component';
import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update.component';
import { BootcampAddComponent } from './components/bootcamp/bootcamp-add/bootcamp-add.component';
import { BootcampListComponent } from './components/bootcamp/bootcamp-list/bootcamp-list.component';
import { BootcampUpdateComponent } from './components/bootcamp/bootcamp-update/bootcamp-update.component';
import { HomeComponent } from './components/home/home.component';
import { BlackListAddComponent } from './components/blackList/black-list-add/black-list-add.component';
import { BlackListListComponent } from './components/blackList/black-list-list/black-list-list.component';
import { BlackListUpdateComponent } from './components/blackList/black-list-update/black-list-update.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list/admin-list.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update/admin-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { PanelIndexComponent } from './components/panel-index/panel-index.component';
import { CurrentUserComponent } from './components/current-user/current-user/current-user.component';
import { UpdateCurrentUserComponent } from './components/current-user/update-current-user/update-current-user.component';
import { ApplicationAddComponent } from './components/application/application-add/application-add.component';
import { ApplicationListComponent } from './components/application/application-list/application-list.component';
import { ApplicationUpdateComponent } from './components/application/application-update/application-update.component';
import { userReducer } from './store/reducers/user-reducer';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { IndexAboutComponent } from './components/index-about/index-about.component';
import { ApplicantListOfBootcampComponent } from './components/bootcamp/applicant-list-of-bootcamp/applicant-list-of-bootcamp.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    InstructorListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    InstructorAddComponent,
    InstructorUpdateComponent,
    NaviComponent,
    FooterComponent,
    SidebarComponent,
    PanelComponent,
    SidebarRightComponent,
    ApplicantAddComponent,
    ApplicantListComponent,
    ApplicantUpdateComponent,
    BootcampAddComponent,
    BootcampListComponent,
    BootcampUpdateComponent,
    HomeComponent,
    BlackListAddComponent,
    BlackListListComponent, 
    BlackListUpdateComponent,
    AdminAddComponent,
    AdminListComponent,
    AdminUpdateComponent,
    LoginComponent,
    IndexComponent,
    PanelIndexComponent,
    CurrentUserComponent,
    UpdateCurrentUserComponent,
    RegisterComponent,
    ApplicationAddComponent,
    ApplicationListComponent,
    ApplicationUpdateComponent,
    PagenotfoundComponent,
    IndexAboutComponent,
    ApplicantListOfBootcampComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ userReducer }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
