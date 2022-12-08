import { UserAction, UserActionTypes, Logout } from './../actions/user-actions';
import { IUser } from './../../models/users/user';

export let initialState: IUser;

export function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return action.payload;
    case UserActionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
}
