import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOperateComponent } from './modal-operate.component';

describe('ModalOperateComponent', () => {
  let component: ModalOperateComponent;
  let fixture: ComponentFixture<ModalOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
