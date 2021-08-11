import Televisor from "./Televisor";

export default class SmartTV extends Televisor {
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
