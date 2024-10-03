import express, { request, response } from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipoitem-repository-memory';
import { TipoItemController } from './application/controller/tipo-item-controller';

const app = express();
const port = 3004;

app.use(express.json())
app.get('/', (request, response)=> {
    response.send('funciono');
})
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory()
const itemRepositoryMemory = new ItemRepositoryMemory()
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory)
const tipoItemcontroller = new TipoItemController(tipoItemRepositoryMemory)

app.get('/itens', (request, response)=> {
   response.send( itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})


app.post('/tipoitem',(request, response) =>{
    response.send(tipoItemcontroller.create(request.body))
})

app.get('/tipoitem', (request, response) =>{
    response.send(tipoItemcontroller.getAll({}))
})

app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
})
