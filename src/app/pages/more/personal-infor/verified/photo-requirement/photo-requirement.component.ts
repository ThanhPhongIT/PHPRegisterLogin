import { Component, Input, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { TakePhotoFrontComponent } from '../take-photo-front/take-photo-front.component';

@Component({
  selector: 'app-photo-requirement',
  templateUrl: './photo-requirement.component.html',
  styleUrls: ['./photo-requirement.component.scss'],
})
export class PhotoRequirementComponent implements OnInit {
  @Input() data;
  buttonStyle ={
    width: '153px',
    cssClass: 'button-normal',
    disable: false
  };
  buttonStyleBack={
    width: '153px',
    cssClass: 'button-no-bg',
    disable: false
  };
  constructor(private nav: IonNav) { }
  ngOnInit() {}

  prev(){
    this.nav.pop();
  }

  openTakePhotoFront(){
    this.nav.push(TakePhotoFrontComponent, {
      data: {
        title: 'Take a photo of the front',
        des: 'Make sure that your photo is bright and clear and all corners of the document are visible',
        imgShow: [],
        currenStep: 1,
        type: this.data
      }
    });
  }

}
