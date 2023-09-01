
  document.addEventListener('DOMContentLoaded', function() {
    const nomProductoInput = document.getElementById('nom-producto');
    const priceInput = document.getElementById('price');
    const sizeInput = document.getElementById('size');
    const stockInput = document.getElementById('stock');
    const disguiseInput = document.getElementById('disguise');
    const descripcionInput = document.getElementById('descripcion');
    const saveButton = document.getElementById('save-button');
    //<button type="submit" id="save-button" class="text-center">Guardar</button>

    console.log("console.log(nomProductoInput);");
    console.log(nomProductoInput);
    

    saveButton.addEventListener('click', function(event) {
      event.preventDefault();

      const nomProducto = nomProductoInput.value;
      const price = priceInput.value;
      const size = sizeInput.value;
      const stock = stockInput.value;
      const disguise = disguiseInput.value;
      const descripcion = descripcionInput.value;
      const formFileInput = document.getElementById("formFile");
      const imageObject = {};

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

            const productData = {
              nomProducto,
              price,
              size,
              stock,
              disguise,
              descripcion,
              image: img
            };
            
            // Guardar la imagen en el localStorage
            let productList = JSON.parse(localStorage.getItem('productList')) || [];
            // Agregar el nuevo producto a la lista
            productList.push(productData);

            // Almacenar la lista actualizada en el almacenamiento local
            localStorage.setItem('productList', JSON.stringify(productList));
            alert('El archivo se guardo con exito.');
            
          };
          
          // Leer el archivo como una URL de datos
          reader.readAsDataURL(selectedFile);
    window.location.href = '../pages/admin.html';
          
          // Aquí puedes agregar el código para guardar la imagen en localStorage o hacer lo que necesites
        }
      } else {
        // No se seleccionó ningún archivo
        alert('Por favor, selecciona un archivo antes de guardar.');
      }

    });
  });
