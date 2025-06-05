import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPageComponent } from './servico-page.component';

describe('ServicoPageComponent', () => {
  let component: ServicoPageComponent;
  let fixture: ComponentFixture<ServicoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
