import Endereco from './endereco.model';
import Medico from './medico.model';

export default class Consulta {
  Id: number;
  Nome: string;
  Telefone: string;
  Email: string;
  Data: string;
  Profissional: string;
  Numero: string;
  Medico: Medico;
  Endereco: Endereco;
}
