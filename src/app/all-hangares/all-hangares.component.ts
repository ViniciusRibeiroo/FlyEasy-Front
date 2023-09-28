import { Component } from '@angular/core';
import { HangarService } from '../hangar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hangar } from '../hangar';

@Component({
  selector: 'app-all-hangares',
  templateUrl: './all-hangares.component.html',
  styleUrls: ['./all-hangares.component.css']
})
export class AllHangaresComponent {
  hangares!: Hangar[];


  constructor(
    private hangarService: HangarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHangares();
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

  voltar(){
    history.back();
  }

}
