import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


    home = '/assets/icon/bar/Home.svg';
    app = '/assets/icon/bar/Calendar.svg';
    headlth = '/assets/icon/bar/Heart.svg';
    more = '/assets/icon/bar/Category.svg';
    constructor() { }

    ngOnInit() {
    }

}
