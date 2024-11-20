import { Component } from '@angular/core';
import { BannerHeaderComponent } from "../../shared/banner-header/banner-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
