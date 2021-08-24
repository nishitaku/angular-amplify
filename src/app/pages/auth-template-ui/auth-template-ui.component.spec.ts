import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTemplateUiComponent } from './auth-template-ui.component';

describe('AuthTemplateUiComponent', () => {
  let component: AuthTemplateUiComponent;
  let fixture: ComponentFixture<AuthTemplateUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthTemplateUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTemplateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
