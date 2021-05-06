import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HackathonModel } from 'src/app/interfaces/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-listar-hackathon',
  templateUrl: './listar-hackathon.component.html',
  styleUrls: ['./listar-hackathon.component.css'],
})
export class ListarHackathonComponent implements OnInit {
  alunos: HackathonModel[];

  constructor(
    private service: HackathonService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  irCadastro() {
    this.router.navigate(['/cadastrar']);
  }

  excluir(aluno: HackathonModel) {
    this.service.excluir(aluno.id).subscribe(() => {
      const index = this.alunos.findIndex((a) => a.id === aluno.id);
      this.alunos.splice(index, 1);
      this.toastr.success(`Excluido com sucesso!`);
    });
  }
}
