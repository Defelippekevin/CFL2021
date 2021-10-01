import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Comentario from './Comentario';


@Injectable()
export class ComentarioService {
    private listaComentarios: Comentario[]=[];

    public constructor(){
        this.loadComentarios();
    }

    public getComentarios():Comentario[]{
        return this.listaComentarios;
    }

    public getComentario(id):Comentario{
        let coment=null;
        for(let i=0;i<this.listaComentarios.length;i++){
            if(this.listaComentarios[i].getId()==id){
                return this.listaComentarios[i];
            }
        }
        return null;
    }
    
    public create(comentario:any){
        const coment= new Comentario(comentario['postId'], comentario['id'], comentario['name'], comentario['email'], comentario['body'])

        if(coment.getPostId() && coment.getId() && coment.getName() && coment.getEmail() && coment.getBody()){
            this.listaComentarios.push(coment);
           /*
            fs.appendFileSync('Comentarios.csv',
            '\n'+coment.getPostId()+ ',' + coment.getId() + ','+ coment.getName() + ',' + coment.getEmail() + ','+ coment.getBody());
            */
            this.guardarDatos();
            return "ok";
        }
        return "parametros incorrectos";
    }

    public deleteComentario(id:number){
        this.listaComentarios.splice(id-1,1);
        this.guardarDatos();
    }

    public updateComentario(id:number,comentario:any):boolean{
        let posicion = this.listaComentarios.findIndex(p => p.getId() === id);

        if(posicion>-1){
            const coment = new Comentario(comentario.postId, comentario.id, comentario.name, comentario.email, comentario.body);
            this.listaComentarios[posicion]=coment;

            this.guardarDatos();
            return true;
        }
        return false;

    }
    //FUNCIONES PRIVADAS
    private loadComentarios(){
        let archivo = fs.readFileSync('Comentarios.csv', 'utf8');
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
       // this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i]);
            
        let comentario = new Comentario(parseInt(elementos[i][0]),
        parseInt(elementos[i][1]),(elementos[i][2]),(elementos[i][3]),(elementos[i][4]));
        this.listaComentarios.push(comentario);
        }
    }


    private guardarDatos(){
        let datos:string = '';

        for(let comentario of this.listaComentarios){
            datos+= `\r\n${comentario.getPostId()},${comentario.getId()},${comentario.getName()},${comentario.getEmail()},${comentario.getBody()}`
        }
        fs.writeFileSync('Comentarios.csv',datos.substr(2));
    }
}
