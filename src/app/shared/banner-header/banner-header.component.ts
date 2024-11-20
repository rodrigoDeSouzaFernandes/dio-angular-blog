import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-banner-header',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './banner-header.component.html',
  styleUrl: './banner-header.component.scss',
})
export class BannerHeaderComponent {}
