
/**
 * Dentro de esta funcion se tiene la promesa que le regresa la respuesta
 * @returns 
 */
function obtenerDatosDelServidor() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let exito = true;

            if (exito) {
                let usuario = {
                    nombre:"Ramses",
                    edad:20
                }
                resolve(usuario);
                
            }else{
                reject("Ocurrio un error al obtener los datos");
            }
        }, 2000);
    })
    
}

/**
 * Mandamos a llamar a la funcion que tenemos arriba, recibimos su respuesta, dependiendo de si es que lo que recibimos es 
 * un resolve o un reject el codigo ira al then o al catch pero siempre hacia el finally.
 * 
 * Dentro de este codigo se puede hacer un encadenamiento de los then si es que se retorna un resultado del anterior then
 */
obtenerDatosDelServidor()
    .then(resp =>{
        console.log("Entro en el .then: ", resp )
        return resp.nombre.toUpperCase();
    })
    .then(nombreEnMayus=>{
        console.log("Nombre en mayusculas: ", nombreEnMayus)
    })
    .catch(err=>{
        console.log("Entro en el .catch ", err)
    })
    .finally(()=>{
        console.log("Fin de la tarea")
    })


async function obtenerPosts() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/post/1");
        console.log(response);
    }catch(error){

    }finally{
        
    }
    
}

obtenerPosts()