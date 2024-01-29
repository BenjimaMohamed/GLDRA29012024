import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestautrantComponent } from './restaurant.component';

describe('RestautrantComponent', () => {
  let component: RestautrantComponent;
  let fixture: ComponentFixture<RestautrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestautrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestautrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
