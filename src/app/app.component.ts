import { Component } from '@angular/core';
import { Criteria } from './interfaces/criteria';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private albumsService: AlbumsService){

  }

  filterCriteria(criteria: Criteria){
    this.albumsService.updateFilter(criteria);
  }

}
