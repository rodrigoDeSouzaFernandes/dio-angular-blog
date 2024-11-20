import { Component } from '@angular/core';
import { BannerHeaderComponent } from '../../shared/banner-header/banner-header.component';
import { CardListComponent } from '../../shared/card-list/card-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHeaderComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
