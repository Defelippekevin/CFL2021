import { Injectable } from '@nestjs/common';
import Auto from './Auto';
import Vehiculos from './Vehiculos';
import * as fs from 'fs';
import Camioneta from './Camioneta';

@Injectable()
export class VehiculosService {

    private listaVehiculos:Vehiculos []=[];

    public constructor(){
        this.loadVehiculos();
    }

    public getVehiculos():Vehiculos[]{
        return this.listaVehiculos;
    }

    public getVehiculo(patente:string):Vehiculos{
        let producto = null;
// Más adelante agregar manejo de status code
        try{
        for (let i=0; i<this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getPatente()==patente) {
            return this.listaVehiculos[i];
        }
    }
        return null;
 
    }catch(error){
        throw new Error("patente no encontrada");
    }

}


    public crearAuto(auto:any){
        const vehiculo = new Auto(auto['marca'], auto['patente'], auto['modelo'], auto['anio'], auto['precio'], auto['capacidad'])

        if(vehiculo.getMarca()&& vehiculo.getPatente() && vehiculo.getModelo()&& vehiculo.getAnio()
            && vehiculo.getPrecio()&& vehiculo.getCapacidad()){
                this.listaVehiculos.push(vehiculo);
            

         fs.appendFileSync('vehiculos.csv',
         '\n'+vehiculo.getTipo()+ ','+ vehiculo.getMarca() + ','+ vehiculo.getPatente() + ','+ vehiculo.getModelo() + ','+ vehiculo.getAnio() + ','+ vehiculo.getPrecio() + ','+vehiculo.getCapacidad());  
            return 'ok';
        }

        return 'parametros Invalidos';
    }

    public crearCamioneta(auto:any){
        const vehiculo = new Camioneta(auto['marca'], auto['patente'], auto['modelo'], auto['anio'], auto['precio'], auto['capacidad'])

        if(vehiculo.getMarca()&& vehiculo.getPatente() && vehiculo.getModelo()&& vehiculo.getAnio()
            && vehiculo.getPrecio()&& vehiculo.getCapacidad()){
                this.listaVehiculos.push(vehiculo);
            

         fs.appendFileSync('vehiculos.csv',
         '\n'+vehiculo.getTipo()+ ','+ vehiculo.getMarca() + ','+ vehiculo.getPatente() + ','+ vehiculo.getModelo() + ','+ vehiculo.getAnio() + ','+ vehiculo.getPrecio() + ','+vehiculo.getCapacidad());  
            return 'ok';
        }

        return 'parametros Invalidos';
    }


    private loadVehiculos():void{
        let archivo = fs.readFileSync('vehiculos.csv', 'utf8');
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
       // this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i]);
            if(elementos[i][0]=='auto'){
        let auto = new Auto(elementos[i][1],elementos[i][2],elementos[i][3],parseInt(elementos[i][4]),parseInt(elementos[i][5]),parseInt(elementos[i][6]));
        this.listaVehiculos.push(auto);
            }else{ 
                if(elementos[i][0]=='camioneta'){
                let camioneta = new Camioneta(elementos[i][1],elementos[i][2],elementos[i][3],parseInt(elementos[i][4]),parseInt(elementos[i][5]),parseInt(elementos[i][6]));
                this.listaVehiculos.push(camioneta);
             }
         }   
        }
    }
}
