import Ruleta from './Ruleta';
import Crap from './Crap';
import Tragamonedas from './Tragamonedas';
import TragamonedasH from './TragamonedasH';
import tragamonedasH from './TragamonedasH';
import * as RLS from 'readline-sync';

export default class Casino{

    protected ruleta:Ruleta;
    protected crap:Crap;
    protected tragamonedas:Tragamonedas;
    protected tragamonedasH:tragamonedasH;

    constructor(){
        this.ruleta= new Ruleta();
        this.crap= new Crap();
        this.tragamonedas= new Tragamonedas();
        this.tragamonedasH= new TragamonedasH();
    }

    public jugarRuleta(){
        this.ruleta.jugar();
    }
    public jugarCrap(){
        this.crap.jugar();
    }
    public jugarTragamonedas(){
        this.tragamonedas.jugar();
    }
    public jugarTragamonedasHijo(){
        this.tragamonedasH.jugarHijo();
    }
}

