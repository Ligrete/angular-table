import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectorComponent } from './ui-selector.component';

describe('UiSelectorComponent', () => {
  let component: UiSelectorComponent;
  let fixture: ComponentFixture<UiSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
