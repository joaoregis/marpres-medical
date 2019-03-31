import { ConsultaService } from "./../../../services/consulta.service";
import Consulta from "src/app/models/consulta.model";
import Medico from "src/app/models/medico.model";
import Endereco from "src/app/models/endereco.model";
import { Component, OnInit } from "@angular/core";
import { MedicoService } from "src/app/services/medico.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cadastro-consulta",
  templateUrl: "./cadastro-consulta.component.html",
  styleUrls: ["./cadastro-consulta.component.scss"]
})
export class CadastroConsultaComponent implements OnInit {
  selectedDoctor = 0;
  doctors: Medico[];
  endereco: Endereco;
  consulta: Consulta;
  id: number;

  constructor(
    private medicoService: MedicoService,
    private consultaService: ConsultaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.doctors = this.medicoService.all();

    this.consulta = new Consulta();
    this.consulta.Endereco = new Endereco();

    this.id = +this.route.snapshot.paramMap.get("id");
    if (this.id > 0) {
      this.consulta = consultaService.find(this.id);
      this.selectedDoctor = this.consulta.Medico.Id;
    }
  }

  editar() {
    const doctor = [...this.doctors]
      // tslint:disable-next-line: triple-equals
      .filter(element => element.Id == this.selectedDoctor)
      .shift();

    if (!doctor) {
      alert("Selecione um Médico");
    }

    this.consulta.Medico = doctor;

    this.router.navigate(["/consultas"]);
  }

  cadastrar() {
    const doctor = [...this.doctors]
      // tslint:disable-next-line: triple-equals
      .filter(element => element.Id == this.selectedDoctor)
      .shift();

    if (!doctor) {
      alert("Selecione um Médico");
    }

    this.consulta.Medico = doctor;

    this.consultaService.add({ ...this.consulta });

    this.router.navigate(["/consultas"]);
  }

  validarCep(cep: string): boolean {
    let valid = true;

    if (cep.length !== 8) {
      valid = false;
    }

    if (!/^\d+$/.test(cep)) {
      valid = false;
    }

    return valid;
  }

  buscarCep() {
    const { Cep } = this.consulta.Endereco;

    if (!this.validarCep(Cep)) {
      alert("Cep inválido.");
      return;
    }

    try {
      fetch(`https://viacep.com.br/ws/${Cep}/json/`)
        .then(json => json.json())
        .then(response => {
          this.consulta.Endereco.Cep = response.cep;
          this.consulta.Endereco.Complemento = response.complemento;
          this.consulta.Endereco.Bairro = response.bairro;
          this.consulta.Endereco.Localidade = response.localidade;
          this.consulta.Endereco.Logradouro = response.logradouro;
          this.consulta.Endereco.UF = response.uf;
        })
        .catch(error => {});
    } catch (error) {
      alert("Cep inválido. Tente o formato 00000-000");
    }
  }

  ngOnInit() {}
}
