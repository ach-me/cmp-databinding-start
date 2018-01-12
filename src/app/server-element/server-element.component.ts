import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Para permitir que un componente padre pueda bindear esta propiedad, es necesario agregar un Decorator. @Input()
  // En los parametros se le puede pasar un alias, el cual reemplaza al nombre de la propiedad afuera de este componente
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }

  constructor() { }

  ngOnInit() {
  }

}
