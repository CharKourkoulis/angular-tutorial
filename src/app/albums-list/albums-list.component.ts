import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { Album } from '../interfaces/album';
import { Criteria } from '../interfaces/criteria';
import { AlbumsService } from '../services/albums.service';
import { filterByTitle } from 'app/shared/filterByTitle';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit, OnDestroy{

  albums!: Album[];
  filteredAlbums!: Album[];
  albumsSubscription!: Subscription;
  criteriaSubscription!: Subscription;

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(){
    this.albumsSubscription = this.albumsService.albums$
      .subscribe((albums: Album[]) => {
        this.albums = albums;
        this.filteredAlbums = albums;
      });
    this.criteriaSubscription = this.albumsService.filterCriteria$
      .subscribe((criteria: Criteria) => {
        this.filterAlbumsByTitle(criteria);
      });
  }

  filterAlbumsByTitle(criteria: Criteria): void {
    this.filteredAlbums = this.albums.filter(album =>
      album.title?.indexOf(criteria.title ?? '') != -1);
  }

  ngOnDestroy(): void {
    this.albumsSubscription.unsubscribe();
    this.criteriaSubscription.unsubscribe();
  }

}
