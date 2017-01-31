import { NotificationsService } from 'angular2-notifications';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { URL_CONST } from '../constants/config';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommonService {

  // private toastAnnounce = new Subject<Object>();
  // toastAnnounce$ = this.toastAnnounce.asObservable();

  constructor(private http: Http, private _notificationsService: NotificationsService) {

  }

  newNotification(type, title, content) {
    // this.toastAnnounce.next(options);
    this._notificationsService[type](
      title,
      content,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 100
      }
    );
  }

  addQueryParams(obj: Object, rules: Array<any>) {

    let params = '';

    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (obj[property] === undefined || rules.indexOf(obj[property]) !== -1) {
          delete obj[property];
        } else {
          params += property.toString().trim() + '=' + obj[property].toString().trim() + '&';
        }
      }
    }

    return params;
  }

  removeEmpty(obj: Object, rules: Array<any>) {

    let params = '';

    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (obj[property] === undefined || rules.indexOf(obj[property]) !== -1) {
          delete obj[property];
        }
      }
    }

    return obj;
  }

}



