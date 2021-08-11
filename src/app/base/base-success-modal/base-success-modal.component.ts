import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { BaseButtonrModule } from '../base-button/base-button.component';

@Component({
  selector: 'app-base-success-modal',
  templateUrl: './base-success-modal.component.html',
  styleUrls: ['./base-success-modal.component.scss'],
})
export class BaseSuccessModalComponent implements OnInit {
  @Input() info?: string;
  @Input() textButton?: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {

  }
  closeModal() {
    this.modalService.closeModal();
  }
}
@NgModule({
  declarations: [BaseSuccessModalComponent],
  imports: [IonicModule, BaseButtonrModule],
  exports: [BaseSuccessModalComponent],
})
export class BaseSuccessModalModule { }
