# 📘 Ejemplo de Aplicación

## 📝 Descripción general

En este documento analizaremos un ejemplo de aplicación que cumple los requisitos que se piden en la tarea.

Concretamente la web de [CoinStats](https://coinstats.app/es/), que proporciona información actualizada sobre criptomonedas. La finalidad es servir como referencia para diseñar una web que consuma una API, mostrando datos de forma interactiva y con una buena experiencia de usuario.

---

## 🛠️ Análisis de Ejemplo

#### 1. Resumen

La página de *[Resumen](https://coinstats.app/es/coins/)* actuará como punto de entrada a la aplicación. En este caso, se muestra un ranking de las criptomonedas más populares junto con algunos indicadores clave.

**Elementos Destacados:**

- <u>Ranking inicial</u>: lista de criptomonedas principales, ordenadas por capitalización de mercado.

- <u>Indicadores</u>: precio actual, variación porcentual del precio para diferentes [*timeframes*](https://tellidex.io/trading-timeframes-explained-choosing-the-right-perspective/), acceso al gráfico de precios etc.

<img src="./imagenes/1-resumen.png" title="" alt="Resumen" data-align="center">

---

#### 2. Visualización de Datos

La página de *[Visualización de Datos](https://coinstats.app/es/coins/bitcoin/)* muestra información detallada sobre una criptomoneda seleccionada en la página de Resumen. Básicamente es una página de ampliación de información.

**Elementos Destacados:**

- <u>Gráfico interactivo:</u> se muestra la evolución del precio a lo largo del tiempo, 

- <u>Timeframe</u>: en la barra de la parte superior derecha seleccionando una de las opciones el gráfico se actualiza.

- <u>Información de Precio</u>: colocando el puntero sobre el gráfico muestra información de precio, *timestamp* etc. para ese momento concreto.

<img title="" src="./imagenes/2-grafico.png" alt="Resumen" width="476" data-align="center"><img title="" src="./imagenes/2-grafico2.png" alt="Resumen" width="474" data-align="center">

---

#### 3. Funcionalidad Adiconal

En este apartado te muestro algunos ejemplos de funcionalidad extra para que puedas tener como referencia. Te dejo algunos ejemplos que puedes consultar en la página analizada 

- <u>Favoritos</u>: en el ranking, pulsando la estrella de la parte izquierda se asigna el activo a favoritos y lo muestra en una [lista.](https://coinstats.app/es/favorites/)

- <u>Filtro de Ordenación</u>: en el ranking de activos, al clicar sobre alguno de los elementos: *#, Nombre, Precio,* ordena la lista en función a ese criterio.
