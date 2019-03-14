export default class Endereco {
  Cep: string;
  Logradouro: string;
  Complemento: string;
  Bairro: string;
  Localidade: string;
  UF: string;

  constructor(
    cep: string = "",
    logradouro: string = "",
    complemento: string = "",
    bairro: string = "",
    localidade: string = "",
    uf: string = ""
  ) {

    this.Cep = cep;
    this.Logradouro = logradouro;
    this.Complemento = complemento;
    this.Bairro = bairro;
    this.Localidade = localidade;
    this.UF = uf;
  }
}
