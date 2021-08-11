import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
})
export class CompleteComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {}
  closeModal(){
    this.modalService.closeModal();
  }
}
