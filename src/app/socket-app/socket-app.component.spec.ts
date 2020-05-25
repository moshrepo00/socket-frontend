import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketAppComponent } from './socket-app.component';

describe('SocketAppComponent', () => {
  let component: SocketAppComponent;
  let fixture: ComponentFixture<SocketAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
