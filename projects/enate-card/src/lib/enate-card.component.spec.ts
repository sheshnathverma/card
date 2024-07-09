import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnateCardComponent } from './enate-card.component';

describe('EnateCardComponent', () => {
  let component: EnateCardComponent;
  let fixture: ComponentFixture<EnateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
