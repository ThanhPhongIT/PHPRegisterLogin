import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonNav, ModalController } from '@ionic/angular';
import { PhotoRequirementComponent } from '../photo-requirement/photo-requirement.component';

@Component({
  selector: 'app-select-id-type',
  templateUrl: './select-id-type.component.html',
  styleUrls: ['./select-id-type.component.scss'],
})
export class SelectIdTypeComponent implements OnInit {
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
  data = {
    name :  'United States',
    icon : 'assets/icon/united-states.svg'
  };
  type;
  constructor(private nav: IonNav, private modalControler: ModalController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'United States',
        handler: ()=>{
          actionSheet.dismiss({
            name: 'United States',
            icon: 'assets/icon/united-states.svg'
          });
        }
      }, {
        text: 'Việt Nam',
        handler: ()=>{
          actionSheet.dismiss({
            name: 'Việt Nam',
            icon: 'assets/icon/united-states.svg'
          });
        }
      }, {
        text: 'Trung Quốc',
        handler: ()=>{
          actionSheet.dismiss({
            name: 'Trung Quốc',
            icon: 'assets/icon/united-states.svg'
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
      }]
    });
    await actionSheet.present();

    await actionSheet.onDidDismiss().then((res)=>{
      this.data = res.data;
      console.log(this.data);
    });
    // console.log('onDidDismiss resolved with role', role);
    // this.name = role;
  }

  prev(){
    this.modalControler.dismiss();
  }

  openPhotoCom(){
    this.nav.push(PhotoRequirementComponent, {
      data: this.type
    });
  }

}
