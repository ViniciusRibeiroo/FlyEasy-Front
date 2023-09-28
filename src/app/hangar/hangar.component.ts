import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hangar } from '../hangar';
import { HangarService } from '../hangar.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent {
  hangar: Hangar = { _id: '', name: '', cep: '', logradouro: '', numero: '', bairro:'', area: '', valor: '', hora: ''};
  createdHangar?: Hangar;
  hangarId!: string;
  detalhe?: boolean;

  constructor(private hangarService: HangarService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.detalhe = true;
        this.hangarId = id;
        this.hangarService.getHangar(this.hangarId).subscribe(data => {
          this.hangar = {
          _id: id,
          name: data.name,
          cep: data.cep,
          logradouro: data.logradouro,
          numero: data.numero,
          bairro: data.bairro,
          area: data.area,
          valor: data.valor,
          hora: data.hora
        };
      });
    }
  });
  }

  onSubmit(form: NgForm) {
    this.hangarService.createHangar(this.hangar).subscribe({
      next: (h) => {
        this.createdHangar = h;
        alert("Hangar "+ this.hangar.name + " criado com sucesso!");
        this.hangar = { _id: '', name: '', cep: '', logradouro: '', numero: '', bairro:'', area: '', valor: '', hora: ''};
      },
      error: (error) => {
        if (error.status == 500) {
          console.log(error);
           this.router.navigate(['ohno', error.error.message])
        }
      }
    });
  }

  cadastrar(){
    this.router.navigate(['/cadastrar'])
  }

  voltar(){
    this.detalhe = false;
    history.back();
  }

  hangares() {
    this.router.navigate(['/hangares']);
  }

}
