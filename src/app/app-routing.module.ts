import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarHackathonComponent } from './hackathon/cadastrar-hackathon/cadastrar-hackathon.component';
import { ListarHackathonComponent } from './hackathon/listar-hackathon/listar-hackathon.component';

const routes: Routes = [
  {
    path: '',
    component: ListarHackathonComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarHackathonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
