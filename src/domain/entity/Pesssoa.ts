import { v4 }from 'uuid';

export class Pessoa{

    
    readonly id: string
    readonly username: string
    readonly documento: string

 constructor( id: string, username: string, documento: string )
 {

   
    if(!id){
        id = v4();
    }
    this.id = id;
    this.username = username;
    this.documento = documento;
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




