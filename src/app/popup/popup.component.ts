// popup.component.ts

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
scheduleAppointment() {
throw new Error('Method not implemented.');
}
  @Input() title: string = 'Message';
  @Input() message: string = 'Default message';
  @Input() appointmentDate: string = ''; 
  @Input() appointmentTime: string = '';
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  
  
}
