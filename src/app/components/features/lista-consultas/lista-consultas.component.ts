import { ConsultaService } from "./../../../services/consulta.service";
import { Component, OnInit } from "@angular/core";
import Consulta from "src/app/models/consulta.model";

@Component({
  selector: "app-lista-consultas",
  templateUrl: "./lista-consultas.component.html",
  styleUrls: ["./lista-consultas.component.scss"]
})
export class ListaConsultasComponent implements OnInit {
  consultas: Consulta[];

  constructor(private consultaService: ConsultaService) {
    this.consultas = consultaService.all();
  }

  ngOnInit() {}

  remove(id: number): void {
    this.consultaService.remove(id);
  }
}
