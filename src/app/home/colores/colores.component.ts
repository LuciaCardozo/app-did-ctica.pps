import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
})
export class ColoresComponent  implements OnInit {
  audio = new Audio();
  constructor(public shared: SharedService) { }

  ngOnInit() {}

  seSeleccionoColor(dato:boolean, color: string){
    this.audio.src = this.shared.colores[color]
    this.audio.play()
  }
}
