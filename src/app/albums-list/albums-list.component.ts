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
  albumsSubscription!: Subscription;


  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(){
    this.albumsSubscription = this.albumsService.albums$
      .subscribe(albums => {
        this.albums = albums;
      })
  }

  ngOnDestroy(): void {
    this.albumsSubscription.unsubscribe();
  }

}
