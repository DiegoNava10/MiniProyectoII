import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPanelComponent } from './scroll-panel.component';

describe('ScrollPanelComponent', () => {
  let component: ScrollPanelComponent;
  let fixture: ComponentFixture<ScrollPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
