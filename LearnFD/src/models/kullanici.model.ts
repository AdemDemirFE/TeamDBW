import { Moment } from 'moment';
import * as moment from 'moment';

export interface IKullanici {
  activated?: boolean;
  authorities?: any;
  createdBy?: string;
  createdDate?: Moment;
  email?: string;
  firstName?: string;
  id?: any;
  imageUrl?: string;
  langKey?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastName?: string;
  login?: string;
  name?: string;
}

export class Kullanici implements IKullanici {
  constructor(
    public activated?: boolean,
    public authorities?: any,
    public createdBy?: string,
    public createdDate?: Moment,
    public email?: string,
    public firstName?: string,
    public id?: any,
    public imageUrl?: string,
    public langKey?: string,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Moment,
    public lastName?: string,
    public login?: string,
    public name?: string
  ) { }
}
