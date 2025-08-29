import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaumenComponent } from './naumen.component';

describe('NaumenComponent', () => {
  let component: NaumenComponent;
  let fixture: ComponentFixture<NaumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
