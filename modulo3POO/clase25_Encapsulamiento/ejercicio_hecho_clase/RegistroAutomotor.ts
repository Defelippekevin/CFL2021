import Auto from './Auto';
import * as FS from 'fs';
import * as RLS from 'readline-sync';

export default class RegistroAutomotor {
    private autos: Auto[];

    public constructor (){
        this.autos = [];
    }

    public addAuto():void{
        let patente:string = RLS.question('Ingrese la pantente: ');
        let marca:string = RLS.question('Ingrese la marca: ');
        let modelo:string = RLS.question('Ingrese la modelo: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        this.autos.push(new Auto(patente,marca,modelo,año));
    }

    public findAuto(patente:string): number{
        for (let i = 0; i < this.autos.length; i++) {
            if(patente == this.autos[i].getPatente()){
                return i;
            }
        }
        return -1;
    }

    public deleteAuto(patente:string): void{
        let posicion:number = this.findAuto(patente);
        if (posicion != -1) {
            this.autos.splice(posicion,1);
        }
    }

    public updateAuto(patenteVieja: string): void{
        let patente:string = RLS.question('Ingrese la pantente nueva: ');
        let marca:string = RLS.question('Ingrese la marca nueva : ');
        let modelo:string = RLS.question('Ingrese la modelo nueva: ');
        let año: number = RLS.questionInt('Ingrese el año nueva: ');

        let posicion= this.findAuto(patenteVieja);
        if (posicion != -1) {
            this.autos[posicion] = new Auto(patente,marca,modelo,año);
        }else{
            console.log("el auto no existe");
        }
    }

    mostrarAutos(): void{
        console.log(this.autos);
    }

    cargarAutos():void{
        let autos:string[] = (FS.readFileSync('autos.txt','utf8')).split('\n');
        let propiedadesAuto:string[] = [];
        autos.forEach(autoString => {
            propiedadesAuto = autoString.split(";")
            this.autos.push(new Auto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],parseInt(propiedadesAuto[3])))
        });
    }
}