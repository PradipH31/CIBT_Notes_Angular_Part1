import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdboxComponent } from './adbox.component';

describe('AdboxComponent', () => {
  let component: AdboxComponent;
  let fixture: ComponentFixture<AdboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
