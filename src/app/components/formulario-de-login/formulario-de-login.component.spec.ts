import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeLoginComponent } from './formulario-de-login.component';

describe('FormularioDeLoginComponent', () => {
  let component: FormularioDeLoginComponent;
  let fixture: ComponentFixture<FormularioDeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDeLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
