
export default class Timbre{
    protected timbre:boolean;


    public constructor(){
        this.timbre=false;
    }

    public isTimbre():boolean{
        return this.timbre;
    }

    public setTimbre(timbre:boolean):void{
        this.timbre=timbre;
    }


    public hacerSonar():boolean{
        if(this.timbre=false){
            this.timbre=true;
            console.log("sonando alarma");
            
            return true;
        }else{
            return false;
        }
    }

}