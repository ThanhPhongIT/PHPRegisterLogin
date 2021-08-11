import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from '../base-button/base-button.component';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements OnInit {
  @Input() config;
  @Input() dataModel?;
  @Input() buttonInfo?;
  @Output() callback = new EventEmitter();
  model: any = {};
  especially: any
  checkPhone;
  change
  type
  constructor() { }

  ngOnInit() {
    this.especially = this.config[0].change
    this.model = this.dataModel || {};
  }

}
@NgModule({
  declarations: [BaseInputComponent],
  imports: [IonicModule, CommonModule, FormsModule, BaseButtonrModule],
  exports: [BaseInputComponent],
})
export class BaseInputModule { }
