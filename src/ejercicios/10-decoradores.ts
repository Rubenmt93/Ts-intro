


/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T
    ){
        return class extends constructor{
            newProperty= "new property";
            hello= "override";
    };
}
@classDecorator
class MiSuperClase{
    public mipropiedad:string ="ABCD123";
    imprimir(){
        console.log("hola Mundo");
        
    }
}
const miclase= new MiSuperClase();
console.log(MiSuperClase);
console.log(miclase.mipropiedad);

