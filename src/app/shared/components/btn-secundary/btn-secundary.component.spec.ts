import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecundaryComponent } from './btn-secundary.component';

describe('BtnSecundaryComponent', () => {
  let component: BtnSecundaryComponent;
  let fixture: ComponentFixture<BtnSecundaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSecundaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnSecundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
