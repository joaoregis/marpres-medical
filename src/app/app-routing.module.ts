import { CadastroConsultaComponent } from './components/features/cadastro-consulta/cadastro-consulta.component';
import { ListaConsultasComponent } from './components/features/lista-consultas/lista-consultas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/consultas', pathMatch: 'full' },
  { path: 'consultas', component: ListaConsultasComponent },
  { path: 'consultas/cadastrar', component: CadastroConsultaComponent },
  { path: 'consultas/editar/:id', component: CadastroConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
