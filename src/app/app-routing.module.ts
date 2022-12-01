import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
  { path: 'applicant-add', component: ApplicantAddComponent },
  { path: 'applicant-update/:id', component: ApplicantUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
