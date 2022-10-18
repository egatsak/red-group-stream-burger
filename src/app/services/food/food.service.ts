import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IFood } from './food.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  API_URL = 'http://localhost:3000/food';
  // foods: IFood[] = [];
  constructor(private http: HttpClient) {}

  getAll(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.API_URL);
    //.pipe(tap((prods) => (this.foods = prods)));
  }
}
