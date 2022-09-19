import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationDialogComponent } from './new-location-dialog.component';

describe('NewLocationDialogComponent', () => {
  let component: NewLocationDialogComponent;
  let fixture: ComponentFixture<NewLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLocationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
