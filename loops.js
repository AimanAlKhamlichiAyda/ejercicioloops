//======================Ejercicios: Nivel 1=====================


//1.Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//let index = 0;
while (index <= 10) {
    console.log(index);
    index++;
}

//let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);


//2.Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

//let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

//3.Itera de 0 a n usando el bucle for
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//4.Escribe un bucle que haga el siguiente patrón usando console.log():

for (let i = 1; i <= 7; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "#";
    }
    console.log(linea);
}

//5.Usa un bucle para imprimir el siguiente patrón:

for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + (i * i));
}

//6.Usando un bucle imprime el siguiente patrón:

console.log("i   i^2  i^3");
for (let i = 0; i <= 10; i++) {
    let iCuadrado = i * i;
    let iCubo = i * i * i;
    console.log(i + "   " + iCuadrado + "   " + iCubo);
}

//7.Usa el bucle for para iterar de 0 a 100 e imprima solo números pares

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//8.Usa el bucle for para iterar de 0 a 100 e imprima solo números impares

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//9.Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos

for (let i = 2; i <= 100; i++) {
    let esPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i);
    }
}

//10.Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

let suma = 0;
for (let i = 0; i <= 100; i++) {
    suma += i;
}
console.log(suma);

//11.Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

let sumaPares = 0;
let sumaImpares = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
    }
}

console.log("La suma de todos los números pares es: " + sumaPares);
console.log("La suma de todos los números impares es: " + sumaImpares);


//12.Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
/*
let sumaPares = 0;
let sumaImpares = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
  }
}

const resultado = [sumaPares, sumaImpares];
console.log(resultado);*/

//13.Desarrolla un pequeño script que genera una matriz de 5 números aleatorios

const matriz = [];

for (let i = 0; i < 5; i++) {
    const numAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
    matriz.push(numAleatorio);
}

console.log(matriz);

//14.Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
/*
const matriz = [];

while (matriz.length < 5) {
  const numAleatorio = Math.floor(Math.random() * 100); 
  if (!matriz.includes(numAleatorio)) { 
    matriz.push(numAleatorio); 
  }
}

console.log(matriz);*/

//15.Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Caracteres que pueden formar el ID
let id = "";

for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length); // Genera un índice aleatorio en el rango de caracteres
    id += caracteres.charAt(indiceAleatorio); // Agrega el carácter correspondiente al índice aleatorio a la cadena del ID
}

console.log(id);

//===============Ejercicios: Nivel 2================

//1.Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:

function generarID(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Caracteres que pueden formar el ID
    let id = "";

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length); // Genera un índice aleatorio en el rango de caracteres
        id += caracteres.charAt(indiceAleatorio); // Agrega el carácter correspondiente al índice aleatorio a la cadena del ID
    }

    return id;
}

console.log(generarID(6));

//2.Escribe un script que genere un número hexadecimal aleatorio.

const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomHex);

//3.Escribe un script que genere un número de color rgb aleatorio.

const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
console.log(randomColor);

//4.Usando el array countries anterior, crea un array como el siguiente.

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];

const countriesWithA = countries.filter(country => country.includes('a') || country.includes('A'));

console.log(countriesWithA);

//5.Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countryLengths = countries.map(country => country.length);

console.log(countryLengths)

//6.Utiliza el array countries para crear la siguiente array de arrays

const countryArrays = countries.map(country => [country, country.slice(0, 3), country.length]);

console.log(countryArrays);

//7.En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

//const countriesWithLand = countries.filter(country => country.includes('land'));

if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log('Todos estos países no tienen la palabra land');
}

//8.En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

const countriesEndingWithIa = countries.filter(country => country.endsWith('ia'));

if (countriesEndingWithIa.length > 0) {
    console.log(countriesEndingWithIa);
} else {
    console.log('Estos países no terminan con ia');
}

//9.Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

let longestCountry = countries[0];

for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
        longestCountry = countries[i];
    }
}

console.log(longestCountry);

//10.Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

let countryWithFiveChars;

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countryWithFiveChars = countries[i];
        break;
    }
}

console.log(countryWithFiveChars);

//11.Encuentra la palabra más larga en el array webTechs

let longestWord = webTechs[0];

for (let i = 1; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWord.length) {
        longestWord = webTechs[i];
    }
}

console.log(longestWord);

//12.Utiliza el array de webTechs para crear la el siguiente array de arrays:

const techsAndLengths = [];

for (let i = 0; i < webTechs.length; i++) {
    const tech = webTechs[i];
    const techLength = tech.length;
    techsAndLengths.push([tech, techLength]);
}

console.log(techsAndLengths);

//13.Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack

//const mernStack = ["MongoDB", "Express", "React", "Node"];

const mernAcronym = mernStack.reduce((acronym, tech) => acronym + tech[0], "");

console.log(mernAcronym);

//14.Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.

const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i < techStack.length; i++) {
    console.log(techStack[i]);
}

//15.Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}

console.log(reversedFruits);

//16.Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];

for (const stack of fullStack) {
    for (const tech of stack) {
        console.log(tech.toUpperCase());
    }
}



//=================Ejercicios: Nivel 3===============

//1.Copia el array countries (Evita mutaciones)
//const countriesCopy = [...countries];

//2.Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries

const countriesCopy = countries.slice();

const sortedCountries = countriesCopy.sort();

console.log(sortedCountries);

//3.Ordena el array webTechs y el array mernStack

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

webTechs.sort();
console.log(webTechs);

mernStack.sort();
console.log(mernStack);

//4.Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriees = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

const countriesWithLandd = countriees.filter(country => country.includes('land'));

console.log(countriesWithLandd);

//5.Encuentra el país que contiene la mayor cantidad de caracteres en el array countries

const countryWithMaxChars = countriees.reduce((max, country) => {
    if (country.length > max.length) {
        return country;
    } else {
        return max;
    }
}, '');

console.log(countryWithMaxChars);

//6.Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
const countriesWithLand = countries.filter(country => country.includes('land'));

console.log(countriesWithLand);

//7.Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
const countriesWithFourCharacters = countriees.filter(country => country.length === 4);

console.log(countriesWithFourCharacters);

//8.Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
const countriesWithTwoOrMoreWords = countriees.filter(country => country.split(' ').length >= 2);

console.log(countriesWithTwoOrMoreWords);

//9.Invertir el array countries y poner en mayúscula cada país y almacenalo en un array


const reversedCountries = countriees.reverse();
const upperCaseCountries = reversedCountries.map(country => country.toUpperCase());

console.log(upperCaseCountries);