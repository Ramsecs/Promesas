export default class Persona{
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }
    //Metodo privado
    #generarId(){
        return Math.floor(Math.random() * 1000);
    }
    //Metodo publico
    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}