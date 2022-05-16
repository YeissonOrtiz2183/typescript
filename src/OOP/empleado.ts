import { Persona } from "./persona";

export class Empleado extends Persona{
    private cargo:string;
    private salario:number;

    constructor(nombre:string, edad:number, cargo:string, salario:number){
        super(nombre, edad)
        this.cargo=cargo;
        this.salario=salario;
    }


    getCargo():string{return this.cargo}

    setCargo(cargo:string){this.cargo=cargo}

    getSalario():number{return this.salario}

    setSalario(salario:number) {this.salario=salario}

}
