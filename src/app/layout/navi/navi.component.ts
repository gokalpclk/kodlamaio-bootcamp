import { ApplicantService } from './../../services/applicant/applicant.service';
import { Logout } from './../../store/actions/user-actions';
import { IUser } from './../../models/users/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Logout } from 'src/app/store/actions/user-actions';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<any>,
    private applicantService: ApplicantService
  ) {}

  user: IUser;
  currentUserId = 0;
  userInfo: string;
  ngOnInit(): void {
    this.getUser();
  }
  logOut() {
    // this.store.dispatch(new Logout())
    // redux
    localStorage.clear();
    this.store.dispatch(new Logout());
    this.router.navigate(['']);
    this.getUser();
  }
  // getUser() {
  //   this.store.select('userReducer').subscribe((state) => {
  //     this.user = state;
  //     console.log(this.user, ' user');
  //   });
  // }
  getUser() {
    this.currentUserId = JSON.parse(localStorage.getItem('id'));
    this.applicantService
      .getApplicantById(this.currentUserId)
      .subscribe((data) => {
        this.userInfo = `${data.firstName}`;
      });
  }
}
