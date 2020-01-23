import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeContactComponent } from './office-contact.component';

describe('OfficeContactComponent', () => {
  let component: OfficeContactComponent;
  let fixture: ComponentFixture<OfficeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
