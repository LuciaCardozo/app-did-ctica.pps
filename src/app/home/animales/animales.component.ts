import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent  implements OnInit {
  seSelecciono: boolean = false;
  animalSeleccionado: string = '';
  audio = new Audio();
  constructor(public shared: SharedService) { }

  ngOnInit() {}

  seSeleccionoAnimal(dato:boolean, animal: string){
    this.audio.src = this.shared.animales[animal]
    this.audio.play()
    this.animalSeleccionado = '';
    this.seSelecciono = false;
    this.seSelecciono = dato;
    this.animalSeleccionado = animal;
    setTimeout(()=> {
      this.seSelecciono = !dato;
      
    },2000)
  }
}
