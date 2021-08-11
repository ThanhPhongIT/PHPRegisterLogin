import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-base-category',
    templateUrl: './base-category.component.html',
    styleUrls: ['./base-category.component.scss'],
})
export class BaseCategoryComponent implements OnInit {
    @Input() data;
    @Output() callback = new EventEmitter;
    constructor() { }

    ngOnInit() { }

}

@NgModule({
    declarations: [BaseCategoryComponent],
    imports: [IonicModule, RouterModule],
    exports: [BaseCategoryComponent]
})

export class BaseCategoryComponentModule {

}

// data = {
//   title: 'profile',
//   iconLink: 'assets/icon/profile.svg'
// };

// <app-base-category [data]="data"></app-base-category>

