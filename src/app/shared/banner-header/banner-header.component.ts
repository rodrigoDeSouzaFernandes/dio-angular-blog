import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-banner-header',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './banner-header.component.html',
  styleUrl: './banner-header.component.scss',
})
export class BannerHeaderComponent {
  inputFilterByName: string = '';

  constructor(private sharedDataService: SharedDataService) {}

  onFilterChange(): void {
    this.sharedDataService.setFilter(this.inputFilterByName);
  }
}
