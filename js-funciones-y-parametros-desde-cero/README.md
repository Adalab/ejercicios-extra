# Funciones y parametros FTW

Os proponemos una tanda de ejercicios para comprender mejor cómo funcionan las funciones y sus parámetros:

***

## Instrucciones

Cread un repo en vuestro usuario para estos ejercicios y una rama `fase/1`. Una vez resuelta la fase uno, crearemos una nueva rama `fase/2`, y así iremos resolviendo las diferentes fases.

***

## Fases

### Fase 1

Vamos a crear un repo por persona, y vamos a hacer una función que escriba `patata` 10 veces en la consola
la función se llamará `ten()`

***

### Fase 2

Ahora tenemos una función que nos escribe **patata** 10 veces en la consola cada vez que la llamemos, pero eso, dentro de lo que cabe, es poco útil porque ahora que sé que puedo escribir una palabra 10 veces en la consola lo que me gustaría es poder escribir palabras diferentes.

Entonces, vamos a modificar nuestra función `ten()` para que acepte un parámetro `word`, y vamos a llamar a la función 3 veces, pasándole cada vez una palabra diferente:
```
ten('Patata`);
ten('Aguacate`);
ten('Pizza');
```

***

### Fase 3

Joé, si puedo pasar a mi función la palabra que quiero escribir, pues voy a querer más: ahora mismo si le paso una palabra me la escribe 10 veces, pero y si quisiese que me la escribiese diferente número de veces cada vez?

Qué tendría que hacer para que al llamar a mi función de estas formas escribiese las palabras el numero de veces que le diga?
```
ten('patata', 10);
ten('aguacate', 7);
ten('Pizza', 50);
```

Una vez conseguido renombraremos la función `ten` a `writeThis`;

***

### Fase 4

Ahora hemos visto que a una función le podemos pasar datos en crudo a través de los parámetros. Además podríamos pasar estos datos si ya los tuviésemos almacenados en constantes e incluso funciones que nos devuelvan datos!!!

Qué locura! Cómo es eso de la funciones?
Vamos a rescatar a nuestra querida `getRandomNumber()` del ejercicio de evaluación intermedia, para quien no se acuerde era algo como:
```
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
```

Esta función generaba un número aleatorio de 0 al número que le pasemos por parámetro.

Qué le tendríamos que escribir en nuestra función `writeThis` para que nos escribiese las palabras que le pasamos un número random de veces de 0 a 10?

Pista:
```
writeThis('patata',?);
writeThis('aguacate'?);
writeThis('pizza',?);
```

***

### Fase 5

Ahora ya tenemos un poco más controlado el invento y parece que podemos controlar diferentes resultados de funciones según los valores que le pasemos a sus parámetros…

Alguien se ha dado cuenta de que estamos escribiendo las palabras que queremos y ha dicho: Ey, yo no tengo una o dos palabras, pero tengo una lista de palabras y números. ¿Me la podríais escribir?

La lista es la siguiente:
```
const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];
```

Para ello crearemos una nueva función `writeMyArray` que aceptará como parámetro un array, lo recorrerá y escribirá cada palabra el número de veces indicado utilizando nuestra función `writeThis`.

***

### Fase 6

Ahora que hemos conseguido eso, aparece una compañera y nos dice: ey, si podéis hacer eso, yo tengo una API que me devuelve algo muy parecido, podría pasaros la url para que en lugar de tirar de un array metido a fuego y azufre en el código, tirásemos de los datos que nos devuelve un servidor. ¿sí?

URL: [`https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json`](https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json)

Para ello tenemos que saber usar [`fetch`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

**¡Al turrón!**
