# Fase 2 de la programación: Identificar las acciones

## ¿Qué tenemos que hacer?

Para saber qué acciones hay, nos tenemos que preguntar:

- ¿Qué acciones tienen que pasar cuando arrancamos la página?
- ¿Qué acciones puede hacer la usuaria?
- ¿Qué acciones pueden producir que "finaliza" la página?
- ¿Qué acciones hay que hacer cuando "finaliza" la página?

Pues tenemos que apuntar esas acciones en el papel.

## Fase 2 del bingo

Las acciones identificadas son:

- ¿Qué acciones tienen que pasar cuando arrancamos la página?
  - Tenemos que generar 20 números aleatorios para **Mi cartón** no repetidos.
  - Tenemos que escuchar el evento **Click** sobre los botones de **Saca una bolita** y sobre el **Play**.
- ¿Qué acciones puede hacer la usuaria?
  - Puede pulsar en el botón **Saca una bolita** o en el botón de **Play**. Ambas generan las siguientes acciones:
    - Debemos generar un nuevo número en **Bolitas** no repetido.
    - Debemos pintar el nuevo número en **Bolitas**.
    - Debemos comprobar si el nuevo número está en **Mi cartón** y pintarlo con fondo verde.
    - Si la usuaria ha pulsado en el **Play** hay que repetir las dos acciones anteriores cada un segundo.
- ¿Qué acciones pueden producir que "finalice" la página?
  - Que todos los números de **Mi cartón** estén en **Bolitas**.
- ¿Qué acciones hay que hacer cuando "finaliza" la página?
  - Ocultar los botones de **Saca una bolita** y **Play**.
  - Mostrar el mensaje de **Han cantado bingo!!!**.
