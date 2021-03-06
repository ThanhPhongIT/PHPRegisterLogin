import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
interface ButtonStyle {
  width: string;
  cssClass?: string;
  text?: string;
  disable?: boolean;
}
@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})

export class BaseButtonComponent implements OnInit {
  @Input() buttonStyle: ButtonStyle;
  @Input() data: any;
  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  handleEventDetail = (type) => {
    this.callback.emit(type);
  };
}
@NgModule({
  declarations: [BaseButtonComponent],
  imports: [IonicModule],
  exports: [BaseButtonComponent]
})
export class BaseButtonrModule {

}
