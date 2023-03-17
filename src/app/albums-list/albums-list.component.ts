import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Album } from '../interfaces/album';
import { Criteria } from '../interfaces/criteria';
import { AlbumsService } from '../services/albums.service';
import { filterByTitle } from 'app/shared/filterByTitle';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums$: Observable<Album[]> = this.service.albums$;
  /* The readonly stream */
  filterAlbumsAction$: Observable<Criteria> = this.service.filterAlbumsAction$;

  filteredAlbums$ = combineLatest([this.albums$, this.filterAlbumsAction$]).pipe(
    map(([albums, criteria]: [Album[], Criteria]) => {
     return filterByTitle(albums, criteria)
    })
  );

  constructor(private service: AlbumsService) {
  }

  ngOnInit(): void {
  }

}
