//---------------Crear producto
class NewProduct {
    constructor( name, price, size, stock, disguise, description, photoFile){
        this.id = this.calculateProductID();
        this.name = name;
        this.price = price;
        this.size = size;
        this.stock = stock;
        this.disguise = disguise;
        this.description = description;
        this.photo = photoFile;
        
    }

    calculateProductID(){ //Calculating ID for each product
        if(localStorage.getItem("products")){
            let productos = JSON.parse(localStorage.getItem("products"));
            console.log(productos)
            return parseInt(productos[productos.length-1].id) + 1;
        }else{
            return 0;
        }
    };

    loadDataLocalStorage(){  //Function to save data in LS
        let arrayOfProducts = []; //Creating array of products
        let products;
        if(localStorage.getItem("products")){

            products = JSON.parse(localStorage.getItem("products"));
            products.push(this);
        }else{
            products = [this];
        }
        
        localStorage.setItem("products",JSON.stringify(products));
        
    };
};

/*Cargar imágenes al Local Storage */
let reader;
document.getElementById("photoFile").addEventListener("change", function () {
    reader = new FileReader();

    reader.addEventListener("load", () => {

    });
    reader.readAsDataURL(this.files[0]);
})
/********************************************* */

const form = document.getElementById("formCreateProduct");

form.addEventListener("submit", function(event){
    //event.preventDefault();
    const nameNewProduct = document.getElementById("nom-producto");
    const sizeNewProduct = document.getElementById("size");
    const stockNewProduct = document.getElementById("stock");
    const disguiseNewProduct = document.getElementById("disguise");
    const descriptionNewProduct = document.getElementById("description");
    const photoFileNewProduct = document.getElementById("photoFile");
    const priceNewProduct = document.getElementById("price");

        const productInf = new NewProduct(nameNewProduct.value, priceNewProduct.value, sizeNewProduct.value, stockNewProduct.value, disguiseNewProduct.value, descriptionNewProduct.value, reader.result)

        productInf.loadDataLocalStorage();
        
});


 







// ------Validacion de datos--------
function dataValidation(event){


    let message = [];

    /* =================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const nomProductoInput = document.getElementById('nom-producto').value;
    const priceInput = document.getElementById('price').value;
    const sizeInput = document.getElementById('size').value;
    const stockInput = document.getElementById('stock').value;
    const disguiseInput = document.getElementById('disguise').value;
    const descriptionInput = document.getElementById('description').innerHTML;
    const saveButton = document.getElementById('save-button').value;

    
    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        const nomProducto = nomProductoInput.value;
        const price = priceInput.value;
        const size = sizeInput.value;
        const stock = stockInput.value;
        const disguise = disguiseInput.value;
        const description = descriptionInput.innerHTML;
        const photoFileInput = document.getElementById("photoFile");
        
      
    
//


 
/*     const nameProductRegExp= /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/; // valide letras numeros, acentos etc. */
    const lettersRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;// valide letras
    const numRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;//valide solo numeros


  if (!nom-producto) {  
    message.push("<p class='alert'>Hace falta el nombre del producto</p>");
  } else if (!lettersRegExp.test(nom-producto)) {
    message.push(
      "<p class='alert'>Está mal el nombre, debe ser solo letras </p>"
    );
  }

  if (!price) { //Valida entrada de numeros
    message.push("<p class='alert'> Hace falta el precio</p>");
  } else if (!numRegExp.test(price)) {
    message.push(
      "<p class='alert'>Esta mal el precio, Deben ser numeros</p>"
    );
  }

  if (!size) { //Valida entrada de letras 
    message.push("<p class='alert'>Ingrese el tamaño </p>");
  } else if (!lettersRegExp.test(size)) {
    message.push("<p class='alert'> No es un tamaño valido</p>");
  }

  if (!stock) {  // Valida el numero de stock
    message.push("<p class='alert'>Ingrese la cantidad</p>");
  } else if (!numRegExp.test(stock)) {
    message.push(
      "<p class='alert'>El Número de existencias debe ser en números</p>"
    );
  }

    if (!disguise) {
    message.push("<p class='alert'>Ingrese la cantidad</p>");
  } else if (!numRegExp.test(disguise)) {
    message.push(
      "<p class='alert'>Este campo debe llenarse con números</p>"
    );
  }
  
  if (!description) {
    message.push("<p class='alert'>Hace falta la descripcion del producto</p>");
  }

  message = message.join("");
  infoErrorBox.innerHTML = message;
})


    });
}
