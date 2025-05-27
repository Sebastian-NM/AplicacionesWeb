## Parte 1 - Investigación

### 1. Jest

#### Descripción
Jest es un framework de pruebas desarrollado por Facebook. Es ampliamente adoptado en el ecosistema JavaScript debido a su simplicidad y funcionalidad integrada. Proporciona un entorno completo con runner, aserciones, mocks y cobertura de código sin necesidad de herramientas adicionales. NestJS lo incluye por defecto.

#### Casos de uso
- Recomendado:
  - Aplicaciones desarrolladas en NestJS o React.
  - Proyectos que requieren pruebas completas con mínima configuración adicional.
- No recomendado:
  - Proyectos que ya tienen un entorno de testing con herramientas distintas como Mocha.
  - Escenarios donde se requiere máxima velocidad en pruebas masivas (donde Vitest puede ser más rápido).

#### Ejemplo
```ts
// funciones.ts
export function sumar(a: number, b: number): number {
  return a + b;
}

// funciones.spec.ts
import { sumar } from './funciones';

describe('sumar', () => {
  it('debe retornar la suma de dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });
});
```

---

### 2. Mocha + Chai

#### Descripción
Mocha es un test runner flexible y extensible que permite estructurar pruebas unitarias y de integración. Chai es una biblioteca de aserciones que se utiliza junto a Mocha para escribir pruebas con una sintaxis más expresiva. Juntas son una solución potente y ampliamente utilizada.

#### Casos de uso
- Recomendado:
  - Proyectos legacy que ya integran Mocha/Chai.
  - Casos donde se requiera una configuración personalizada para pruebas.
- No recomendado:
  - Proyectos nuevos donde se prefiera una solución lista para usar como Jest.
  - Principiantes que podrían encontrar compleja su configuración inicial.

#### Ejemplo
```js
// funciones.js
function restar(a, b) {
  return a - b;
}
module.exports = { restar };

// funciones.spec.js
const { expect } = require('chai');
const { restar } = require('./funciones');

describe('restar', () => {
  it('debería retornar la resta de dos números', () => {
    expect(restar(5, 3)).to.equal(2);
  });
});
```

---

### 3. Vitest

#### Descripción
Vitest es una herramienta de pruebas moderna y rápida inspirada en Jest, desarrollada por el equipo de Vite. Posee una sintaxis compatible con Jest, soporte nativo para TypeScript y una velocidad de ejecución destacada. Es ideal para proyectos frontend modernos.

#### Casos de uso
- Recomendado:
  - Proyectos con Vite, Vue o React.
  - Casos donde se prioriza la velocidad de ejecución en el desarrollo.
- No recomendado:
  - Aplicaciones que no usen Vite o dependan de herramientas más tradicionales.
  - Proyectos donde se necesita soporte más maduro o extensiones avanzadas que Jest ya ofrece.

#### Ejemplo
```ts
// math.ts
export const multiplicar = (a: number, b: number) => a * b;

// math.test.ts
import { describe, it, expect } from 'vitest';
import { multiplicar } from './math';

describe('multiplicar', () => {
  it('debe multiplicar correctamente dos números', () => {
    expect(multiplicar(4, 5)).toBe(20);
  });
});
```
