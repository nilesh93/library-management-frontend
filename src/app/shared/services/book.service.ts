import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { URL_CONST } from '../constants/config';
import 'rxjs/Rx';


@Injectable()
export class BookService {


  // options: RequestOptions;

  constructor(private http: Http, private commonService: CommonService) {
    // this.options = this.userService.options;
  }

  getBooks(params, url) {
    if (!url) {
      params = this.commonService.addQueryParams(params, ['', ' ']);
      return this.http.get(URL_CONST.PROD_PREFIX + 'book/?' + params)
        .map((response: Response) => response.json());
    } else {
      return this.http.get(url)
        .map((response: Response) => response.json());
    }
  }

  viewBook(id) {
    return this.http.get(URL_CONST.PROD_PREFIX + 'book/' + id)
      .map((response: Response) => response.json());
  }

  getCategories() {
    return this.http.get(URL_CONST.PROD_PREFIX + 'book/categories')
      .map((response: Response) => response.json());
  }

  saveBook(obj) {
    return this.http.post(URL_CONST.PROD_PREFIX + 'book/create/', obj)
      .map((response: Response) => response.json());
  }

  updateBook(id, obj) {
    return this.http.put(URL_CONST.PROD_PREFIX + 'book/' + id + '/edit/', obj)
      .map((response: Response) => response.json());
  }

  saveCopy(obj) {
    return this.http.post(URL_CONST.PROD_PREFIX + 'book/copy/create/', obj)
      .map((response: Response) => response.json());
  }

  updateCopy(id, obj) {
    return this.http.put(URL_CONST.PROD_PREFIX + 'book/copy/' + id + '/edit/', obj)
      .map((response: Response) => response.json());
  }

  deleteCopy(id) {
    return this.http.delete(URL_CONST.PROD_PREFIX + 'book/copy/' + id + '/delete/')
      .map((response: Response) => response.json());
  }

  getCopies(params, url) {
    if (!url) {
      params = this.commonService.addQueryParams(params, ['', ' ']);
      return this.http.get(URL_CONST.PROD_PREFIX + 'book/copy/?' + params)
        .map((response: Response) => response.json());
    } else {
      return this.http.get(url)
        .map((response: Response) => response.json());
    }
  }

  viewCopy(id) {
    return this.http.get(URL_CONST.PROD_PREFIX + 'book/copy/' + id)
      .map((response: Response) => response.json());
  }

}



