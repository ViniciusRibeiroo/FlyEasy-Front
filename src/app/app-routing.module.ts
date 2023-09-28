import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OhNoComponent } from './oh-no/oh-no.component';

import { LoginComponent } from './login/login.component';
import { HangarComponent } from './hangar/hangar.component';
import { EscolhaComponent } from './escolha/escolha.component';
import { DetailComponent } from './detail/detail.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AviaoComponent } from './aviao/aviao.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AllHangaresComponent } from './all-hangares/all-hangares.component';
import { ImpostoComponent } from './imposto/imposto.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ohno/:message', component: OhNoComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hangar/:id', component: HangarComponent },
  { path: 'hangares', component: AllHangaresComponent },
  { path: 'imposto/:id', component: ImpostoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'hangar', component: HangarComponent },
  { path: 'escolha', component: EscolhaComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'aviao', component: AviaoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
