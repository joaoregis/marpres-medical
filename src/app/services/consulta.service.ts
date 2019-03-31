import { Injectable } from "@angular/core";
import Consultas from "../mocks/consultas.mock";
import Consulta from "../models/consulta.model";

@Injectable({
  providedIn: "root"
})
export class ConsultaService {
  constructor() {}

  add(consulta: Consulta): void {
    consulta.Id = Consultas.length + 1;
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
    return Consultas;
  }
}
