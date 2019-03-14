import { Injectable } from '@angular/core';
import Medicos from '../mocks/medicos.mock';
import Medico from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor() { }

  add(medico: Medico): void {
    Medicos.push(medico);
  }

  remove(id: string): void {

    const medico = Medicos.find((item: Medico) => {
      return item.Profissional === id;
    });

    const indexMedico = Medicos.indexOf(medico);

    Medicos.splice(indexMedico, 1);
  }

  find(id: string): Medico {
    return Medicos.find((item: Medico) => {
      return item.Profissional === id;
    });
  }

  all(): Medico[] {
    return [...Medicos];
  }
}
