
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

console.log('1. Catálogo Completo de Productos:');
console.table(productos);

const productosEconomicos = filtrarEconomicos(productos, 100);
console.log('\n2. Productos con Precio < $100 (filter):');
console.table(productosEconomicos);

const productosOrdenados = ordenarPorNombre(productosEconomicos);
console.log('\n3. Productos Económicos Ordenados Alfabéticamente (sort):');
console.table(productosOrdenados);