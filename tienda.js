
export const productos = [
  { id: 1, nombre: 'Camiseta', precio: 15, categoria: 'Ropa' },
  { id: 2, nombre: 'Laptop', precio: 800, categoria: 'Electrónica' },
  { id: 3, nombre: 'Libro', precio: 12, categoria: 'Educación' },
  { id: 4, nombre: 'Zapatos', precio: 50, categoria: 'Ropa' },
  { id: 5, nombre: 'Celular', precio: 600, categoria: 'Electrónica' },
  { id: 6, nombre: 'Teclado Mecánico', precio: 75, categoria: 'Electrónica' },
  { id: 7, nombre: 'Mouse Inalámbrico', precio: 25, categoria: 'Electrónica' },
  { id: 8, nombre: 'Monitor Gamer', precio: 320, categoria: 'Electrónica' }
];

export const filtrarEconomicos = (lista, limite = 100) => {
  return lista.filter((prod) => prod.precio < limite);
};

export const ordenarPorNombre = (lista) => {
  return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
};

export const obtenerNombres = (lista) => {
  return lista.map((prod) => prod.nombre);
};

export const calcularValorTotalInventario = (lista) => {
  return lista.reduce((acumulado, prod) => acumulado + prod.precio, 0);
};

export const buscarPorNombre = (lista, nombre) => {
  return lista.find((prod) => prod.nombre.toLowerCase() === nombre.toLowerCase()) ?? null;
};

export const existeCategoria = (lista, categoria) => {
  return lista.some((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase());
};

export const todosTienenPrecioPositivo = (lista) => {
  return lista.every((prod) => prod.precio > 0);
};

const ejecutarDemostracion = () => {
  console.log('======================================================');
  console.log('       GESTION DE PRODUCTOS - TIENDA ONLINE           ');
  console.log('======================================================\n');

  console.log('1. Catálogo Completo de Productos:');
  console.table(productos);

  const productosEconomicos = filtrarEconomicos(productos, 100);
  console.log('\n2. Productos con Precio < $100 (filter):');
  console.table(productosEconomicos);

  const productosOrdenados = ordenarPorNombre(productosEconomicos);
  console.log('\n3. Productos Económicos Ordenados Alfabéticamente (sort):');
  console.table(productosOrdenados);

  const nombresEconomicos = obtenerNombres(productosOrdenados);
  console.log('\n4. Lista de Nombres de Productos Económicos (map):');
  console.log(nombresEconomicos);

  console.log('\n5. Análisis y Métodos Avanzados:');
  const valorTotal = calcularValorTotalInventario(productos);
  const precioPromedio = valorTotal / productos.length;
  console.log(`  * Valor Total del Inventario (reduce): $${valorTotal.toFixed(2)} USD`);
  console.log(`  * Precio Promedio por Producto       : $${precioPromedio.toFixed(2)} USD`);

  const busqueda = buscarPorNombre(productos, 'Laptop');
  console.log('  * Búsqueda de producto "Laptop" (find):', busqueda);

  const hayElectronica = existeCategoria(productos, 'Electrónica');
  console.log(`  * ¿Hay productos de categoría 'Electrónica'? (some): ${hayElectronica ? 'Sí' : 'No'}`);

  const preciosValidos = todosTienenPrecioPositivo(productos);
  console.log(`  * ¿Todos los productos tienen precio válido > 0? (every): ${preciosValidos ? 'Sí' : 'No'}`);
  console.log('\n======================================================\n');
};


ejecutarDemostracion();