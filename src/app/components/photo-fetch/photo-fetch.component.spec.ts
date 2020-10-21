import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFetchComponent } from './photo-fetch.component';

describe('PhotoFetchComponent', () => {
  let component: PhotoFetchComponent;
  let fixture: ComponentFixture<PhotoFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
