



/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number): number{
    return (a+b);
}

const sumarflecha = (a:number,b:number):number => {return a+b}

function multiplicar (numero:number,base:number=10,otronumero?:number){
    return numero*base;
}
interface PersonajeLOR{
    nombre:string,
    hp:number;
    mostrarHp(): void;
}
function curar(personaje:PersonajeLOR,curarx:number):void{
    personaje.hp += curarx;
   
}
const PersonajeNuevo:PersonajeLOR = {
    nombre:"Name",
    hp: 50,
    mostrarHp(){
        console.log("prueba " + this.hp);
    }

}


curar(PersonajeNuevo,50);
PersonajeNuevo.mostrarHp();