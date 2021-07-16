// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var contador=0;
  var matriz=[];
  for (var clave in objeto){
    matriz[contador]=[clave,objeto[clave]];
    contador=contador+1;
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  var abcd = [];
  for (var i=97; i<123; i++){             //genero un array con el abecedario
    abcd[i-97] = String.fromCharCode(i);
  }
  for (var i=0; i<26; i++){
    if (string.includes(abcd[i])){
      var cuenta=0;
      for (var j=0; j<string.length; j++){
        if (string[j]===abcd[i]){cuenta=cuenta+1;}
        objeto[abcd[i]]=cuenta;
      }
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var ABC = '';
  for (var i=65; i<91; i++){             //genero un array con el ABECEDARIO MAYUSCULA
    ABC=ABC+String.fromCharCode(i);
    //ABC[i-65] = String.fromCharCode(i);
  }
  var MAYU='';
  var minu='';
  for (var i=s.length-1;i>-1; i--){
    if(ABC.includes(s[i])){
      MAYU=s[i]+MAYU; //MAYU.unshift(s[i]);
    } else {
      minu=s[i]+minu;
    }
  }
  return MAYU+minu;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = str.split(' ');       //genero un array separando cada palabra
  var sarbalap = palabras.map(function(elem){
    var mele='';
    for (var i=0; i<elem.length; i++){
      mele=elem[i]+mele;
    }
    return mele;
  });
  return sarbalap.reduce(function (final,elem){
    return final+ ' ' + elem;});
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numSTR=numero.toString();
  var indice=0;
  while (numSTR[indice]===numSTR[numSTR.length-indice-1]){
    indice = indice+1;
    if(indice>=numSTR.length/2){ return 'Es capicua';}
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaAux='';
  for (var i =0; i<cadena.length; i++){
    if(!(cadena[i]==='a'||cadena[i]==='b'||cadena[i]==='c')){
      cadenaAux=cadenaAux+cadena[i];
    }
  }
  if(cadenaAux.length<cadena.length){
    return cadenaAux;
  } else {
    return cadena;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 
  /*var long= arr.map(function(elem){             no funciona en el test porque ante 
    return [elem.length,elem];}).sort();          igual length ordena alfabeticamente :|
  arr=long.map(function(elem){return elem[1];});  
  return arr;*/                     


  var ARR=[];                              // forma propuesta por HH
  for (var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length;j++){
      if(arr[i].length>arr[j].length){
        ARR=arr[i];
        arr[i]=arr[j];
        arr[j]=ARR;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var union = [];
  arreglo1.forEach(function(elem){
    for(var i=0;i<arreglo2.length;i++){
      if (elem===arreglo2[i]){
        union.push(elem);
      }
    }
  });
  return union;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

