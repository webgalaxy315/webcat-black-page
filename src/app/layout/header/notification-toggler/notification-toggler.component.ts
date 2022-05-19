import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-toggler',
  templateUrl: './notification-toggler.component.html',
  styleUrls: ['./notification-toggler.component.scss']
})
export class NotificationTogglerComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
