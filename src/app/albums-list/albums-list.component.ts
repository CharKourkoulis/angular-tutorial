import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Album } from '../interfaces/album';
import { Criteria } from '../interfaces/criteria';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums$: Observable<Album[]> = this.service.albums$;
  /* The readonly stream */
  filterAlbumsAction$ = this.service.filterAlbumsAction$;
  filteredAlbums$ = combineLatest([this.albums$, this.filterAlbumsAction$]).pipe(
    map(([albums, filter]: [Album[], Criteria]) => {
      return albums.filter(album => album.title?.toLowerCase()
      .indexOf(filter?.title?.toLowerCase() ?? '') != -1)
    })
  );

  constructor(private service: AlbumsService) {
  }

  ngOnInit(): void {
  }

}
