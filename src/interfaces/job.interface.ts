export interface Job {
  id?: Number;
  name: String;
  activities: String;
  from: Date;
  to: Date;
  country: String;
  stack: String;
  link?: String;
  enterpriseId?: string;
}
