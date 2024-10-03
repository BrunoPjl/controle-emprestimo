import express, { request, response } from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipoitem-repository-memory';
import { PersonController } from './application/controller/person-controller';
import { PessoaRepositoryMemory } from './infra/repository/memory/pessoa-repository-memory';





const app = express();
const port = 3004;

app.use(express.json())
app.get('/', (request, response)=> {
    response.send('funciono');
})
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory()
const itemRepositoryMemory = new ItemRepositoryMemory()
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory)
const pessoaRepositoryMemory = new PessoaRepositoryMemory()
const personController = new PersonController(pessoaRepositoryMemory)

app.get('/itens', (request, response)=> {
   response.send( itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})
app.get('/pessoas',(request, response)=> {
    response.send(personController.getAll({}));
})

app.post('/pessoas', (request, response) => {
    response.send(personController.create(request.body));
})

app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
})
