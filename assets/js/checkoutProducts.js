const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('productoId');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el índice del objeto que deseas obtener (por ejemplo, el primer objeto)
    const targetIndex = productoId;
    const saveButton = document.getElementById('save-button');
    const nombreProducto = document.getElementById('nom-producto');
    const precio = document.getElementById('price');
    const size = document.getElementById('size');
    const stock = document.getElementById('stock');
    const disguise = document.getElementById('disguise');
    const descripcion = document.getElementById('descripcion');
    const imagenElement = document.getElementById('imagen');
    // Obtener la lista completa de productos desde el almacenamiento local
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Verificar si el índice es válido y obtener el objeto correspondiente
    if (targetIndex >= 0 && targetIndex < productList.length) {
      const product = productList[targetIndex];
      console.log('Objeto obtenido:', product);
      nombreProducto.value = product.nomProducto;
      precio.value = product.price;
      size.value = product.size;
      stock.value = product.stock;
      disguise.value = product.disguise;
      descripcion.value = product.descripcion;
      // Establecer la URL de datos como fuente de la imagen
      imagenElement.src = product.image.base64;
    } else {
      console.log('Índice de objeto no válido.');
    }

let i;
for( i=0; i<storedData.length;i++){
    if(storedData[i].id == storedId){
        break;
    }
}
});
const productoUno =  storedData[i] ;//storedData[1]










