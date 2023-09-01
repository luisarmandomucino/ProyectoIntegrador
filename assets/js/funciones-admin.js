document.addEventListener('DOMContentLoaded', function() {
    // Obtener la referencia al elemento donde deseas mostrar la tabla
    const tableBody = document.getElementById('product-table-body');
    var botones;

    // Obtener la lista de productos desde el almacenamiento local
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Generar el contenido HTML de la tabla
    //<td>${product.stock}</td>
    //<td>${product.disguise}</td>
    //<td>${product.size}</td>
    let tableHTML = '';
    productList.forEach((product, index) => {

      tableHTML += `
        <tr>
          <td>${index + 1}</td>
          <td><img class="img-product col-2" src="${product.image.base64}"/></td>
          <td>${product.nomProducto}</td>
          <td>$${product.price}</td>
          <td>${product.descripcion}</td>
        <td>
        <a class="icon-link" aria-current="page" href="./checkoutProduct.html?productoId=${index}"">
        <i class="bi bi-eye-fill"></i>
        </a>
        <a class="icon-link" aria-current="page" href="editProduct.html?productoId=${index}"">
        <i class="bi bi-gear-fill"  ></i></a>
        <a class="icon-link mi-boton" aria-current="page" type="button" id="${index}"">
        <i class="bi bi-x-square-fill"></i>
        </a>
        </td>
        </tr>
      `;

    });

    // Agregar el contenido HTML a la tabla
    tableBody.innerHTML = tableHTML;
    botones = document.querySelectorAll('.mi-boton');

    botones.forEach(function(boton) {
      boton.addEventListener('click', function() {


        

        const respuesta = confirm('¿Estás seguro de eliminar?');

        if (respuesta === true) {
                  // Tu código para manejar el clic del botón aquí
        console.log('Se hizo clic en el botón con la clase "mi-boton"' + boton.id);
        // Paso 1: Obtén el array del localStorage
        const arrayEnLocalStorage = JSON.parse(localStorage.getItem('productList'));

        // Paso 2: Encuentra el índice del elemento que deseas eliminar (por ejemplo, el elemento en la posición 2)
        const indiceAEliminar = boton.id;

        // Paso 3: Utiliza el método splice() para eliminar el elemento
        if (indiceAEliminar >= 0 && indiceAEliminar < arrayEnLocalStorage.length) {
        arrayEnLocalStorage.splice(indiceAEliminar, 1); // Elimina 1 elemento a partir del índice especificado
        }

        // Paso 4: Vuelve a guardar el array actualizado en el localStorage
        localStorage.setItem('productList', JSON.stringify(arrayEnLocalStorage));
        window.location.href = '../pages/admin.html';
        } else {

        }

      });
    });

});