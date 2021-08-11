import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.scss'],
})
export class FormRecordComponent implements OnInit {
  constructor(private nav: IonNav, private ModalService: ModalService) {}
  inputConfig=[
    {
      id: 'patientNumber',
      label: 'Patient number (Medical or IIS record number) *',
      type: 'text',
      validate: true,
    },
    {
      id: 'patientNumber',
      label: 'Vaccine*',
      type: 'select',
      validate: true,
      data: [
        {
          id: 1,
          name: 'Pfizer-BioNTech'
        },
        {
          id: 2,
          name: 'Covid'
        }
      ]
    },
    {
      id: 'vaccineNumber',
      label: 'Vaccine lot number *',
      type: 'text',
      validate: true,
    },
    {
      id: 'startDate',
      label: 'Received the 1st dose on*',
      type: 'date',
      validate: true,
    },
    {
      id: 'startDate',
      label: 'Received the 2nd dose on*',
      type: 'date',
      validate: true,
    },
    {
      id: 'healthcare',
      label: 'Healthcare Professional or Clinic Site *',
      type: 'text',
      validate: true,
    },
  ]

  ngOnInit() {}
  handleEvent(event) {
    if(event=='back') {
      this.ModalService.closeModal('dsad');
    }
    else {
      this.nav.push(UploadPhotoComponent)
    }
  }
}
