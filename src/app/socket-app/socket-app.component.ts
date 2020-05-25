import { Component, OnInit } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-socket-app',
  templateUrl: './socket-app.component.html',
  styleUrls: ['./socket-app.component.scss']
})
export class SocketAppComponent implements OnInit {

  currentMessage = this.socket.fromEvent('commit');

  commits: any;

  endpoint = 'http://localhost:8080/commits';

  constructor(private socket: Socket, private http: HttpClient) {
  }
  // socketEmit() {
  //   this.socket.emit('getCommit');
  //   // this.socket.emit('message', 'test message');
  // }

  ngOnInit() {
    this.http.get(this.endpoint).subscribe(data => this.commits = data);
    this.currentMessage.subscribe((messages) => {
      console.log('latest messages', messages);
      this.commits = messages;
    });
  }

}


