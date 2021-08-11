import { Component, Input, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { VerifiedSuccessComponent } from '../verified-success/verified-success.component';

@Component({
  selector: 'app-take-photo-front',
  templateUrl: './take-photo-front.component.html',
  styleUrls: ['./take-photo-front.component.scss'],
})
export class TakePhotoFrontComponent implements OnInit {
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

  constructor(public photoService: PhotoService, private nav: IonNav) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    this.data.imgShow = this.photoService.photos;
  }

  prev(){
    this.data.imgShow = [];
    this.photoService.shiftImg();
  }

  openPhotoCom(){
    console.log(this.data.imgShow);
    if(this.data.currenStep === 1){
      this.nav.push(TakePhotoFrontComponent, {
        data: {
          title: 'Take a photo of the back',
          des: 'Make sure that your photo is bright and clear and all corners of the document are visible',
          imgShow: [],
          currenStep: 2,
          type: this.data.type
        }
      });
    }else if(this.data.currenStep === 2){
      this.nav.push(TakePhotoFrontComponent, {
        data: {
          title: 'Take a selfie',
          des: 'Take a selfie with a clear and legible view of the front of your document',
          imgShow: [],
          currenStep: 3,
          type: this.data.type
        }
      });
    }else if(this.data.currenStep === 3){
      this.nav.push(VerifiedSuccessComponent);
    }
  }
}
