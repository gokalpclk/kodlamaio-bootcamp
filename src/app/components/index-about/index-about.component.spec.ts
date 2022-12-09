import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAboutComponent } from './index-about.component';

describe('IndexAboutComponent', () => {
  let component: IndexAboutComponent;
  let fixture: ComponentFixture<IndexAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
