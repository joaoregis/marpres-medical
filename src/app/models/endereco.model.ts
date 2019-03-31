export default class Endereco {
  Cep: string;
  Numero: string;
  Logradouro: string;
  Complemento: string;
  Bairro: string;
  Localidade: string;
  UF: string;

  constructor(
    cep: string = "",
    numero: string = "",
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
    this.Numero = numero;
  }
}
