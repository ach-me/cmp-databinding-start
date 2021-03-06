import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  // Para acceder al valor de ingresado en el elemento que tiene la referencia #serverContentInput, se antepone ViewChild, que es un decorador que recibe como parametro la referencia local
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    // El método "emit" emitirá un nuevo evento del tipo serverCreated
    //    
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
