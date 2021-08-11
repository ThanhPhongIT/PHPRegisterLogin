import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-card-record',
  templateUrl: './base-card-record.component.html',
  styleUrls: ['./base-card-record.component.scss'],
})
export class BaseCardRecordComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
@NgModule({
  declarations: [BaseCardRecordComponent],
  imports: [IonicModule, CommonModule],
  exports: [BaseCardRecordComponent],
})
export class BaseCardRecordModule {}
