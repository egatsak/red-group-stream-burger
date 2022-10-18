import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input()
  foods!: IFood[];
  @Output() findFoods = new EventEmitter<{ searchTerm: string }>();

  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({ searchTerm: this.searchTerm });
    }
  }
}
