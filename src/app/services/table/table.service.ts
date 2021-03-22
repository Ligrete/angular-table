import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { DataType } from 'src/app/models/table/data-type.enum';
import { JSONDataResponse } from '@app/models/table/json-data-response.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TableService {

  constructor(
    private http: HttpClient) {
  }

  /**
   *
   * @param searchQuery - query for search
   * @param type - red | green | blue
   * @param isDraft 
   *
   * @return 
   */
  getDataAPI(
    searchQuery: string,
    type: DataType, 
    isDraft: boolean,
  ): Observable<any> {
    return this.http.get('assets/data.json').pipe(map((data : JSONDataResponse) => {
      console.log('service', data);
      
      return data
    }));
  }
}

