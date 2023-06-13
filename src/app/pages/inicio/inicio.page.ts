import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //componentes: any[] = [];
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },

    {
      icon: 'accessibility-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'pencil-outline',
      name: 'Input',
      redirectTo: '/input',
    },

    {
      icon: 'paper-plane-outline',
      name: 'Button',
      redirectTo: '/button',
    },
  ];

  constructor(private menuCtrl: MenuController) {}
  ngOnInit() {}
  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}
