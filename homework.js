// No cambies los nombres de las funciones.

// --- Temario ampliado: constantes ---
// ¿Qué string devuelve typeof en cada línea, en orden hipotético?
// Antes del `=` (pero después de hoist de `var`): console.log(typeof f);
// var f = function() { return 1; };
const resultadoTipoFuncionExpresadaVar = 'undefined';

// Reemplaza null por una función flecha asignada a identificador (sin palabra function):
// ejemplo de forma: identificador = (num) => num * ...
let duplicarConFlecha = (num) => num * 2;

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // Recorremos cada elemento y le sumamos 1
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // .push agrega al FINAL y devuelve la nueva longitud
  array.push(elemento);
  return array; //
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array; //
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // .join une todos los elementos con el separador que le pasás
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // acumulamos cada número
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  // promedio = suma total dividida cantidad de elementos
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros[0]; // arrancamos asumiendo que el primero es el mayor
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i]; // si encontramos uno más grande, lo guardamos
    }
  }
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i]; // *= multiplica al acumulador
  }
  return producto;
}

// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  // Creamos un objeto con propiedades y un método
  return {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return 'Meow!';
    },
  };
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  // Usamos notación de corchetes porque el nombre viene en una variable
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  // Elimina la propiedad "propiedad" de "objeto"
  // Devuelve el objeto
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  return {
    nombre: nombre,
    email: email,
    password: password,
  };
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  // Verificamos que email exista y no sea undefined
  return usuario.email !== undefined && usuario.email !== null;
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  // hasOwnProperty verifica si el objeto tiene esa propiedad
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  // amigos es un array dentro del objeto, usamos push
  usuario.amigos.push(nuevoAmigo);
  return usuario; //
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let total = 0;
  // posts es un array de objetos, cada uno con propiedad likes
  for (let i = 0; i < usuario.posts.length; i++) {
    total += usuario.posts[i].likes;
  }
  return total;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  // Agregamos el método al objeto usando notación de punto
  producto.calcularPrecioDescuento = function () {
    const descuento = producto.precio * producto.porcentajeDeDescuento;
    return producto.precio - descuento;
  };
  return producto;
}

// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // cb es una función, simplemente la llamamos con ()
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  // pasamos el resultado al callback en vez de hacer return
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  const nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    // guardamos lo que devuelve el callback para cada elemento
    nuevoArray.push(cb(array[i]));
  }
  return nuevoArray;
}

