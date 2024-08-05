import { Component, EventEmitter, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  onEmitStatusChange= new EventEmitter();
  @Input() message: string ='';
  // details:any={}
  constructor(public modalService:NgbModal){

  }

  handleChangeAction(){
    this.onEmitStatusChange.emit();
  }

  // closeModal() {
  //   this.modalService.dismissAll();
  // }
}
