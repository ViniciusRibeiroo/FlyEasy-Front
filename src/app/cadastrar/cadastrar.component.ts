import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  constructor(private router: Router) {}

  hangar(){
    this.router.navigate(['/hangar'])
  }
  aviao(){
    this.router.navigate(['/aviao'])
  }
  usuario(){
    this.router.navigate(['/usuario'])
  }
  voltar(){
    this.router.navigate(['/login'])
  }
}
