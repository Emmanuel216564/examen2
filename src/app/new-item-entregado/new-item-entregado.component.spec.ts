import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemEntregadoComponent } from './new-item-entregado.component';

describe('NewItemEntregadoComponent', () => {
  let component: NewItemEntregadoComponent;
  let fixture: ComponentFixture<NewItemEntregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemEntregadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemEntregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
