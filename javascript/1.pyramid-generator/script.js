
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*?*/

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);














/*Como declarar varaible:
# Los nombres de las variables siguen reglas específicas: los nombres pueden incluir letras, números, signos de dólar y guiones bajos,
pero no pueden contener espacios y no deben comenzar con un número.

# Cuando los nombres de las variables son más de una palabra, existen convenciones de nomenclatura específicas para la forma de escribir 
las palabras en mayúsculas. En JavaScript, la convención que se debe utilizar es camelcase "ejemploUno".

# La palabra clave "function" le indica a JavaScript que la variable "myFunction" será una función. "parameter" es una variable que representa 
un valor que se pasa a la función cuando se utiliza. Una función puede tener tantos o tan pocos parámetros como desee. Al igual que un bucle 
for, el espacio entre las llaves es el cuerpo de la función.
ex:

    function myFunction(parameter) {
        //code goes here
    }

# Por defecto, las funciones devuelven undefined como su valor. Para devolver algo más, debe utilizar la palabra clave return

# Los parámetros son variables especiales a las que se les asigna un valor cuando se llama a la función y se pueden usar en la función para 
cambiar dinámicamente el resultado del código de la función.
# Para agregar un parámetro a la función, debe agregar un nombre de variable dentro de los paréntesis.

# Las variables en JavaScript están disponibles en un ámbito específico. En otras palabras, el lugar donde se declara una variable determina 
en qué parte del código se puede utilizar. El primer ámbito es el ámbito global. Las variables que se declaran fuera de cualquier "bloque", 
como una función o un bucle for, están en el ámbito global.

# Las variables también se pueden declarar dentro de una función. Se considera que estas variables están en el ámbito local o en el ámbito de bloque.
Una variable declarada dentro de una función solo se puede utilizar dentro de esa función. Si intenta acceder a ella fuera de la función, obtendrá un 
error de referencia.

# Un aspecto importante que se debe saber sobre la palabra clave return es que no solo define un valor que se devolverá desde la función, sino que 
también detiene la ejecución del código dentro de una función o una declaración de bloque. Esto significa que cualquier código posterior a una 
declaración return no se ejecutará.

# Un valor verdadero es un valor que se considera verdadero cuando se evalúa como booleano. La mayoría de los valores que encontrará en JavaScript 
serán verdaderos. 
# Un valor falso es lo opuesto: un valor que se considera falso cuando se evalúa como booleano. JavaScript tiene una lista definida de valores falsos. 
Algunos de ellos incluyen false, 0, "", null, undefined y NaN.


##Operador de igualdad
#El operador de igualdad puede provocar un comportamiento extraño en JavaScript. Por ejemplo, "0" == 0 es verdadero, aunque uno sea una cadena y el otro 
un número. El operador de igualdad estricto === se utiliza para comprobar si dos valores son iguales y comparten el mismo tipo. Como regla general, este 
es el operador de igualdad que siempre se debería utilizar. Con el operador de igualdad estricto, "0" === 0 se convierte en falso, porque si bien pueden 
tener el mismo valor de cero, no son del mismo tipo.

documentacion en progreso...

*/