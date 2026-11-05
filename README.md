# 📘 DWEC04 - Tarea de Evaluación

## 📝 Descripción general

Ponte en el papel de un programador freelance que ha identificado un nicho de mercado con potencial y decide diseñar una aplicación web que ofrece información para ese sector.

Para ello, vas a definir un proyecto que **utilizará una API como fuente de datos**.

### Requisitos generales

- La aplicación tendrá **libertad temática**, de manera que puedes elegir el proyecto que quieras desarrollar.

- **Asigna un nombre representativo** a tu proyecto. Por ejemplo:

  - **BolsaSmart**: herramienta interactiva para visualizar información sobre el precio de cotización de empresas, dirigida a pequeños inversores.
  - **ExploraFauna**: portal dedicado a catalogar y clasificar animales de África, dirigido a amantes de la naturaleza.

- El proyecto deberá **cumplir con las tres secciones** descritas en el apartado de ejercicios

- La **aplicación será multipágina**.

- La aplicación deberá **respetar la arquitectura estudiada** en unidades anteriores.

- Puedes desarrollar la aplicación utilizando la gestión de eventos nativa de **JavaScript**, la de **jQuery** o una combinación de ambas tecnologías.

## 🎯 Objetivos de aprendizaje

- Desarrollar un frontend utilizando JavaScript.
- Consumir recursos de una **API REST**.
- Integrar en un mismo proyecto los conocimientos sobre **gestión de eventos** y **consultas HTTP** estudiados hasta el momento.

## 📚 Recursos

### Ejemplos

En el apartado de recursos encontrarás los siguientes materiales:

- Un [directorio](./recursos/interfaces) con ejemplos de interfaces en formato `.html` para el proyecto *BolsaSmart* descrito en la introducción de este documento. Descárgalas y ejecutalas en el navegador.
- Un [documento](./recursos/1-ejemplo-aplicacion-real.md) en el que se explican los tipos de interfaces a partir de la aplicación web [*CoinStats*](https://coinstats.app/es/coins/).

> [!TIP]
>
> Puedes ejecutar los archivos `.html` haciendo doble clic sobre ellos o arrastrándolos a una ventana del navegador para probar las interfaces de ejemplo.

### Listado de APIs

Para facilitarte la elección de temática: 

- En el apartado el directorio de recursos dispones de un [documento](./recursos/2-lista-apis.md) con una selección de APIs que puedes utilizar.

- En los recursos en formato vídeo de la UD tienes un ejemplo de cómo utilizar [Supabase](https://supabase.com/), la herramienta de creación de APIs *no-code.*  
- Si lo prefieres, puedes utilizar otra API de tu elección.

> [!TIP]
>
> Una vez seleccionada la API que utilizarás en el proyecto, ejecuta **Postman** para comprobar que los endpoints responden correctamente y puedas revisar los formatos en que se devuelven los datos.
>
> Para este apartado te recomiendo revisar el vídeo referentes a [*CORS*](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/CORS).

## 🛠️ Ejercicios

La aplicación web constará de **tres interfaces/vistas** organizadas de la siguiente manera.

### Ejercicio 1: Resumen

**Objetivo:** actuar como **página principal** de la aplicación, mostrando una colección de elementos con información organizada de manera clara. 

**Requisitos:**

- Mostrar un **listado o ranking** de elementos.
- Mostrar para cada elemento algunos **datos clave o indicadores relevantes [(KPIs)](https://es.wikipedia.org/wiki/Indicador_clave_de_rendimiento)**

[*Ejemplo*.](./recursos/interfaces/1_resumen.html)

### Ejercicio 2: Visualización de Datos

**Objetivo:** explorar o ampliar la información de un elemento seleccionado previamente en la interfaz de *Resumen*.

**Requisitos:** mostrar un **elemento interactivo**. Puedes elegir entre:

- **Gráfico**. [*Ejemplo*.](./recursos/interfaces/2_visualizacion_datos_grafico.html)
- **Tabla comparativa**. [*Ejemplo*.](./recursos/interfaces/2_visualizacion_datos_tabla_comparativa.html)

> [!NOTE]
>
> El elemento deberá reaccionar a la interacción del usuario y permitir acciones como consultar información adicional, filtrar, ordenar o seleccionar datos.

### Ejercicio 3: Funcionalidad Adicional

**Objetivo:** incorporar una funcionalidad adicional.

Implementa **una de las siguientes opciones**:

- **Favoritos:** permite marcar y desmarcar elementos como favoritos y conservar esta selección. El usuario deberá poder consultar posteriormente los elementos guardados.  [*Ejemplo*.](./recursos/interfaces/3_funcionalidad_extra_favoritos.html)
- **Filtros o búsqueda:** permite filtrar los elementos mostrados utilizando al menos **dos criterios** relacionados con los datos de la API. Los resultados deberán actualizarse en función de las opciones seleccionadas por el usuario.  [*Ejemplo*.](./recursos/interfaces/3_funcionalidad_extra_filtros_busqueda.html)

---

### Ejercicio Opcional:

- Mientras se realiza una consulta a la interfaz *Resumen* de la API, muestra un **indicador de carga** en formato *spinner*, *progress bar* o similar . 

- Si la consulta falla, **informa del error en la interfaz** y evita que la aplicación quede en un estado inconsistente.

---

> [!IMPORTANT]
>
> Tanto en el **Ejercicio 2** como en el **Ejercicio 3** puedes implementar una funcionalidad diferente a las propuestas si se adapta mejor a la temática de tu aplicación.
>
> En ese caso, consúltame previamente por correo electrónico para que pueda darte el visto bueno.

### 
