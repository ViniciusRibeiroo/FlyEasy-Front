import { Component } from '@angular/core';
import { AviaoService } from '../aviao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Aviao } from '../aviao';

@Component({
  selector: 'app-imposto',
  templateUrl: './imposto.component.html',
  styleUrls: ['./imposto.component.css']
})
export class ImpostoComponent {
  aviao!: Aviao;
  meses: number = 12;
  radio: number = 800;
  seguro: number = 600;
  manu: number = 0;
  total: number = this.radio + this.seguro + this.manu;
  cont!: number;
  ano!: number;
  moedaSelect!: string;
  valorDolarBR!: number;
  valorDolarEU!: number;

  constructor(private aviaoService: AviaoService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.valorDolarApi();
    const aviaoId = this.route.snapshot.paramMap.get('id');
    if(aviaoId){
      this.aviaoService.getAviao(aviaoId).subscribe(aviao => {
        this.aviao = aviao;
      });
    }
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

  mes(){
    this.seguro = 600;
    this.radio = 800;
    this.cont = 0;
    this.manu = 0;

    if(this.meses >= 60){
      this.manu = 0.15 * this.aviao.preco;
    }

    this.calculo();

    this.total = this.seguro + this.radio + this.manu
  }

  calculo(){
    this.cont = this.meses;

    while(this.cont > 12){
      this.seguro += 600;
      this.radio += 800;
      this.cont -= 12
    }

    // while(this.cont >= 60){
    //   this.manu = 0.15 * this.aviao.preco;
    //   this.cont -= 60
    // }
  }

  voltar(){
    history.back();
  }

}
