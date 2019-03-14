import { ConsultaService } from './../../../services/consulta.service';
import { MedicoService } from './../../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import * as MedicoMock from "../../../mocks/medicos.mock";
import Consulta from 'src/app/models/consulta.model';
import Medico from 'src/app/models/medico.model';

@Component({
  selector: 'app-lista-consultas',
  templateUrl: './lista-consultas.component.html',
  styleUrls: ['./lista-consultas.component.scss']
})
export class ListaConsultasComponent implements OnInit {

  consultas: Consulta[];
  medicos: Medico[];
  checkModel: any = { left: false, right: false };

  constructor(
    private medicoService: MedicoService,
    private consultaService: ConsultaService,
  ) {
    this.consultas = consultaService.all();
    this.medicos = medicoService.all();
  }

  ngOnInit() {
  }

}
