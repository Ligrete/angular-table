import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { DataType } from 'src/app/models/table/data-type.enum';
import { JSONDataResponse } from '@app/models/table/json-data-response.model';
import { filter, map } from 'rxjs/operators';
import { DataIsDraft } from '@app/models/table/data-is-draft.enum';

@Injectable({providedIn: 'root'})
export class TableService {

  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

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
    isDraft: DataIsDraft,
  ): Observable<any> {
    return this.http.get('assets/data.json').pipe(map((data : JSONDataResponse[]) => {
      
      let filtered : JSONDataResponse[] = [];
      console.log(`service params: ${searchQuery}  | ${type} | ${isDraft}`);

      if (type === DataType.ALL && isDraft === DataIsDraft.ALL && searchQuery === '') {

        console.log('data', data);
        return data

      } else {

        const source = from(data);
        const filteredAll = source.pipe(
          filter(element => (type !== DataType.ALL &&  element.type === type) ||  type === DataType.ALL),
          filter(element => (isDraft !== DataIsDraft.ALL && String(element.isDraft) === String(isDraft)) || isDraft === DataIsDraft.ALL),
          filter(element => 
            (searchQuery !== '' && 
            (
              element?.author?.first.includes(searchQuery) || element?.author?.last.includes(searchQuery) 
               || element?.tags.join().includes(searchQuery)  
            ) 
            ) || searchQuery === '' ),
        );
        const subscribes = filteredAll.subscribe(val => {
          filtered.push(val);
        });

        console.log('filtered', filtered);
        subscribes.unsubscribe()
        return filtered

      }
    }));
  }
}

