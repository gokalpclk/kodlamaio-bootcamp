export interface IApplicationUpdateRequestModel {
  id: number;
  applicantId: number;
  bootcampId: number;
  state: number;
  applicationName: string;
  bootcampName: string;
  applicationState: string;
}
