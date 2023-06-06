import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  message: any = {};
  // latitude=33.886917;
  // longitude=9.537499;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  
  sendMessage() {
    this.messageService.sendMessage(this.message).subscribe()
  }
}
