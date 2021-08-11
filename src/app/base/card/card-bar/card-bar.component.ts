import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-card-bar',
    templateUrl: './card-bar.component.html',
    styleUrls: ['./card-bar.component.scss'],
})
export class CardBarComponent implements OnInit {
    @Input() title;
    @Input() icon;
    @Output() callback = new EventEmitter();


    constructor() { }

    ngOnInit() { }

}

@NgModule({
    declarations: [CardBarComponent],
    imports: [CommonModule, IonicModule],
    exports: [CardBarComponent]
})
export class CardBarModule {

}