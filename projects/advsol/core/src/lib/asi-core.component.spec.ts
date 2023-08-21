import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiCoreComponent } from './asi-core.component';

describe('AsiCoreComponent', () => {
  let component: AsiCoreComponent;
  let fixture: ComponentFixture<AsiCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AsiCoreComponent]
    });
    fixture = TestBed.createComponent(AsiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
