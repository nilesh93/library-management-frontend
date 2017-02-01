import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { URL_CONST } from '../constants/config';
import 'rxjs/Rx';


@Injectable()
export class MemberService {

  // options: RequestOptions;

  constructor(private http: Http, private commonService: CommonService) {
    // this.options = this.userService.options;
  }

  getMembers(params, url) {
    if (!url) {
      params = this.commonService.addQueryParams(params, ['', ' ']);
      return this.http.get(URL_CONST.PROD_PREFIX + 'member/?' + params)
        .map((response: Response) => response.json());
    } else {
      return this.http.get(url)
        .map((response: Response) => response.json());
    }
  }
  viewMember(id) {
    return this.http.get(URL_CONST.PROD_PREFIX + 'member/' + id)
      .map((response: Response) => response.json());
  }

  getTypes() {
    return this.http.get(URL_CONST.PROD_PREFIX + 'member/types')
      .map((response: Response) => response.json());
  }

  saveMember(obj) {
    return this.http.post(URL_CONST.PROD_PREFIX + 'member/create/', obj)
      .map((response: Response) => response.json());
  }

  updateMember(id, obj) {
    return this.http.put(URL_CONST.PROD_PREFIX + 'member/' + id + '/edit/', obj)
      .map((response: Response) => response.json());
  }

  getTitles() {
    return this.http.get(URL_CONST.PROD_PREFIX + 'member/titles')
      .map((response: Response) => response.json());
  }

}
