//---------------Crear producto
class NewProduct {
  constructor( name, price, size, stock, disguise, description, photoFile){
      this.id = this.calculateProductID();
      this.name = name;
      this.price = price;
      this.size = size;
      this.stock = stock;
      this.hide = disguise;
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

/*Cargar imágenes */
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
  
  const saveButton = document.getElementById("formCreateProduct");

  const infoErrorBox = document.getElementById('form-error-info');
  const  nomProductoInput= document.getElementById('nom-producto').value;//.value solo se puede utilizar cuando se quiere obtener el valor de una etiq. input.
  const priceInput = document.getElementById('price').value;
  const sizeInput = document.getElementById('size').value;
  const stockInput = document.getElementById('stock').value;
  const disguiseInput = document.getElementById('disguise').value;
  const descriptionInput = document.getElementById('description').value;

  //const numRegExp =  /\d{10}/;
  const lettersRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const nRegExp = /^\d{1,}$/;
  const hideRegExp = /^[0-1]{1}$/;
  let message = [];  //cambie el const a let por que me marcaba un error.
  
  if (!nomProductoInput) {  
    message.push("<p class='alert'>Hace falta el nombre del producto</p>");
  } else if (!lettersRegExp.test(nomProductoInput)) {
    message.push(
      "<p class='alert'>Está mal el nombre, debe ser solo letras </p>"
    );
  }

  if (!priceInput) { //Valida entrada de numeros
    message.push("<p class='alert'> Hace falta el precio</p>");
  } else if (!nRegExp.test(priceInput)) {
    message.push(
      "<p class='alert'>Esta mal el precio, Deben ser numeros</p>"
    );
  }

  if (!sizeInput) { //Valida entrada de letras 
    message.push("<p class='alert'>Ingrese el tamaño </p>");
  } else if (!lettersRegExp.test(sizeInput)) {
    message.push("<p class='alert'> No es un tamaño valido</p>");
  }

  if (!stockInput) {  // Valida el numero de stock
    message.push("<p class='alert'>Ingrese la cantidad</p>");
  } else if (!nRegExp.test(stockInput)) {
    message.push(
      "<p class='alert'>El Número de existencias debe ser en números</p>"
    );
  }

    if (!disguiseInput) {
    message.push("<p class='alert'>Ingrese 0 o 1</p>");
  } else if (!hideRegExp.test(disguiseInput)) {
    message.push(
      "<p class='alert'>El campo ocultar se llena con 0 o 1</p>"
    );
  }
  
  if (!descriptionInput) {
    message.push("<p class='alert'>Ingrese la descripcion del producto</p>");
  } 
  
 
  if( ! reader?.result ){
    message.push("<p class='alert'>Hace falta agregar la foto</p>");
  }

  message = message.join("");
  infoErrorBox.innerHTML = message; 
 //


if ( message != [] ){ //Si hay errores
    event.preventDefault(); //No nos manda a admin
  }else{ //Si no hay errores
    //event.preventDefault(); 


    const nameNewProduct = document.getElementById("nom-producto");
    const sizeNewProduct = document.getElementById("size");
    const stockNewProduct = document.getElementById("stock");
    const disguiseNewProduct = document.getElementById("disguise");
    const descriptionNewProduct = document.getElementById("description");
    //const photoFileNewProduct = document.getElementById("photoFile");
    const priceNewProduct = document.getElementById("price");

    const productInf = new NewProduct(
      nameNewProduct.value,
      priceNewProduct.value,
      sizeNewProduct.value,
      stockNewProduct.value,
      disguiseNewProduct.value,
      descriptionNewProduct.value,
      reader?.result)

    productInf.loadDataLocalStorage();
  }

});


