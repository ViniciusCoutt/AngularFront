import  classification  from 'src/app/shared/classification-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-items',
  templateUrl: './sorting-items.component.html',
  styleUrls: ['./sorting-items.component.scss']
})
export class SortingItemsComponent implements OnInit {
  platforms: any;
  release_date: string;
  categories: any;

  constructor() { }

  ngOnInit(): void {
    this.platforms = classification.platforms;
    this.categories = classification.genres;
  }
}
