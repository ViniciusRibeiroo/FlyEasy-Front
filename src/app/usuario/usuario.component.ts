import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  user: User = { _id: '', name: '', email: '', senha: '', cpf: '', numero: ''};
  createdUser?: User;

  constructor(private userSevice: UserService, private route: ActivatedRoute, private router: Router) {}


  onSubmit(form: NgForm) {
    this.userSevice.createUser(this.user).subscribe({
      next: (h) => {
        this.createdUser = h;
        alert("Usuário "+ this.user.name + " criado com sucesso!");
        this.user = { _id: '', name: '', email: '', senha: '', cpf: '', numero: ''};
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

