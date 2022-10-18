import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/ui/layout/layout.module';
import { SaleComponent } from './components/screens/sale/sale.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/screens/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProfileComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
