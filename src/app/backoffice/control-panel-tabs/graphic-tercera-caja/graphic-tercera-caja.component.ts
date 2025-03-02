import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-tercera-caja',
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrls: ['./graphic-tercera-caja.component.scss']
})
export class GraphicTerceraCajaComponent {

  satisfaction: number = 99.51; // Porcentaje de satisfacción del cliente
  trend: number = 12.4; // Cambio o tendencia (en %)
  previous: number = 54.84; // Valor previo de satisfacción

}
