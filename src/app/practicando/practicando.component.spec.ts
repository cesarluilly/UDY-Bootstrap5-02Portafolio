import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticandoComponent } from './practicando.component';

describe('PracticandoComponent', () => {
  let component: PracticandoComponent;
  let fixture: ComponentFixture<PracticandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
