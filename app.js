const ProductManager = require("./ProductManager");

// Crear una instancia de ProductManager
const manager = new ProductManager("./productos.txt");

// Obtener los productos actuales
console.log("Productos actuales:", manager.getProducts());

// Agregar un nuevo producto
manager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

// Obtener los productos actualizados
console.log("Productos actualizados:", manager.getProducts());

// Obtener un producto por su ID
console.log("Producto con ID 1:", manager.getProductById(1));

// Actualizar un producto
const updatedProduct = {
  id: 1,
  title: "producto actualizado",
  description: "Este es un producto actualizado",
  price: 300,
  thumbnail: "Imagen actualizada",
  code: "def456",
  stock: 10,
};
manager.updateProduct(updatedProduct.id, updatedProduct);
console.log("Producto actualizado:", manager.getProductById(1));

// Eliminar un producto
manager.deleteProduct(1);
console.log("Producto eliminado:", manager.getProducts());
