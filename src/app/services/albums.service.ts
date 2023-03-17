import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Album, emptyAlbum } from '../interfaces/album';
import {albums} from '../data/data';
import { Criteria } from '../interfaces/criteria';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums$ = of(albums);
  private filterAlbumSubject = new BehaviorSubject<Criteria>({title: ''});
  filterAlbumsAction$ = this.filterAlbumSubject.asObservable();

constructor() { }

updateFilter(criteria: Criteria) {
  this.filterAlbumSubject.next(criteria);
}

}
