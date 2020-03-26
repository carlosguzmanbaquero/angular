import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegodadosComponent } from './juegodados.component';

describe('JuegodadosComponent', () => {
  let component: JuegodadosComponent;
  let fixture: ComponentFixture<JuegodadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegodadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegodadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
