import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByxTableComponent } from './byx-table.component';

describe('ByxTableComponent', () => {
  let component: ByxTableComponent;
  let fixture: ComponentFixture<ByxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByxTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
