

/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto ={
    desc:"Nokia",
    precio: 150,
}
const tableta: Producto ={
    desc:"Ipad",
    precio: 350,
}

function calculaISV(productos: Producto[]):number[]{
    let total = 0;
    productos.forEach( ({precio}) =>{
        total+= precio;
    })
    return [total,total*0.15]
}
const articulos=[telefono,tableta];
const [Total,ISV]= calculaISV(articulos);
console.log(Total,ISV);
