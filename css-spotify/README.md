# Ejercicio global de HTML y CSS

El objetivo de este ejercicio es aprender a estructurar y maquetar una página web desde cero. Por ello nos vamos a preocupar de que la distribucción de elementos de la página esté perfecta.

## Qué vamos a maquetar

<table>
  <tr>
    <td>
      <img src="./info/mobile.jpg" alt="Mobile version" height="200"/>
    </td>
    <td>
      <img src="./info/tablet.jpg" alt="Tablet version" height="200"/>
    </td>
    <td>
      <img src="./info/desktop.jpg" alt="Desktop version" height="200"/>
    </td>
  </tr>
</table>

Vamos a maquetar la página de [Spotify](https://www.spotify.com/es/premium/), pero vamos a añadir algunas moficicaciones para hacer nuestro ejercicio más interesante.

Modificaciones y requerimientos:

- Tenemos que prerapar la página para los siguientes tamaños de pantalla:
  - Mobile: menos 768px
  - Tablet: de 769px a 1200px
  - Desktop: a partir de 1201px
- La cabecera es fija y se mostrará por encima del resto de contenidos cuando se haga scroll.
- El fondo de la cabecera siempre va a ser negro.
- El **hero** (parte azul) debe medir de alto el 50% del tamaño de la ventana.
- En el footer, para pantallas de menos 500px, los elementos deben aparecer en columna, primero el texto **España**, a continuación el **copyright** y por abajo los **links**.

## Pasos para crear el código HTML

1. Añadimos todo el contenido de la página en el html.
1. Ponemos todas las etiquetas cada contenido con el objetivo de poner la semántica lo mejor posible.

## Pasos para crear el código CSS

Debemos empezar a maquetar desde los elementos más exteriores hacia los más interiores. Esto es porque los estilos CSS de los elementos externos pueden ser heredados por los elementos más internos, y por lo tanto modificarlos.

1. Tenemos que identificar qué grupos de elementos se comportan como un único elemento. Sabremos identificarlos si están visualmente juntos y si se comportan de la misma manera en diseño móvil, tablet y desktop. Por ejemplo si varios elementos se centran todos a la vez al pasar de móvil a desktop nos dan una pista de que puede ser un grupo de elementos. Para esto nos viene muy bien coger rotu y papel y pintar la página.
1. Una vez identificados estos grupos de elementos que se comportan como uno solo tenemos que agruparlos en el código. Para ello los envolvemos con un `<div />` que va actuar como contenedor. Si en vez de un `<div />` podemos utilizar una etiqueta con carga semántica mucho mejor. Si ya estaban agrupados en un contenedor, no hace falta que los volvamos a agrupar.
1. A continuación le tenemos que añadir una clase css a cada uno de estos contenedores. Y vamos a dar los siguientes estilos a cada clase: `.my-container { border: solid 3px red; background: blue; }` (debemos sustituir `my-container` por el nombre de la clase que le hayamos dado). Con esto conseguiremos identificar visualmente los contenedores. También podemos darle a cada clase un color de borde y fondo diferente para que sea más fácil de visualizar.
1. Por último tenemos que aplicar estilos a los contenedores para distribuirlos por la página. Mientras lo hacemos tenemos que ir probando la página en los diferentes anchos de pantalla para ver que nuestra maquetación se ajusta a todos ellos. Para ello utilizaremos todas las propiedades que hemos aprendido en el curso, como:
   - display: inline, inline-block, block, flex, grid...
   - position: absolute, fixed...

Una vez hayamos maquetado la distribución de los contenedores principales en todos los anchos de pantalla, deberiamos repetir estos pasos con los contenedores que haya en elementos más internos.

Una vez hayamos terminado de maquetar todos los contenedores, podremos borrar los estilos de borde y fondo que habíamos puesto para visualizar fácilmente los contenedores. Y podremos empezar a maquetar fino fino y al detalle cada elemento de la página, centrándonos en detalles como colores, tamaños de fuente, márgenes...

## Do it yourself

Os recomendamos a las alumnas que buquéis una página que os guste y la maquetéis siguiendo estos pasos. Si necesitáis ayuda pedírsela a las compañeras o a los profes.
