import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AviaoService } from '../aviao.service';
import { Aviao } from '../aviao';
import { HangarService } from '../hangar.service';
import { Hangar } from '../hangar';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  aviao!: Aviao;
  hangares!: Hangar[];
  moedaSelect!: string;
  combSelect!: number;
  combName!: string;
  kmSelect!: number;
  distancia!: number;
  totalEU!: number;
  valorDolarBR!: number;
  valorDolarEU!: number;
  escolha!: string;


  price!: number;

  constructor(private aviaoService: AviaoService,
    private hangarService: HangarService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.valorDolarApi();
    this.getHangares();
    const aviaoId = this.route.snapshot.paramMap.get('id');
    if(aviaoId){
      this.aviaoService.getAviao(aviaoId).subscribe(aviao => {
        this.aviao = aviao;
      });
    }
  }

  combChange(){
    if(this.escolha == "Querosene JET A"){
      this.combSelect = 1;
    }
    if(this.escolha == "Querosene JET A-1"){
      this.combSelect = 2;
    }
    if(this.escolha == "Querosene JET B"){
      this.combSelect = 3;
    }

    if (this.combSelect == 1){
      this.combSelect = 4.75 * this.aviao.consumo;
      this.combName = "Querosene JET A"
      this.kmSelect = 4.75 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);

    }
    if (this.combSelect == 2){
      this.combSelect = 3.71 * this.aviao.consumo;
      this.combName = "Querosene JET A-1"
      this.kmSelect = 3.71 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);

    }
    if (this.combSelect == 3){
      this.combSelect = 5.3 * this.aviao.consumo;
      this.combName = "Querosene JET B"
      this.kmSelect = 5.3 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);

    }
  }

  kmChange(){
    if (this.combSelect == 1){
      this.kmSelect = 4.75 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
      console.log("1")

    }
    if (this.combSelect == 2){
      this.kmSelect = 3.71 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
      console.log("2")

    }
    if (this.combSelect == 3){
      this.kmSelect = 5.3 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
      console.log("3")

    }
    console.log("km")
  }

  getHangares() {
    this.hangarService.getHangares().subscribe(
      hangares => this.hangares = hangares,
      error => console.log(error)
    );
 }

  obterInformacoesHangar(hangarId: string) {
    this.router.navigate(['/hangar', hangarId]);
  }

  valorDolarApi(){
  this.http.get<any>('https://api.exchangerate-api.com/v4/latest/USD').subscribe(
    response => {
      this.valorDolarBR = response.rates.BRL;
    }
  )
  this.http.get<any>('https://api.exchangerate-api.com/v4/latest/BRL').subscribe(
    response => {
      this.valorDolarEU = response.rates.EUR;
    }
  )
  }

  calculo(){
    if (this.combSelect == 1){
      this.kmSelect = 4.75 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
    }
    if (this.combSelect == 2){
      this.kmSelect = 3.71 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
    }
    if (this.combSelect == 3){
      this.kmSelect = 5.3 * this.aviao.consumo * (this.distancia / this.aviao.velocidade);
    }

    if(this.moedaSelect == "Euro"){
      this.totalEU = this.kmSelect * this.valorDolarEU
    }
  }

  imposto(aviaoId: string){
    this.router.navigate(['/imposto', aviaoId]);
  }

}
