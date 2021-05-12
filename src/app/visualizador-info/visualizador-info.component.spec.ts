import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorInfoComponent } from './visualizador-info.component';

describe('VisualizadorInfoComponent', () => {
  let component: VisualizadorInfoComponent;
  let fixture: ComponentFixture<VisualizadorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizadorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
