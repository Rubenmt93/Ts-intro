import { ReportEmitErrorSummary } from "typescript";




/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: String,
    detalles: Detalles,
}
interface Detalles{
    autor:string,
    año:number,

}
const reproductor: Reproductor={
    volumen: 90,
    segundo:36,
    cancion: "Ejemplo",
    detalles: {
        autor: "Nombre",
        año: 2021
    }
}
const{volumen, segundo, cancion, detalles}=reproductor;
const{autor:autorDetalle}=detalles;

//console.log("El  volumen actual es de: " + volumen);
//console.log("El  segundo actual es de: ", segundo);
//console.log("La cancion actual es de: ", cancion);
//console.log("El  autor actual es : ", autorDetalle);

const dbz: string[]=["Goku","Vegeta","Trunks"];
const[p1,p2, p3]=dbz;
console.log(p1);


