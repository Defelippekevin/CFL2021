export default class Luz{

private luz:boolean;


public constructor(){
    this.luz=false;
}


public  encender():boolean {
		
    if(this.luz=false) {
        
        this.luz=true;

        console.log("haciendo luces");
        
        
        return true;
    }else {
        return false;
    }
}

}