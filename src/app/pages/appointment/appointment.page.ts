import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  inputConfig = [
    {
      id: 'firstName',
      label: 'First Name *',
      type: 'text',
      validate: true,
    },
    {
      id: 'dob',
      label: 'Date of birth *',
      type: 'date',
      validate: true,
    },
    {
      id: 'gender',
      label: 'Gender *',
      type: 'select',
      validate: true,
    },
  ];
  
  constructor() {}
  checkModel(event) {
    console.log(event);
  }
  ngOnInit() {}
}
