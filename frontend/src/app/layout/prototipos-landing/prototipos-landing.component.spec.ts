import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototiposLandingComponent } from './prototipos-landing.component';

describe('PrototiposLandingComponent', () => {
  let component: PrototiposLandingComponent;
  let fixture: ComponentFixture<PrototiposLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototiposLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototiposLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
