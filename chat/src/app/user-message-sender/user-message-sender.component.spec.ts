import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageSenderComponent } from './user-message-sender.component';

describe('UserMessageSenderComponent', () => {
  let component: UserMessageSenderComponent;
  let fixture: ComponentFixture<UserMessageSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMessageSenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
