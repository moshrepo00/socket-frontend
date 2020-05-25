import { Component, OnInit } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-socket-app',
  templateUrl: './socket-app.component.html',
  styleUrls: ['./socket-app.component.scss']
})
export class SocketAppComponent implements OnInit {

  currentMessage = this.socket.fromEvent('commit');

  constructor(private socket: Socket) {
  }
  socketEmit() {
    this.socket.emit('getCommit');
    // this.socket.emit('message', 'test message');
  }

  ngOnInit() {
    this.currentMessage.subscribe(message => console.log(message));
  }

}
