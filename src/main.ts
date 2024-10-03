import express, { request, response } from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipoitem-repository-memory';
import { UserController } from './application/controller/user-controler';
import { UsuarioRepositoryMemory } from './infra/repository/memory/usuario-repository-memory';

const app = express();
const port = 3004;

app.use(express.json())
app.get('/', (request, response)=> {
    response.send('funciono');
})
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory()
const itemRepositoryMemory = new ItemRepositoryMemory()
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory)
const usuarioRepositoryMemory = new UsuarioRepositoryMemory()
const usuarioController = new UserController(usuarioRepositoryMemory)

app.get('/itens', (request, response)=> {
   response.send( itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})

app.get('/usuario', (request, response) =>{
    response.send(usuarioController.getAll({}))
})

app.post('/usuario', (request, response) =>{
    response.send(usuarioController.create(request.body))
})

app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
})
