const array = [51,123,128,52,17,200,87,1233,1646,7776,2344,33,999];

//Cant. elementos en array.
const cantidadDeElementos = array.length;

//Elemento maximo del Array.
const maxNum = Math.max(...array);

//Elemento minimo del array.
const minNum = Math.min(...array);

//Cantidad de numeros pares en array.
const pares = array.filter(x=> x%2 === 0);
//Cantidad de numeros impares en array.
const impares = array.filter(x=> x%2 !== 0);

//Porcentaje de numeros pares en array.
const porcentajePares = pares.length * 100 / cantidadDeElementos;

//Porcentaje de numeros impares en array.
const largoArray = impares.length * 100 / array.length;

//Porcentaje de numeros mayores a 1000.
const numerosMayoresMil = array.filter(x=> x > 1000);

const porcentajeNumMayorMil = numerosMayoresMil * 100 / cantidadDeElementos;

//Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo.
const porcentajeNumMinSobreMayor = minNum * 100 / maxNum;


//y el porcentaje del promedio de todos los números respecto al maxNum.
//Promedio de la suma total de numeros del array.
const sumaTotal = array.reduce((previous, current) => current += previous);
const promedio = sumaTotal / array.length;

// Porcentaje respecto al numero Maximo.
const promedioTotalSobreMax = promedio * 100 / maxNum;