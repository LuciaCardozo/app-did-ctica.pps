import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //titulo = 'Tabla didactica de '+new TitleCasePipe().transform(this.auth.emailUsuarioLogeado.split('@')[0]);
  constructor(private route:Router, public shared:SharedService) {}

  clickEnImg(dato: string) {
    console.log(dato);
    this.route.navigate(['home/'+dato]);
  }
}
