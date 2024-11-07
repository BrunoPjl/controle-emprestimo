import express, { request, response } from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipoitem-repository-memory';
import { UserController } from './application/controller/user-controller';
import { UsuarioRepositoryMemory } from './infra/repository/memory/usuario-repository-memory';

import { TipoItemController } from './application/controller/tipo-item-controller';
import { PersonController } from './application/controller/person-controller';
import { PessoaRepositoryMemory } from './infra/repository/memory/pessoa-repository-memory';
import ItemRepositoryDatabase from './infra/repository/database/item-repository-database';
import { TipoItemRepositoryDatabase } from './infra/repository/database/item-type-repository-database';






const app = express();
const port = 3004;

app.use(express.json())
app.get('/', (request, response)=> {
    response.send('funciono');
})
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory()
const itemRepositoryMemory = new ItemRepositoryMemory()
const itemController = new ItemController(ItemRepositoryDatabase, TipoItemRepositoryDatabase, )
const usuarioRepositoryMemory = new UsuarioRepositoryMemory()
const usuarioController = new UserController(usuarioRepositoryMemory)

const tipoItemcontroller = new TipoItemController(tipoItemRepositoryMemory)
const pessoaRepositoryMemory = new PessoaRepositoryMemory()
const personController = new PersonController(pessoaRepositoryMemory)


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
    response.send(usuarioController.create(request.body))})

app.post('/tipoitem',(request, response) =>{
    response.send(tipoItemcontroller.create(request.body))
})

app.get('/tipoitem',(request, response) => {
    response.send(tipoItemcontroller.getAll({}))
})


app.get('/pessoas',(request, response)=> {
    response.send(personController.getAll({}))
});

app.post('/pessoas', (request, response) => {
    response.send(personController.create(request.body));

})

app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
});
