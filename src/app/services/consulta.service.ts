import { Injectable } from '@angular/core';
import Consultas from '../mocks/consultas.mock';
import Consulta from '../models/consulta.model';
import { MedicoService } from './medico.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(
    private medicoService: MedicoService
  ) { }

  add(consulta: Consulta): void {
    Consultas.push(consulta);
  }

  remove(id: number): void {

    const consulta = Consultas.find((item: Consulta) => {
      return item.Id === id;
    });

    const indexConsulta = Consultas.indexOf(consulta);

    Consultas.splice(indexConsulta, 1);
  }

  find(id: number): Consulta {
    return Consultas.find((item: Consulta) => {
      return item.Id === id;
    });
  }

  all(): Consulta[] {

    const cons = [...Consultas];

    cons.forEach(item => {
      item.Medico =
        this.medicoService.find(item.Profissional);
    });

    return cons;
  }
}
