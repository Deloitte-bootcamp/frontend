import { TestBed } from '@angular/core/testing';

import { ServicosFuncionarioService } from './servicos-funcionario.service';

describe('ServicosFuncionarioService', () => {
  let service: ServicosFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
