



/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre:string;
    edad: number;
    direccion: Direccion;
    mostrardireccion():void;
}
interface Direccion{
    calle: string,
    pais: string,
    ciudad: string
    
}
const superHeroe={
    nombre: "SpiderMan",
    edad: 30,
    direccion:{
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion(){
        return this.nombre+ ", " + this.direccion.ciudad+ ", "+this.direccion.pais;
    }     
}
console.log(superHeroe.mostrarDireccion());