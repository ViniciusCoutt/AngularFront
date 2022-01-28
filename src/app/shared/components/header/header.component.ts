import { Component } from '@angular/core';
import classification from 'src/app/shared/classification-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  categories: any[];
  platforms: any[];
  isPlatformCollapsed: boolean = false;
  isCategoryCollapsed: boolean = false;

  constructor() {
    this.platforms = classification.platforms;
    this.categories = classification.genres;
  }

  categoryClick() {
    this.isCategoryCollapsed = !this.isCategoryCollapsed;
    this.isPlatformCollapsed = false;
  }

  platformClick() {
    this.isPlatformCollapsed = !this.isPlatformCollapsed;
    this.isCategoryCollapsed = false;
  }

}
