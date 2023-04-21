import { Injectable } from '@angular/core';
import { Album } from 'app/interfaces/album';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {albums} from '../data/data';
import { Criteria } from '../interfaces/criteria';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums$: Observable<Album[]> = of(albums); //since there is no back-end, we created a dummy array with some data of type Album.
  private filterCriteriaSubject = new BehaviorSubject<Criteria>({title: ''});
  filterCriteria$: Observable<Criteria> = this.filterCriteriaSubject.asObservable();

  updateFilter(criteria: Criteria): void {
    this.filterCriteriaSubject.next(criteria);
  }

}
