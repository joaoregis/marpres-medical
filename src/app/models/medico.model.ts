export default class Medico {

  Id: number;
  Nome: string;
  Descricao: string;
  NConselho: string;
  Tipo: string;
  Profissional: string;

  constructor(
    id: number = 0,
    nome: string = "",
    desc: string = "",
    ncons: string = "",
    tipo: string = "",
    prof: string = "",
  ) {

    this.Id = id;
    this.Nome = nome;
    this.Descricao = desc;
    this.NConselho = ncons;
    this.Tipo = tipo;
    this.Profissional = prof;

  }

}
