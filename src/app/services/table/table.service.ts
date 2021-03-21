import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { DataType } from 'src/app/models/table/data-type.enum';
import { DataResponse } from 'src/app/models/table/data-response.model';
import * as responseData from '@src/data.json';


/**
 * Implementation of `all-accounts` APIs.
 * @see [Swagger] https://dev.admin.mouseapp.io/swagger/index.html
 */
@Injectable({providedIn: 'root'})
export class AccountsService {
  readonly host = window.location.host;

  constructor(private http: HttpClient) {
  }

  /**
   *
   * @param searchQuery
   * @param type 
   * @param isDraft
   *
   * @return 
   */
  getData(
    searchQuery: string,
    type: DataType,
    isDraft: boolean,
  ): Observable<any> {
    return JSON.parse(JSON.stringify(responseData))
  }

}

