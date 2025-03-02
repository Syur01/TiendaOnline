import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile-icon',
  templateUrl: './my-profile-icon.component.html',
  styleUrls: ['./my-profile-icon.component.scss']
})
export class MyProfileIconComponent {
  user = {
    name: 'Laura Gómez',
    age: 28,
    gender: 'Femenino',
    location: 'Madrid, España',
    occupation: 'Profesional de Marketing Digital',
    avatar: '', 
    frustration: 'Demora en el envío y falta de opciones de pago.',
    goals: ['Realizar compras rápidas y fáciles', 'Buscar promociones y descuentos'],
    techSkills: ['Habilidades con dispositivos móviles', 'Familiarizada con ecommerce'],
    previousPurchases: [
      { product: 'Smartphone Samsung Galaxy', category: 'Electrónica', price: 550 },
      { product: 'Vestido de verano', category: 'Moda', price: 45 },
      { product: 'Auriculares Bluetooth', category: 'Tecnología', price: 80 }
    ]
  };

  satisfaction: number = 65.51; 
  trend: number = 12.4; 
  previous: number = 54.84; 
}
