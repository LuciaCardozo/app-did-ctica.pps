import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent  implements OnInit {
  audio = new Audio();
  constructor(public shared: SharedService) { }

  ngOnInit() {}
  
  seSeleccionoNumero(dato:boolean, numero: string){
    this.audio.src = this.shared.numeros[numero]
    this.audio.play()
  }
}
