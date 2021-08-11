import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-base-header',
    templateUrl: './base-header.component.html',
    styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent implements OnInit {
    @Input() baseHeaderTitle;
    constructor() { }
    ngOnInit() { }

}
@NgModule({
    declarations: [BaseHeaderComponent],
    imports: [CommonModule, IonicModule],
    exports: [BaseHeaderComponent]
})
export class BaseHeaderModule {

}