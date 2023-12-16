import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarFormularioDeContactoComponent } from './enviar-formulario-de-contacto.component';

describe('EnviarFormularioDeContactoComponent', () => {
  let component: EnviarFormularioDeContactoComponent;
  let fixture: ComponentFixture<EnviarFormularioDeContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarFormularioDeContactoComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EnviarFormularioDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
