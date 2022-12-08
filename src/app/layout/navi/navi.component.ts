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
  constructor(private router: Router, private store: Store<any>) {}

  ngOnInit(): void {}
  logOut() {
    // this.store.dispatch(new Logout())
    // redux
    localStorage.clear();
    this.store.dispatch(new Logout());
    this.router.navigate(['']);
  }
}
