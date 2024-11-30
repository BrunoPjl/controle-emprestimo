import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetEmprestimosInput } from "./get-emprestimos-input";
import { GetAllEmprestimosOutput } from "./get-emprestimos-output";

export class GetEmprestimosUseCase{

    private emprestimoRepository: EmprestimoRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: GetItensInput): Promise<GetItensOutput[]> {
        const listaDeItems = await this.itemRepository.getAll();
        
        const output: GetItensOutput[] = [];

        for (const itemdalista of listaDeItems){
            output.push(
                {
                    id: itemdalista.getId(),
                    name: itemdalista.getName(),
                    tipoitem: {
                        id: itemdalista.getTipoItem().getId(),
                        name: itemdalista.getTipoItem().getName(),
                    
                    },
                    itemEpi: itemdalista.getItemEPI()
                }
            )
        }

        return output;
        
    }
}