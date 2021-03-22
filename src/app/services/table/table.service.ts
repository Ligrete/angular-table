import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { DataType } from 'src/app/models/table/data-type.enum';
import * as responseData from '@src/data.json';
import { JSONDataResponse } from 'src/app/models/table/json-data-response.model';
import { State } from 'src/app/store/table/table.state';
import { map } from 'rxjs/internal/operators/map';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TableService {
  readonly host = window.location.host;

  private readonly unsubscribe = new Subject();

  dataSubject$ = new Subject<any>();

  constructor(
    private http: HttpClient) {
  }

  /**
   *
   * @param searchQuery
   * @param type 
   * @param isDraft
   *
   * @return 
   */
  // getDataAPI(
  //   searchQuery: string,
  //   type: DataType,
  //   isDraft: boolean,
  // ): Observable<JSONDataResponse> {
  //   return this.http.get('assets/data.json').pipe(map(data=>{
  //     return JSON.parse(JSON.stringify(data));
  //   }));
  // }

  getDataAPI(
    searchQuery: string,
    type: DataType, 
    isDraft: boolean,
  ): Observable<any> {
    return this.http.get('assets/data.json').pipe(map(data=>{
      // if ( data ) {
      //   return JSON.parse(JSON.stringify(data));
      // } else {
      //   console.error('no data');
      // }
      return data
    }));
  }



  


}

