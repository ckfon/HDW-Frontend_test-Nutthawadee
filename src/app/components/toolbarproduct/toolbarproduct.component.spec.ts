import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarproductComponent } from './toolbarproduct.component';

describe('ToolbarproductComponent', () => {
  let component: ToolbarproductComponent;
  let fixture: ComponentFixture<ToolbarproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
