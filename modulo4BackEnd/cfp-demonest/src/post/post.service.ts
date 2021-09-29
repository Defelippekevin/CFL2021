import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Post from './Post';


@Injectable()
export class PostService {
    private listaPost:Post []=[];

    public constructor(){
        this.loadPost()
    }


    public getPosts():Post[]{
        return this.listaPost;
    }

    public getPost(id:number):Post{
        let post=null;
        for(let i=0;i<this.listaPost.length;i++){
            if(this.listaPost[i].getId()==id){
                return this.listaPost[i];
            }
        }
        return null;
    }

    public create(post:any){
        const posteo = new Post(post['userId'], post['id'], post['title'], post['body'])

        if(posteo.getUserId() && posteo.getId() && posteo.getTitle() && posteo.getBody()){
            this.listaPost.push(posteo);
            fs.appendFileSync('Post.csv',
            '\n'+posteo.getUserId()+ ',' + posteo.getId() + ','+ posteo.getTitle() + ',' + posteo.getBody());
            this.guardarDatos();
            return "ok";
        }

        return "parametros incorrectos";
    }

    public delPost(id:number){
        this.listaPost.splice(id-1,1);
        this.guardarDatos();
    }

    public updatePost(id:number,post:any):boolean{
        let posicion = this.listaPost.findIndex(p => p.getId() === id);

        if(posicion>-1){
            const posteo = new Post(post.userId, post.id, post.title, post.body);
            this.listaPost[posicion]=posteo;
            
            this.guardarDatos();
            return true;
        }

        return false;
    }



    //FUNCIONES PRIVADAS
    private loadPost(){
        let archivo = fs.readFileSync('Post.csv', 'utf8');
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
       // this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i]);
            
        let post = new Post(parseInt(elementos[i][0]),
        parseInt(elementos[i][1]),(elementos[i][2]),(elementos[i][3]));
        this.listaPost.push(post);
        }
    }

    private guardarDatos(){
        let datos:string = '';

        for(let post of this.listaPost){
            datos+= `\r\n${post.getUserId()},${post.getId()},${post.getTitle()},${post.getBody()}`
        }
        fs.writeFileSync('Post.csv',datos.substr(2));
    }
}
