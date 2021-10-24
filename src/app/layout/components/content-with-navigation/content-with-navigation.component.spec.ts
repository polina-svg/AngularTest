import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWithNavigationComponent } from './content-with-navigation.component';

describe('ContentWithNavigationComponent', () => {
  let component: ContentWithNavigationComponent;
  let fixture: ComponentFixture<ContentWithNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWithNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWithNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
