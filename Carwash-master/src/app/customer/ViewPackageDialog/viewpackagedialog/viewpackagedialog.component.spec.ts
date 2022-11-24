import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackagedialogComponent } from './viewpackagedialog.component';

describe('ViewpackagedialogComponent', () => {
  let component: ViewpackagedialogComponent;
  let fixture: ComponentFixture<ViewpackagedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpackagedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpackagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
