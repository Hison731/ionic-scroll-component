import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscrollComponent } from './listscroll.component';

describe('ListscrollComponent', () => {
  let component: ListscrollComponent;
  let fixture: ComponentFixture<ListscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListscrollComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
