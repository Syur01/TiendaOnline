import { Component } from '@angular/core';

@Component({
  selector: 'app-my-password-icon',
  imports: [],
  templateUrl: './my-password-icon.component.html',
  styleUrl: './my-password-icon.component.scss'
})
export class MyPasswordIconComponent {
  user = {
    name: 'Bryan Perez',
    email: 'syur456@gmail.com',
    phoneNumber: '+34624487092',
    passwordStatus: '**********',
    twoFactorEnabled: false,
    accountInDanger: false
  };
}
