import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
  icon1:string;
  name1:string;
  redirectTo1:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[] = [
    {
      icon:"skull-outline",
      name:"Action-sheet",
      redirectTo:"/action",
      icon1:"logo-octocat",
      name1:"Alert",
      redirectTo1:"/alert"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
