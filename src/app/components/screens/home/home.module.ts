import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent,
    FiltersComponent,
    SearchComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class HomeModule {}
