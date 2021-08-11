import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
interface DataInput {
  imgLeft: string;
  title: string;
  content: string;
  buttonTitle: string;
  bgColor: string;
}
@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
  @Input() data: DataInput;
  @Output() callback = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [BaseCardComponent],
  imports: [IonicModule],
  exports: [BaseCardComponent]
})

export class BaseCardComponentModule{

}

// <app-base-card [data]="dataCard" (callback)="navigate()"></app-base-card>

// dataCard = {
//   imgLeft: 'assets/icon/healthChart.svg',
//   title: 'Health Chart',
//   content: 'Track your COVID-19 testing, vaccination, medical exams and personal health with your Health Chart',
//   buttonTitle: 'View Chart',
//   bgColor: 'linear-gradient(103.83deg, #58AECC 0%, #3BA6CC 100%)'
// };
