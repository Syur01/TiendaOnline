import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-sexta-caja',
  templateUrl: './graphic-sexta-caja.component.html',
  styleUrls: ['./graphic-sexta-caja.component.scss']
})
export class GraphicSextaCajaComponent {

  redSociales = [
    {
      nombre: 'Facebook',
      cambio: 12,
      vistas: 1234500,
      totalUsuarios: 15234500,
      cambioUsuarios: 345000
    },
    {
      nombre: 'Instagram',
      cambio: 8,
      vistas: 3245000,
      totalUsuarios: 20543200,
      cambioUsuarios: 100000
    },
    {
      nombre: 'Twitter',
      cambio: -5,
      vistas: 987000,
      totalUsuarios: 7500000,
      cambioUsuarios: -50000
    },
    {
      nombre: 'TikTok',
      cambio: 25,
      vistas: 2500000,
      totalUsuarios: 10000000,
      cambioUsuarios: 500000
    },
    {
      nombre: 'YouTube',
      cambio: 2,
      vistas: 5000000,
      totalUsuarios: 50000000,
      cambioUsuarios: 200000
    }
  ];

  // Función para formatear números con comas (miles separator)
  formatNumber(value: number): string {
    return value.toLocaleString(); // Esto formatea el número añadiendo las comas
  }
}
