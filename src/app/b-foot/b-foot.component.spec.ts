import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BFootComponent } from './b-foot.component';

describe('BFootComponent', () => {
  let component: BFootComponent;
  let fixture: ComponentFixture<BFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
