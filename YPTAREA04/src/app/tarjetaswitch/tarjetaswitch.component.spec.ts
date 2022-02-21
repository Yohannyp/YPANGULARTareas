import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaswitchComponent } from './tarjetaswitch.component';

describe('TarjetaswitchComponent', () => {
  let component: TarjetaswitchComponent;
  let fixture: ComponentFixture<TarjetaswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
