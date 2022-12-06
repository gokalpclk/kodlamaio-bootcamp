export interface IApplicantAddRequestModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nationalIdentity: number;
  dateOfBirth: string;
  about: string;
  state:number;
  token: string;
  role: string;
  expiration: string;
}
