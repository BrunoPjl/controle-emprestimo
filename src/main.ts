import { config } from "dotenv";
import express, { request, response } from 'express';
import { Connection } from './infra/database/connection';
import { ItemController } from './application/controller/item-controller';

import { PostgresConnection } from './infra/database/postgres-connection';

import { DatabaseRepositoryFactory } from "./infra/database/database-repository-factory";
import { PersonController } from "./application/controller/person-controller";
import { UserController } from "./application/controller/user-controller";
import { TipoItemController } from "./application/controller/tipo-item-controller";
import { EmprestimoController } from "./application/controller/emprestimo-controller";

config();

const app = express();
const port = 3004;
const cors = require('cors')

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true 
}));


app.get('/', (request, response)=> {
    response.send('funciono');
})

app.use(express.json())
app.all('*', function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
			res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
			next();
		});

const dadosconexao = {
	user: process.env.DB_USERNAME || 'postgres',
	password: process.env.DB_PASSWORD || 'dev@123',
	database: process.env.DB_DATABASE || 'dosguri',
	host: process.env.DB_HOST || '159.89.46.66',
	port: process.env.DB_PORT || '5432'
}

console.log(dadosconexao)
const connectionPostgreSQL = new PostgresConnection(
	dadosconexao
);


const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);

const itemController = new ItemController(repositoryFactory);

const personController = new PersonController(repositoryFactory);

const usuarioController = new UserController(repositoryFactory);

const tipoItemController = new TipoItemController(repositoryFactory)

const emprestimoController = new EmprestimoController(repositoryFactory)

app.get('/pessoas', async (request, response) => {
	response.send(await personController.getAll({}));
})

app.get('/usuarios', async(request, response) =>{
	response.send(await usuarioController.getAll({}));	
});

app.get('/tipos_item', async(request, response) =>{
	response.send(await tipoItemController.getAll({}));
});

app.get('/emprestimos', async(request, response) =>{
	response.send(await emprestimoController.getAll({}));
})







app.get('/itens', async (request, response)=> {
   response.send( await itemController.getAll({}));
});



app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})



app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
});
