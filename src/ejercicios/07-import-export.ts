import { calculaISV, Producto } from "./06-desestructuracion-funciones";


/*
    ===== Código de TypeScript =====
*/
const CarritoCompra: Producto[]=[
    {
        desc:"Telefono1",
        precio:100,
    },
    {
        desc:"Telefono2",
        precio:150,
    },
    
];
const [Total,ISV]= calculaISV(CarritoCompra);
console.log(Total,ISV);