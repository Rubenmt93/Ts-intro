


/*
    ===== Código de TypeScript =====
*/
class PersonaNomal{   
    constructor(
        public nombre:string,
        public direccion: string,
    ){}
}
class Heroe extends PersonaNomal{
    
    constructor(
        public alterEgo:string,
        public edad:number,  
        nombre:string,     
    ){
        super(nombre,"NY, USA");
    }
}
const ironman= new Heroe("ironman",45,"Tony Stark");
console.log(ironman);
