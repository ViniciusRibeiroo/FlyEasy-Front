import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    OhNoComponent,
    LoginComponent,
    HangarComponent,
    EscolhaComponent,
    DetailComponent,
    CadastrarComponent,
    AviaoComponent,
    UsuarioComponent,
    AllHangaresComponent,
    ImpostoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
