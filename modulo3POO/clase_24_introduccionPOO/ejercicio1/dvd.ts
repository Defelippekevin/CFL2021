class Dvd{
    estaPrendido:boolean;
    play_pause:boolean;
    marca:string;
    minutoActual:number;


    constructor(prendido:boolean, play:boolean, marca:string,minutos:number){
        this.estaPrendido= prendido;
        this.play_pause= play;
        this.marca=marca;
        this.minutoActual=minutos;
    }

    prenderOApagarDVD(): void {
        if (this.estaPrendido)
        this.estaPrendido = false
        else
        this.estaPrendido = true
        }

        correrOPausar(): void {
            if (this.play_pause)
            this.estaPrendido = false
            else
            this.estaPrendido = true
            }
        adelantarPelicula(minutos:number):void{
            this.minutoActual+=minutos;

        }
        retrocederPelicula(minutos:number):void{
            this.minutoActual-=minutos;

        }
        
}
let MiDvd= new Dvd(false,false,"sony",70);
let Dvd1= new Dvd(true,true,"samsung",80);

MiDvd.prenderOApagarDVD();
Dvd1.correrOPausar();
console.log(MiDvd);
console.log(Dvd1);


MiDvd.adelantarPelicula(40);
Dvd1.retrocederPelicula(50);
console.log(MiDvd);
console.log(Dvd1);