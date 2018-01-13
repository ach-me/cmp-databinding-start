import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Se necesita que estas propiedades sean eventos. 
  // Para ello se creará un objeto "eventemmiter" que permite ejecutar eventos propios
  // EventEmitter es de tipo generico. Adentro se define el tipo de dato del evento que se va a emitir. En este caso el tipo de dato será el que se espera desde app-component es un objeto.  
  // Para que estas propiedades sean reconocidas fuera de este componente, es necesario agregar el decorator @Output
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // El método "emit" emitirá un nuevo evento del tipo serverCreated
    // 
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }
}
