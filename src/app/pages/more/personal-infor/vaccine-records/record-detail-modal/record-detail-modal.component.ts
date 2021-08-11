import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-record-detail-modal',
  templateUrl: './record-detail-modal.component.html',
  styleUrls: ['./record-detail-modal.component.scss'],
})
export class RecordDetailModalComponent implements OnInit {
  @Input() data: any;
  constructor(private moddalService: ModalService) {}

  ngOnInit() {
    setTimeout(() => {
      this.moddalService.closeModal();
    }, 2000);
  }
}
