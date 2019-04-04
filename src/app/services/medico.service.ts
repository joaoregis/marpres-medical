import { Injectable } from '@angular/core';
import Medicos from '../mocks/medicos.mock';
import Medico from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor() { }

  find(id: number): Medico {

    const doctor = Medicos.find((item: Medico) => {
      // tslint:disable-next-line: triple-equals
      return item.Id == id;
    });

    console.log(doctor)

    return doctor;
  }

  all(): Medico[] {
    return [...Medicos];
  }
}
