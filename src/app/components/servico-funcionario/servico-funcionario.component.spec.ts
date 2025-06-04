import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoFuncionarioComponent } from './servico-funcionario.component';

describe('ServicoFuncionarioComponent', () => {
  let component: ServicoFuncionarioComponent;
  let fixture: ComponentFixture<ServicoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
