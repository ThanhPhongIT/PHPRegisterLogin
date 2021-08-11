import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-success',
  templateUrl: './verified-success.component.html',
  styleUrls: ['./verified-success.component.scss'],
})
export class VerifiedSuccessComponent implements OnInit {
  infor =  'The verification process has been completed. Thank you!';
  textButton = 'Back to profile';
  constructor() { }

  ngOnInit() {}

}
