import { Item } from "../../../domain/entity/Item";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetEmprestimoInput } from "../get-emprestimo/get-emprestimo-input";
import { GetEmprestimoOutput } from "../get-emprestimo/get-emprestimo-output";
import { CreateEmprestimoInput } from "./create-emprestimo-input";

export class CreateEmprestimoUseCase {
    private itemRepository: ItemRepository;
    private itemTypeRepository: TipoItemRepository;
    private emprestimoRepository: EmprestimoRepository;
    private pessoaRepository: PessoaRepository;

    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.itemTypeRepository = repositoryFactory.createTipoItemRepository();
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    
    async execute(input: CreateEmprestimoInput) {
        if (!input.name) {
            throw new Error('Nome do item não informado');
        }
        if (!input.tipoItemId) {
            throw new Error('Tipo do item não informado');
        }

        const itemType = await this.itemTypeRepository.getById(input.tipoItemId);

        const item = new Item(input.name, itemType);

        await this.itemRepository.create(item);

        






        return {};


    }
}