


/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento:T) {
    return argumento;
}
let soyString= queTipoSoy("hola mundo");
let soyNumerog= queTipoSoy(100);