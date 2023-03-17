import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Criteria } from 'app/interfaces/criteria';
import { AlbumsService } from 'app/services/albums.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(
    private service: AlbumsService,
    private fb: FormBuilder
    ) { }

  titleForm = this.fb.group({
    title: [''],
  });

  ngOnInit(): void {
  }

  filterResults() {
    this.service.updateFilter(this.titleForm.value as Criteria);
  }

  clearFilter() {
    this.service.updateFilter({title: ''});
  }



}
