/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRepoComponent } from './userRepo.component';

describe('UserRepoComponent', () => {
  let component: UserRepoComponent;
  let fixture: ComponentFixture<UserRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
