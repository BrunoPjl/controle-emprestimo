//import { config } from "dotenv";
import express, { request, response } from 'express';
import { Connection } from './infra/database/connection';
import { TipoItemRepository } from "./domain/repository/tipo-item-repository";
import { ItemController } from './application/controller/item-controller';
import { UserController } from './application/controller/user-controller';
import { EmprestimoController } from './application/controller/emprestimo-controller';
import { TipoItemController } from './application/controller/tipo-item-controller';
import { PersonController } from './application/controller/person-controller';
import { RepositoryFactory } from './domain/repository/repository-factory';
import PessoaRepositoryDatabase from './infra/repository/database/pessoa-repository-database';
import EmprestimoRepositoryDatabase from './infra/repository/database/empresimo-repository-database';
import { TipoItemRepositoryDatabase } from './infra/repository/database/tipo-item-repository-database';
import { PostgresConnection } from './infra/database/postgres-connection';
import ItemRepositoryDatabase from './infra/repository/database/item-repository-database';
import { DatabaseRepositoryFactory } from "./infra/database/database-repository-factory";

//config();

const app = express();
const port = 3004;


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
	user: process.env.DB_USERNAME || '',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || '',
	host: process.env.DB_HOST || '',
	port: process.env.DB_PORT || ''
}

console.log(dadosconexao)
const connectionPostgreSQL = new PostgresConnection(
	dadosconexao
);


const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);

const itemController = new ItemController(repositoryFactory);







app.get('/itens', (request, response)=> {
   response.send( itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})



app.listen(port, () => {
    console.log("servidor iniciado na porta : "+ port)
});
