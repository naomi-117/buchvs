import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchvsComponent } from './buchvs.component';

describe('BuchvsComponent', () => {
  let component: BuchvsComponent;
  let fixture: ComponentFixture<BuchvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuchvsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuchvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
