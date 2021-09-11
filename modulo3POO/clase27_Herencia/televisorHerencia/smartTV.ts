//SMARTTV hija de TELEVISOR
class SmartTV extends Televisor {
    public constructor() {
        super();
        this.canalActual = 1;
    }
    public mirarNetflix(): void {
        console.log('Mirando Netflix...');
    }
    public subirVolumen(): void {
        this.volumenActual += 1;
    }
    public bajarVolumen(): void {
        this.volumenActual -= 1;
    }
 }


 let tele = new SmartTV();
console.log(tele);
tele.subirVolumen();
console.log(tele);