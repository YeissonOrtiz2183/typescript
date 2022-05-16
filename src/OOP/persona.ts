export class Persona{
    private nombre:string;
    private edad:number;

    constructor(nombre:string, edad: number){
        this.nombre=nombre;
        this.edad=edad;
    }
  
    getNombre():string{return this.nombre}

    setNombre(nombre:string){this.nombre =nombre}

    getEdad():number{return this.edad}

    setEdad(edad:number){this.edad = edad};
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`)
    }

}
