import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponentComponent } from './my-new-component.component';

describe('MyNewComponentComponent', () => {
  let component: MyNewComponentComponent;
  let fixture: ComponentFixture<MyNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
