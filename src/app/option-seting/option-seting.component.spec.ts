import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSetingComponent } from './option-seting.component';

describe('OptionSetingComponent', () => {
  let component: OptionSetingComponent;
  let fixture: ComponentFixture<OptionSetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
