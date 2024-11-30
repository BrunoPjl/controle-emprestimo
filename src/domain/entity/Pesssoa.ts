import { v4 }from 'uuid';

export class Pessoa{

    
    
    
 
 constructor( readonly username: string,readonly documento: string, readonly id: string)
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




