import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AviaoService } from '../aviao.service';
import { Aviao } from '../aviao';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.component.html',
  styleUrls: ['./escolha.component.css']
})
export class EscolhaComponent {

  constructor(private aviaoService: AviaoService, private router: Router) {}

  avioes!: Aviao[];
  aviaoSelecionado!: Aviao;

  ngOnInit() {
    this.aviaoService.getAvioes().subscribe(avioes => {
      this.avioes = avioes;
    });
  }

  onSubmit(form: NgForm) {
    if (this.aviaoSelecionado) {
      this.router.navigate(['/detail', this.aviaoSelecionado]);
    }
  }

  cadastro(){
    this.router.navigate(['/cadastrar'])
  }

  selecionarOpcao(form: NgForm) {
    form.controls['aviaoSelecionado'].markAsTouched();
  }

}
