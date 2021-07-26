



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

const result= multiplicar(1);
console.log(result);