function filter(array, cb) {
  // Replica el comportamiento de Array.prototype.filter: nuevo array sólo con valores donde cb devolvió verdadero/truthy
  // Podés hacerlo con bucle sin usar el método nativo `.filter`
  // Tu código:
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    // solo agregamos si el callback devuelve true
    if (cb(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// --- Temario ampliado: extremos pop/shift y APIs de búsqueda/unión/recorte ---

function sacarUltimoConPop(arreglo) {
  // Quitá el último elemento con `.pop()`, devolvé ese elemento mutando `arreglo`
  // Tu código:
  // .pop() elimina y DEVUELVE el último elemento
  return arreglo.pop();
}

function sacarPrimeroConShift(arreglo) {
  // Quitá el primero con `.shift()`, devolvé ese elemento mutando `arreglo`
  // Tu código:
  // .shift() elimina y DEVUELVE el primer elemento
  return arreglo.shift();
}

function unirConSeparador(elementos, separador) {
  // `.join(separador)` sobre el array pasado por referencia sin mutarlo
  // Tu código:
  return elementos.join(separador);
}

function indicePrimero(arreglo, item) {
  // `.indexOf`
  // Tu código:
  return arreglo.indexOf(item);
}

function indiceUltimo(arreglo, item) {
  // `.lastIndexOf`
  // Tu código:
  return arreglo.lastIndexOf(item);
}

function existeConIncludes(arreglo, item) {
  // `.includes`
  // Tu código:
  return arreglo.includes(item);
}

function subArregloCopia(origen, inicio, fin) {
  // `.slice` — no muta el original; devolvé una copia de la ventana sin incluir índice `fin`
  // Tu código:
  return origen.slice(inicio, fin);
}

function pegarDosArreglos(arregloA, arregloB) {
  // `.concat`: devolvé un nuevo arreglo con todos los elementos de A y después B sin mutar A ni B
  // Tu código:
  return arregloA.concat(arregloB);
}

function aplicarSpliceDesde(arreglo, desde, borrarCantidad, ...insertarItems) {
  // `.splice` muta `arreglo` desde el índice `desde`, borra `borrarCantidad` elementos, insertá optional items
  // Devolvé el mismo array arreglo (referencia) tras la operación
  // Tu código:
  arreglo.splice(desde, borrarCantidad, ...insertarItems);
  return arreglo;
}

// --- Reverse / Sort (mutaciones) ---
function invertirEnLugar(arreglo) {
  // `.reverse` en el mismo arreglo; devolvé el array (referencia)
  // Tu código:
  return arreglo.reverse();
}

function ordenarNumerosAsc(arreglo) {
  // `.sort` comparando número (a, b) => a - b; mutante; devolvé la referencia `arreglo`
  // Tu código:
  return arreglo.sort((a, b) => a - b);
}

function sumatorioConReduce(numeros, inicial = 0) {
  // Suma usando únicamente `.reduce(...)`
  // Tu código:
  return numeros.reduce((acumulador, elemento) => acumulador + elemento, inicial);
}

function agruparPorCampoReduce(listaObjetos, nombreCampo) {
  // Usá sólo `.reduce`: devolvé objeto cuyas claves son valores de esa propiedad y valores arrays de elementos
  // Tu código:
  return listaObjetos.reduce((acc, item) => {
    const clave = item[nombreCampo]; // obtenemos el valor de esa propiedad
    if (!acc[clave]) {
      acc[clave] = []; // si no existe el grupo, lo creamos
    }
    acc[clave].push(item); // agregamos el item al grupo
    return acc;
  }, {});
}

function agruparPorCampoObjectGroupBy(listaObjetos, nombreCampo) {
  // Usá Object.groupBy (requiere Node 22+ según este repo). Función clasificadora: (item) => item[nombreCampo]
  // Tu código:
  return Object.groupBy(listaObjetos, (item) => item[nombreCampo]);
}

function encadenarOperacionesSinAnidar(valorInicial, funcionesTransform) {
  // `funcionesTransform` es un array de funciones síncronas (f1,f2,...).
  // Ejecutalas en orden solo con bucle/for (sin anidar llamadas dentro de callbacks).
  // Tu código:
  let resultado = valorInicial;
  // aplicamos cada función en orden usando un for
  for (let i = 0; i < funcionesTransform.length; i++) {
    resultado = funcionesTransform[i](resultado);
  }
  return resultado;
}

function objetoNombreMayuscConFlechaAnidada(nombre) {
  // Devolvé `{ nombre }` con método `enMayuscMedianteFlecha()` (function regular) dentro del cual declares una función flecha
  // que usa el `this` léxico del método y devuelve `nombre` en MAYÚSCULAS.
  // Tu código:
  return {
    nombre,
    enMayuscMedianteFlecha: function () {
      // función flecha adentro hereda el `this` del método
      const convertir = () => this.nombre.toUpperCase();
      return convertir();
    },
  };
}

function establecerValorMismaReferencia(objetoConstanteRef, propiedadString, nuevoValor) {
  // objetoConstanteRef[propiedadString] = nuevoValor; mismo objeto
  // Tu código:
  objetoConstanteRef[propiedadString] = nuevoValor;
  return objetoConstanteRef;
}

const sumarMedianteExpresionNombrada = function nombradoInternamente(a, b) {
  // Función mediante expresión con nombre interno (no uses `function sumarDeclarada(...) {}` declarada como statement suelto)
  // Tu código:
  return a + b;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  resultadoTipoFuncionExpresadaVar,
  duplicarConFlecha,
  sumarMedianteExpresionNombrada,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
  filter,
  sacarUltimoConPop,
  sacarPrimeroConShift,
  unirConSeparador,
  indicePrimero,
  indiceUltimo,
  existeConIncludes,
  subArregloCopia,
  pegarDosArreglos,
  aplicarSpliceDesde,
  invertirEnLugar,
  ordenarNumerosAsc,
  sumatorioConReduce,
  agruparPorCampoReduce,
  agruparPorCampoObjectGroupBy,
  encadenarOperacionesSinAnidar,
  objetoNombreMayuscConFlechaAnidada,
  establecerValorMismaReferencia,
};
