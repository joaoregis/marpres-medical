import Consulta from '../models/consulta.model';
import Endereco from '../models/endereco.model';

const consultas: Consulta[] = [
    {
        Id: 1,
        Nome: "Vinicius",
        Telefone: "(35) 3291-3866",
        Email: "vinicius@email.com",
        Data: "25/05/2019 13:30",
        Profissional: "9082",
        Numero: "752",
        Medico: null,
        Endereco: new Endereco(
            "37130-776",
            "Rua Joaquim Bernardes da Silva",
            "",
            "Jardim Aeroporto",
            "Alfenas",
            "MG"
        )
    }, {
      Id: 2,
        Nome: "Joao",
        Telefone: "(35) 3291-3866",
        Email: "Joao@email.com",
        Data: "22/05/2019 14:30",
        Profissional: "405",
        Numero: "222",
        Medico: null,
        Endereco: new Endereco(
            "37130-776",
            "Rua Joaquim Bernardes da Silva",
            "",
            "Jardim Aeroporto",
            "Alfenas",
            "MG"
        )
    }, {
      Id: 3,
        Nome: "Maurício",
        Telefone: "(35) 3291-3866",
        Email: "Mauricio@email.com",
        Data: "25/05/2019 09:00",
          Profissional: "9082",
          Numero: "782",
          Medico: null,
          Endereco: new Endereco(
            "37130-776",
            "Rua Joaquim Bernardes da Silva",
            "",
            "Jardim Aeroporto",
            "Alfenas",
            "MG"
        )
    }, {
      Id: 4,
        Nome: "Reneé",
        Telefone: "(35) 3291-3866",
        Email: "Renee@email.com",
        Data: "25/05/2019 13:30",
        Profissional: "9082",
        Numero: "405",
        Medico: null,
        Endereco: new Endereco(
            "37130-776",
            "Rua Joaquim Bernardes da Silva",
            "",
            "Jardim Aeroporto",
            "Alfenas",
            "MG"
        )
    },
];

export default consultas;
