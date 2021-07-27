
interface pasajero{
    nombre: string;
    hijos?: string[]; 
}

const pasajero1:pasajero={
    nombre:"Ruben"
}
const pasajero2:pasajero={
    nombre:"fernando",
    hijos:["Natalia","Gabriel"]
}

function imprimirHijos(pasajero:pasajero): void{
    const numerohijos=pasajero.hijos?.length|| 0;
    console.log(numerohijos);
    
}

console.log(imprimirHijos(pasajero1));
