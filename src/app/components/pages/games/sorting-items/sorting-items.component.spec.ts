import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingItemsComponent } from './sorting-items.component';

describe('SortingItemsComponent', () => {
  let component: SortingItemsComponent;
  let fixture: ComponentFixture<SortingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
