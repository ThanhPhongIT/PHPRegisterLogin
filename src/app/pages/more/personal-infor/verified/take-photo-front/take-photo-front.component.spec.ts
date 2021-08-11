import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePhotoFrontComponent } from './take-photo-front.component';

describe('TakePhotoFrontComponent', () => {
  let component: TakePhotoFrontComponent;
  let fixture: ComponentFixture<TakePhotoFrontComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePhotoFrontComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePhotoFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
