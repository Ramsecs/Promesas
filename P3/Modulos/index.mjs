
/**
 * Una de las formas para poder importar dentro de un documento de js es esta donde especificamos que es lo que queremos que se iumporte 
 */
import {saludar as salud, pi, config} from './recursos.mjs';

/**
 * La otra forma es esta donde importamos todo del documento 
 */
//import * as resursos from './recursos.js';


console.log(salud("Martin"));
console.log("Este es el valor de pi: ", pi);
console.log("Este es la url de la api: ", config.URL_API);


