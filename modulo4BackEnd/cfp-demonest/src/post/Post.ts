import Comentario from "src/comentario/Comentario";

export default class Post{
    private userId: number;
    private id:number;
    private title:string;
    private body:string;


    public constructor(userId:number,id:number,title:string,body:string){
        this.userId=userId;
        this.id=id;
        this.title=title;
        this.body=body;
    }


    public getUserId():number{
        return this.userId;
    }

    public getId():number{
        return this.id;
    }

    public getTitle():string{
        return this.title;
    }

    public getBody():string{
        return this.body;
    }
}