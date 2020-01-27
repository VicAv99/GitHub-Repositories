import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesCreateComponent } from './repositories-create.component';

describe('RepositoriesCreateComponent', () => {
  let component: RepositoriesCreateComponent;
  let fixture: ComponentFixture<RepositoriesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
