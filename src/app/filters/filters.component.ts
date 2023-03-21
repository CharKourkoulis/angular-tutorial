import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Criteria } from 'app/interfaces/criteria';
import { AlbumsService } from 'app/services/albums.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() filteringCriteria = new EventEmitter<Criteria>();

  constructor(private fb: FormBuilder)
  { }

  titleForm = this.fb.group({
    title: [''],
  });

  filterResults(): void {
    this.filteringCriteria.emit(this.titleForm.value as Criteria);
  }

  clearFilter(): void {
    this.filteringCriteria.emit({title: ''});
  }

}
