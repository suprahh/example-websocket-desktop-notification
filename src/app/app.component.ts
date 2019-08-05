import { Component } from '@angular/core';
import {WebSocketService} from './service/web-socket.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyDesktop from 'pnotify/dist/es/PNotifyDesktop';
PNotify.defaults.styling = 'bootstrap3'; // Bootstrap version 3
PNotify.defaults.icons = 'bootstrap3'; // glyphicons

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket-front-end';
  public notifications = 0;
  constructor(private webSocketService: WebSocketService) {

    // Open connection with server socket
    const stompClient = this.webSocketService.connect();
    stompClient.debug = null;
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification', notifications => {
        this.notifications = JSON.parse(notifications.body).count;
        console.log(PNotify);
        PNotifyDesktop;
        // PNotify.alert({
        //   text: "I'm an alert.",
        //   type: 'notice'
        // });
        PNotify.notice({
          title: 'Categorias Paris.cl',
          text: `Tienes ${this.notifications} nuevas categorias para definir su Tipo de producto`,
          modules: {
            Desktop: {
              desktop: true
            }
          }
        });
        // Update notifications attribute with the recent messsage sent from the server

      });
    });
  }
}
