import { ITokenModel } from './../../token/TokenModel';
export interface IEmployeeAllModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: number;
  nationalIdentity: number;
  dateOfBirth: string;
  position: string;
  token: string;
  role: string;
  expiration: string;
}
