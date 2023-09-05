const storedData = JSON.parse(localStorage.getItem("products"));
// traernos el id del producto a modificar
const storedId = localStorage.getItem("productModify");

let i;
for (i = 0; i < storedData.length; i++) {
    if (storedData[i].id == storedId) {
        break;
    }
}
const productoUno = storedData[i];//storedData[1]

const name = document.getElementById("nom-producto");
const price = document.getElementById("price");
const size = document.getElementById("size");
const stock = document.getElementById("stock");
const description = document.getElementById("descripcion");
const hide = document.getElementById("disguise");
const photo = document.getElementById("img-form-producto");


name.setAttribute("value", productoUno.name);
price.setAttribute("value", productoUno.price);
size.setAttribute("value", productoUno.size);
stock.setAttribute("value", productoUno.stock);
photo.setAttribute("src", productoUno.photo)
description.innerHTML = productoUno.description;

hide.setAttribute("value", productoUno.hide);

//buscamos el producto en el arreglo del local storage
/* mostrar los datos del producto en los inputs */

class NewProduct {
    constructor(id, name, price, size, stock, disguise, description, photoFile) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
        this.stock = stock;
        this.hide = disguise;
        this.description = description;
        this.photo = photoFile;

    }

    calculateProductID() { //Calculating ID for each product
        if (localStorage.getItem("products")) {
            let productos = JSON.parse(localStorage.getItem("products"));

            return parseInt(productos[productos.length - 1].id) + 1;
        } else {
            return 0;
        }
    };

    loadDataLocalStorage() {  //Function to save data in LS
        let arrayOfProducts = []; //Creating array of products
        let products;
        if (localStorage.getItem("products")) {

            products = JSON.parse(localStorage.getItem("products"));
            let i;
            for (i = 0; i < products.length; i++) {
                if (products[i].id == this.id) {
                    products[i] = this;
                }
            }

        } else {
            products = [this];
        }

        localStorage.setItem("products", JSON.stringify(products));

    };
};


/*Cargar imágenes */
let reader;
document.getElementById("formFile").addEventListener("change", function () {
    reader = new FileReader();

    reader.addEventListener("load", () => {

    });
    reader.readAsDataURL(this.files[0]);
})

/********************************************* */


const form = document.getElementById("formEditProduct");

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const infoErrorBox = document.getElementById('form-error-info');
    const nomProductoInput = document.getElementById('nom-producto').value;//.value solo se puede utilizar cuando se quiere obtener el valor de una etiq. input.
    const priceInput = document.getElementById('price').value;
    const sizeInput = document.getElementById('size').value;
    const stockInput = document.getElementById('stock').value;
    const disguiseInput = document.getElementById('disguise').value;
    const descriptionInput = document.getElementById('descripcion').value;
    

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


    

    message = message.join("");
    infoErrorBox.innerHTML = message;
    //

    if (message != []) {
        event.preventDefault();
    } else {
        const nameNewProduct = document.getElementById("nom-producto");
        const sizeNewProduct = document.getElementById("size");
        const stockNewProduct = document.getElementById("stock");
        const disguiseNewProduct = document.getElementById("disguise");
        const descriptionNewProduct = document.getElementById("descripcion");
        const photoFileNewProduct = document.getElementById("photoFile");
        const priceNewProduct = document.getElementById("price");


        const productInf = new NewProduct(parseInt(storedId),
            nameNewProduct.value,
            priceNewProduct.value,
            sizeNewProduct.value,
            stockNewProduct.value,
            disguiseNewProduct.value,
            descriptionNewProduct.value,
            reader?.result || productoUno.photo
        );

        productInf.loadDataLocalStorage();

        form.submit();
    }

})


















