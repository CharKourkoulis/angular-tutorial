import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import {albums} from '../data/data';
import { Criteria } from '../interfaces/criteria';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums$ = of(albums); //since there is no back-end, we created a dummy array with some data of type Album.
  private filterAlbumSubject = new BehaviorSubject<Criteria>({title: ''});
  filterAlbumsAction$ = this.filterAlbumSubject.asObservable();

constructor() { }

updateFilter(criteria: Criteria): void {
  this.filterAlbumSubject.next(criteria);
}

}
