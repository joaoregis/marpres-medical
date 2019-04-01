import Consulta from "../models/consulta.model";
import Endereco from "../models/endereco.model";
import Medico from "../models/medico.model";

const consultas: Consulta[] = [
  {
    Id: 1,
    Nome: "Vinicius",
    Telefone: "(35) 3291-3866",
    Email: "vinicius@email.com",
    Data: "25/05/2019 13:30",
    Medico: new Medico(
      1,
      "ADRIANA APARECIDA LOURENCO",
      "Conselho Regional de Psicologia (CRP)",
      "45598",
      "P",
      "9082"
    ),
    Endereco: new Endereco(
      "37130776",
      "10 A",
      "Rua Joaquim Bernardes da Silva",
      "",
      "Jardim Aeroporto",
      "Alfenas",
      "MG"
    )
  },
  {
    Id: 2,
    Nome: "Joao",
    Telefone: "(35) 3291-3866",
    Email: "Joao@email.com",
    Data: "22/05/2019 14:30",
    Medico: new Medico(
      1,
      "ADRIANA APARECIDA LOURENCO",
      "Conselho Regional de Psicologia (CRP)",
      "45598",
      "P",
      "9082"
    ),
    Endereco: new Endereco(
      "37130776",
      "11 A",
      "Rua Joaquim Bernardes da Silva",
      "",
      "Jardim Aeroporto",
      "Alfenas",
      "MG"
    )
  },
  {
    Id: 3,
    Nome: "Maurício",
    Telefone: "(35) 3291-3866",
    Email: "Mauricio@email.com",
    Data: "25/05/2019 09:00",
    Medico: new Medico(
      1,
      "ADRIANA APARECIDA LOURENCO",
      "Conselho Regional de Psicologia (CRP)",
      "45598",
      "P",
      "9082"
    ),
    Endereco: new Endereco(
      "37130776",
      "12 A",
      "Rua Joaquim Bernardes da Silva",
      "",
      "Jardim Aeroporto",
      "Alfenas",
      "MG"
    )
  },
  {
    Id: 4,
    Nome: "Reneé",
    Telefone: "(35) 3291-3866",
    Email: "Renee@email.com",
    Data: "25/05/2019 13:30",
    Medico: new Medico(
      1,
      "ADRIANA APARECIDA LOURENCO",
      "Conselho Regional de Psicologia (CRP)",
      "45598",
      "P",
      "9082"
    ),
    Endereco: new Endereco(
      "37130776",
      "13 A",
      "Rua Joaquim Bernardes da Silva",
      "",
      "Jardim Aeroporto",
      "Alfenas",
      "MG"
    )
  }
];

export default consultas;
