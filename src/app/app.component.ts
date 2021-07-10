import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {

    this.primengConfig.ripple = true;

  }

  nombre: string = 'Manuel Maleras';
  valor: number = 1000;
  obj = {
    nombre: 'Manuel'
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
