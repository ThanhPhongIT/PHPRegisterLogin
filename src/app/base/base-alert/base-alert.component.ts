import { LocationChangeEvent } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/localstorege.service';
import { ModalService } from 'src/app/services/modal.service';
import { EventEmitter } from 'stream';
import { BaseButtonrModule } from '../base-button/base-button.component';

@Component({
  selector: 'app-base-alert',
  templateUrl: './base-alert.component.html',
  styleUrls: ['./base-alert.component.scss'],
})
export class BaseAlertComponent implements OnInit {
  @Input() title?: string;
  @Input() content?: string;
   constructor(
    private modalService: ModalService,
    private local: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit() {}
  closeModal() {
    this.modalService.closeModal();
  }
  logout() {
        this.local.del();
        this.closeModal();
        this.router.navigate(['']);
  }
}
@NgModule({
  declarations: [BaseAlertComponent],
  imports: [IonicModule, BaseButtonrModule],
  exports: [BaseAlertComponent]
})
export class BaseAlertModule {

}
