import { IUser } from './../../models/users/user';
import { Action } from '@ngrx/store';

export enum UserActionTypes{
    LOGIN="LOGIN",
    LOGOUT="LOGOUT"
}

export class Login implements Action{
    type: string=UserActionTypes.LOGIN;
    constructor(public payload:IUser){}
}

export class Logout implements Action{
    type: string=UserActionTypes.LOGOUT;
    constructor(){}
}

export type UserAction = Login;