import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFormularioDeContactoComponent } from './mostrar-formulario-de-contacto.component';

describe('MostrarFormularioDeContactoComponent', () => {
  let component: MostrarFormularioDeContactoComponent;
  let fixture: ComponentFixture<MostrarFormularioDeContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarFormularioDeContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarFormularioDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
