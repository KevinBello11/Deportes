import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAZNComponent } from './dazn.component';

describe('DAZNComponent', () => {
  let component: DAZNComponent;
  let fixture: ComponentFixture<DAZNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DAZNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAZNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
