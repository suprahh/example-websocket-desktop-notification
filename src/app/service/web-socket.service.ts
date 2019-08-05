import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor() {
    // PNotifyButtons; // Initiate the module. Important!
    // PNotify.modules.Desktop.permission();

  }
  public connect() {
    const socket = new SockJS(`http://localhost:8080/websocket-backend/socket`);
    return Stomp.over(socket);
  }
}
