import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerComponent } from './ser.component';

describe('SerComponent', () => {
  let component: SerComponent;
  let fixture: ComponentFixture<SerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
