import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirNuevoComponent } from './anadir-nuevo.component';

describe('AnadirNuevoComponent', () => {
  let component: AnadirNuevoComponent;
  let fixture: ComponentFixture<AnadirNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
