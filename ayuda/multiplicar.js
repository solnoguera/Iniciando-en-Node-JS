const fs = require('fs');
const colors = require('colors');

//Si usamos async no tenemos que poner new Promise, ni tampoco resolve y reject.
//Simplemente cuando todo sale bien, devuelve con return lo que atrapa .then
//Si sale mal, entra al catch y tira error con throw, lo atrapará .catch
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{

       let salida = "";
       let salida_colors = "";
       
        for(i=1; i <= hasta; i++){
            salida += (`${base} x ${ i } = ${ base*i }\n`);
            salida_colors += salida.rainbow;
        }
        if(listar) {
            console.log("------------------------\n".blue);
            console.log("------------------------\n".blue);
            console.log("------------------------\n".blue);
            console.log(`  La tabla del ${base}  \n`.yellow);
            console.log(`      más grande        \n`.yellow);
            console.log("------------------------\n".blue);
            console.log("------------------------\n".blue);
            console.log("------------------------\n".blue);
            console.log( salida_colors);
        }
        const nombreArchivo = `salida-tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
        //Async por defecto devuelve una promesa, asi que todo andaria correctamente
        return nombreArchivo;

    } catch (err){
        throw err;
    }
    
}

//Exporta la funcion para ser usada por app.js
//crearAchivo : crearArchivo es redundante. Se pone uno solo.
module.exports = {
    crearArchivo
}


//COMO HICE YO ANDABA PERO ES MAS CODIGO
//Control k c comment
//Control k u uncomment
// try{
//     let nombreArchivo = `salida-tabla-${base}.txt`;
//     fs.writeFileSync(nombreArchivo,salida);
//     resolve(nombreArchivo);
// } catch(err){
//     reject(err);
// }

//   fs.writeFile(`salida-tabla-${base}.txt`,salida, (err) => {

//     (err) ?  reject(err) : resolve(`salida-tabla-${base}.txt`);
//   })