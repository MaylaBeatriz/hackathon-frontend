import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HackathonModel } from 'src/app/interfaces/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-cadastrar-hackathon',
  templateUrl: './cadastrar-hackathon.component.html',
  styleUrls: ['./cadastrar-hackathon.component.css'],
})
export class CadastrarHackathonComponent implements OnInit {
  hackathon: HackathonModel;
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    nota: new FormControl(0, Validators.required),
  });

  constructor(
    private service: HackathonService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  cadastrar() {
    this.hackathon = {
      nome: this.cadastroForm.get('nome')?.value,
      nota: this.cadastroForm.get('nota')?.value,
    };

    this.service.cadastrar(this.hackathon).subscribe(
      (response) => {
        this.toastr.success(response.mensagem);
      },
      (err) => this.toastr.error(err.mensagem)
    );
  }
}
