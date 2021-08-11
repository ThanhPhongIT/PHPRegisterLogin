import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { PhotoService } from 'src/app/services/photo.service';
import { CompleteComponent } from '../complete/complete.component';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss'],
})
export class UploadPhotoComponent implements OnInit {
  uploadFrontImage: any;
  arrIMG: any;
  uploadBackImage: any;
  constructor(
    private modalService: ModalService,
    private nav: IonNav,
    private photoService: PhotoService
  ) {}

  ngOnInit() {}
  prev() {
    this.nav.pop();
  }

  openComplete() {
    this.nav.push(CompleteComponent);
  }
  // processUploadImage(files: File, type) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     if (type == 'front') {
  //       this.uploadFrontImage = reader.result;
  //     } else {
  //       this.uploadBackImage = reader.result;
  //     }
  //   };
  // }
  changePhoto(type) {
    this.photoService.addNewToGallery().then(() => {
      this.arrIMG = this.photoService.photos;
      if (type == 'front') {
        this.uploadFrontImage = this.arrIMG[0].base64;
      }else{
        this.uploadBackImage = this.arrIMG[0].base64;
      }
    });
  }
}
