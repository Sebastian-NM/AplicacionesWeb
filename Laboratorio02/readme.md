# Estilos de CSS con React

### 1. CSS Tradicional

**Descripción:**  
Consiste en escribir los estilos en archivos `.css` externos y vincularlos a los componentes de React mediante clases. Es el método más clásico y ampliamente difundido para aplicar estilos en el desarrollo web.

**Ventajas:**
- Separación clara entre el diseño visual y la lógica de la aplicación.
- Amplia compatibilidad con herramientas y editores.
- Familiar para la mayoría de los desarrolladores con experiencia en frontend.

**Desventajas:**
- Alta probabilidad de conflictos entre clases cuando la aplicación crece.
- Falta de encapsulamiento: un estilo puede afectar otros componentes de forma no deseada.
- Difícil mantenimiento en proyectos grandes sin una convención estricta de nombres.

**Perspectiva personal:**  
He usado este método mayoritariamente y me parece sencillo de aplicar, pero cuando los componentes aumentan, los estilos se mezclan y es complicado mantener el orden. Hay mejores opciones.

### 2. Módulos CSS

**Descripción:**  
Los módulos CSS permiten importar estilos como objetos en los componentes, generando nombres únicos para cada clase. Esto proporciona encapsulamiento y evita conflictos de estilos entre componentes.

**Ventajas:**
- Los estilos están limitados al componente donde se usan, evitando interferencias.
- Permite seguir utilizando sintaxis CSS estándar.
- Mejora la organización del código en proyectos medianos y grandes.

**Desventajas:**
- El acceso a las clases mediante objetos puede resultar poco intuitivo para quienes recién inician en React.
- No es ideal para estilos altamente dinámicos o condicionales.

**Perspectiva personal:**  
Me parece una buena opción porque no cambia mucho la forma tradicional de trabajar con CSS, pero sí ayuda a evitar errores. 

### 3. Inline Styles

**Descripción:**  
Esta estrategia consiste en aplicar estilos directamente a los elementos mediante propiedades JavaScript. Se definen los estilos como objetos dentro del componente.

**Ventajas:**
- Ideal para aplicar estilos específicos o condicionales rápidamente.
- Evita colisiones entre clases.
- Permite mantener todo el código en un solo lugar (estilo, estructura y lógica).

**Desventajas:**
- No permite el uso de pseudoclases ni media queries.
- Dificulta la reutilización y mantenimiento de estilos a largo plazo.
- Puede afectar el rendimiento si se abusa de esta técnica.

**Perspectiva personal:**  
Es poco profesional y poco mantenible, según lo aprendido en clase, sólo se debe usar cómo última opción.

### 4. Styled Components

**Descripción:**  
Es una librería basada en CSS-in-JS que permite crear componentes estilizados en React, encapsulando tanto la estructura como el estilo. Los estilos se escriben utilizando literales de plantilla y pueden recibir props.

**Ventajas:**
- Encapsulamiento completo del estilo por componente.
- Permite el uso de lógica para alterar los estilos dinámicamente.
- Mejora la cohesión entre el diseño y la funcionalidad del componente.
- Evita completamente los conflictos de nombres de clase.

**Desventajas:**
- Añade una dependencia externa al proyecto.
- Incrementa el tamaño del bundle en aplicaciones grandes.
- La sintaxis puede ser nueva o poco amigable para quienes provienen de un enfoque tradicional.

**Perspectiva personal:**  
Me gusta a simple vista porque los estilos están bien organizados y se sienten más "modernos".


### 5. TailwindCSS

**Descripción:**  
Tailwind es un framework de utilidades CSS que proporciona clases predefinidas para aplicar estilos directamente en el JSX. Promueve un enfoque basado en clases utilitarias.

**Ventajas:**
- Desarrollo rápido y visualmente consistente.
- Excelente para diseño responsivo y personalización mediante configuración.
- Reduce la necesidad de escribir CSS personalizado.

**Desventajas:**
- Puede generar JSX saturado de clases, lo que afecta la legibilidad.
- Requiere tiempo para familiarizarse con las utilidades y su convención.
- Puede dificultar la separación de lógica y estilo.

**Perspectiva personal:**  
He visto que es muy usado, me parece muy útil, creo que necesito practicar más antes de usarlo en proyectos grandes.


### 6. Emotion

**Descripción:**  
Emotion es una librería similar a Styled Components que permite aplicar estilos dentro de JavaScript. Ofrece flexibilidad para escribir estilos como objetos o como cadenas, y tiene buen rendimiento.

**Ventajas:**
- Soporte avanzado para estilos dinámicos y tematización.
- Compatible con TypeScript y entornos modernos.
- Flexibilidad para elegir entre varios métodos de escritura de estilos.

**Desventajas:**
- Añade complejidad y requiere curva de aprendizaje.
- Comunidad más pequeña en comparación con otras opciones como Tailwind o Styled Components.

**Perspectiva personal:**  
No he usado esta herramienta todavía, pero me parece interesante por la forma en que permite combinar estilos con lógica.