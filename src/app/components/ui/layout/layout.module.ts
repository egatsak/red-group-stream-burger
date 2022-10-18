import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
