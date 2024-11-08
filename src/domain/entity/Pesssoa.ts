import { v4 }from 'uuid';

export class Pessoa{


    readonly id: string;
    readonly documento: string;
    
 
 constructor(readonly username: string, documento: string, id?: string){

    this.username = username;
    this.documento = documento;
    if(!id){
        id = v4();
    }
    this.id = id;
 }

 getUserName(): string{
    return this.username
}

getId(): string{
    return this.id
}

getDocumento(): string{
    return this.documento
}
}
