import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() filterFoods = new EventEmitter<{ type: string }>();

  type = '';
  constructor() {}

  ngOnInit(): void {}

  handleFilter(type: string) {
    this.type = type;
    this.filterFoods.emit({ type: this.type });
  }
}
