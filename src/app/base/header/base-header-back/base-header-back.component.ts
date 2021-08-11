import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
interface data {
    title: string
}
@Component({
    selector: 'app-base-header-back',
    templateUrl: './base-header-back.component.html',
    styleUrls: ['./base-header-back.component.scss'],
})
export class BaseHeaderBackComponent implements OnInit {
    @Input() headerTitle;
    @Input() defaultHref;
    buttonIcon = "assets/svg/auth/back.svg"
    constructor() { }

    ngOnInit() {
    }

}

@NgModule({
    declarations: [BaseHeaderBackComponent],
    imports: [CommonModule, IonicModule],
    exports: [BaseHeaderBackComponent]
})
export class BaseHeaderBackModule {

}