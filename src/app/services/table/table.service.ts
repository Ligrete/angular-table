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

        // filtered = data.map( element => {
        //   console.log(element);
        //   if (
        //     (type !== DataType.ALL && element.type === type)
        //   ) {
        //     return element
        //   }
        // });
      
        // if (type !== DataType.ALL) {
        //   filtered = data
        //   .filter(element => element.type === type);
        // }

        // if (isDraft !== DataIsDraft.ALL) {
        //   filtered = data
        //   .filter(element => String(element.isDraft) === String(isDraft));
        // }

        // const source = from(data);
        // const filteredType = source.pipe(
        //   filter(element => (type !== DataType.ALL &&  element.type === type) ||  type === DataType.ALL)
        //   // filter(element => String(element.isDraft) === String(isDraft) && isDraft !== DataIsDraft.ALL),
        // );
        

        // const filteredIsDraft = filteredType.pipe(
        //   filter(element => (isDraft !== DataIsDraft.ALL && String(element.isDraft) === String(isDraft)) || isDraft === DataIsDraft.ALL)
        //   // filter(element => String(element.isDraft) === String(isDraft) && isDraft !== DataIsDraft.ALL),
        // );


        
      } else {

        const source = from(data);
        const filteredAll = source.pipe(
          filter(element => (type !== DataType.ALL &&  element.type === type) ||  type === DataType.ALL),
          filter(element => (isDraft !== DataIsDraft.ALL && String(element.isDraft) === String(isDraft)) || isDraft === DataIsDraft.ALL),
          filter(element => 
            (searchQuery !== '' && 
            (
              element?.author?.first.includes(searchQuery) || element?.author?.last.includes(searchQuery)  || element?.tags.join().includes(searchQuery)
            ) 
            ) || searchQuery === '' ),
          // filter(element => 
          //   (searchQuery !== '' && 
          //   (element?.tags.join().includes(searchQuery))
          //   ) || searchQuery === '' )
        );

        // const subscribel = filteredType.subscribe(val => console.log('filteredType',val));
        // const subscribes = filteredIsDraft.subscribe(val => console.log('filteredIsDraft',val));

        const subscribes = filteredAll.subscribe(val => console.log('filteredAll',val));
        subscribes.unsubscribe()
        console.log('filtered', filtered);
        return filtered
      }
    }));
  }
}

