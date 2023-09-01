const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('productoId');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el índice del objeto que deseas obtener (por ejemplo, el primer objeto)
    const targetIndex = productoId;
    const saveButton = document.getElementById('save-button');
    const nombreProducto = document.getElementById('edit-nom-producto');
    const precio = document.getElementById('edit-price');
    const size = document.getElementById('edit-size');
    const stock = document.getElementById('edit-stock');
    const disguise = document.getElementById('edit-disguise');
    const descripcion = document.getElementById('edit-descripcion');
    const formFileInput = document.getElementById("formFile");
    const imagenElement = document.getElementById('edit-imagen');
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

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        console.log(nombreProducto.value);
        console.log(precio.value);
        console.log(size.value);
        const selectedFile = formFileInput.files[0];

        if (selectedFile) {
          const fileSize = selectedFile.size; // Tamaño del archivo en bytes
          const maxSize = 500 * 1024; // Tamaño máximo permitido: 0.5 MB en bytes
      
          if (fileSize > maxSize) {
            // El archivo supera el tamaño máximo permitido
            alert('El archivo seleccionado es demasiado grande. Debe ser menor a 0.5 MB.');
          } else {
            // El archivo es válido, puedes continuar con el proceso de guardar la imagen
            const reader = new FileReader();
      
            reader.onload = function(event) {
              // El evento "onload" se activa cuando se ha leído el archivo correctamente
              const imageData = event.target.result; // Esto contiene la imagen como una URL de datos
  
              const img = {
              name: selectedFile.name,
              base64: imageData
              };
  
              const productList = JSON.parse(localStorage.getItem('productList')) || [];

              // Verificar si el índice es válido y obtener el objeto correspondiente
              if (targetIndex >= 0 && targetIndex < productList.length) {
                const productEdit = productList[targetIndex];
                
                // Modificar atributos del objeto
               // productEdit.price = 99.99; // Cambiar el precio, por ejemplo
      
               productEdit.nomProducto = nombreProducto.value;
               productEdit.price = precio.value;
               productEdit.size = size.value;
               productEdit.stock = stock.value;
               productEdit.disguise = disguise.value;
               productEdit.descripcion = descripcion.value;
               productEdit.image = img;
               
                
                // Actualizar la lista en el almacenamiento local
                localStorage.setItem('productList', JSON.stringify(productList));
          
                console.log('Objeto modificado:', productEdit);
          
                // Hacer algo con el objeto modificado, como mostrar sus propiedades en la página
                 // Optionally show a success message or perform other actions
              alert('El producto se guardo exitosamente.');
        
              window.location.href = '../pages/admin.html';
              } else {
                console.log('Índice de objeto no válido.');
              }              
            };
            
            // Leer el archivo como una URL de datos
            reader.readAsDataURL(selectedFile);
            window.location.href = '../pages/admin.html';
            
            // Aquí puedes agregar el código para guardar la imagen en localStorage o hacer lo que necesites
          }
        } else {
          // No se seleccionó ningún archivo
          
          const productList = JSON.parse(localStorage.getItem('productList')) || [];

          // Verificar si el índice es válido y obtener el objeto correspondiente
          if (targetIndex >= 0 && targetIndex < productList.length) {
            const productEdit = productList[targetIndex];
            
            // Modificar atributos del objeto
           // productEdit.price = 99.99; // Cambiar el precio, por ejemplo
  
           productEdit.nomProducto = nombreProducto.value;
           productEdit.price = precio.value;
           productEdit.size = size.value;
           productEdit.stock = stock.value;
           productEdit.disguise = disguise.value;
           productEdit.descripcion = descripcion.value;
  
           
            
            // Actualizar la lista en el almacenamiento local
            localStorage.setItem('productList', JSON.stringify(productList));
      
            console.log('Objeto modificado:', productEdit);
      
            // Hacer algo con el objeto modificado, como mostrar sus propiedades en la página
             // Optionally show a success message or perform other actions
          alert('El producto se guardo exitosamente.');
    
          window.location.href = '../pages/admin.html';
          } else {
            console.log('Índice de objeto no válido.');
          }

        }

      });

  });
