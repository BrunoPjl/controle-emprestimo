import { RepositoryFactory } from '../../../domain/repository/repository-factory';
import { GetEmprestimosInput } from './get-emprestimos-input';
import { GetEmprestimosOutput } from './get-emprestimos-output';
import { EmprestimoRepository } from '../../../domain/repository/emprestimo-repository';
import { TipoItem } from '../../../domain/entity/TipoItem';

export class GetEmprestimosUseCase {
  private emprestimoRepository: EmprestimoRepository;

  constructor(private repositoryFactory: RepositoryFactory) {
    this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
  }

  private tipoItemToOutput(tipoItem: TipoItem) {
    return {
      id: tipoItem.getId(),
      name: tipoItem.getName()
    };
  }

  async execute(input: GetEmprestimosInput): Promise<GetEmprestimosOutput[]> {
    try {
      const listaDeItems = await this.emprestimoRepository.getAll();
      const output: GetEmprestimosOutput[] = [];

      for (const itemdalista of listaDeItems) {
        if (itemdalista.getTipoItem()) {
          output.push({
            id: itemdalista.getId(),
            tipoItem: this.tipoItemToOutput(itemdalista.getTipoItem()),
            item: {
              id: itemdalista.getItem().getId(),
              nome: itemdalista.getItem().getName(),
              tipoItem: itemdalista.getItem().getTipoItem(),
              itemEPI: itemdalista.getItem().getItemEPI()
            },
            dataEmprestimo: itemdalista.getDataEmprestimo(),
            dataDevolucao: itemdalista.getDataDevolucao(),
            pessoa: {
              id: itemdalista.getPessoa().getId(),
              nome: itemdalista.getPessoa().getUserName(),
              documento: itemdalista.getPessoa().getDocumento()
            },
            usuario: {
              id: itemdalista.getUsuario().getId(),
              username: itemdalista.getUsuario().getName(),
              senha: itemdalista.getUsuario().getSenha(),
              pessoa: {
                id: itemdalista.getUsuario().getPessoa().getId(),
                nome: itemdalista.getUsuario().getPessoa().getUserName(),
                documento: itemdalista.getUsuario().getPessoa().getDocumento()
              }
            }
          });
        } else {
          console.log("TipoItem não encontrado para item", itemdalista.getId());
        }
      }

      return output;
    } catch (error) {
      console.error("Erro ao executar a função:", error);
      throw new Error("Não foi possível obter a lista de empréstimos.");
    }
  }
}