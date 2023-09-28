import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aviao } from '../aviao';
import { AviaoService } from '../aviao.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrls: ['./aviao.component.css']
})
export class AviaoComponent {
  aviao: Aviao = { _id: '', name: '', preco: 0, consumo: 212, velocidade: 850, jetA: false, jetA1: false, jetB: false};
  createdAviao?: Aviao;

  constructor(private aviaoService: AviaoService, private route: ActivatedRoute, private router: Router) {}

  onSubmit(form: NgForm) {
    if(this.aviao.jetA){
      this.aviao.jetA = true;
    }if(this.aviao.jetA1){
      this.aviao.jetA1 = true;
    }if(this.aviao.jetB){
      this.aviao.jetB = true;
    }

    this.aviaoService.createAviao(this.aviao).subscribe({
      next: (h) => {
        this.createdAviao = h;
        alert("Aeronave "+ this.aviao.name + " criado com sucesso!");
        this.aviao = { _id: '', name: '', preco: 0, consumo: 0, velocidade: 0, jetA: false, jetA1: false, jetB: false}
      },
      error: (error) => {
        if (error.status == 500) {
          console.log(error);
           this.router.navigate(['ohno', error.error.message])
        }
      }
    });
  }

  voltar(){
    this.router.navigate(['/cadastrar'])
  }

}
