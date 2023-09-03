const storedData = JSON.parse(localStorage.getItem("products"));
// traernos el id del producto a modificar
const storedId = localStorage.getItem("productModify");

let i;
for( i=0; i<storedData.length;i++){
    if(storedData[i].id == storedId){
        break;
    }
}
const productoUno =  storedData[i] ;//storedData[1]

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
photo.setAttribute("src",productoUno.photo)
description.innerHTML = productoUno.description;

hide.setAttribute("value",productoUno.hide);

//buscamos el producto en el arreglo del local storage
/* mostrar los datos del producto en los inputs */

   


class NewProduct {
    constructor( id,name, price, size, stock, disguise, description, photoFile){
        this.id = id;
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
        let i;
                    for( i=0; i<products.length;i++){
                        if(products[i].id == this.id){
                            products[i]=this;
                        }
        }
     
        }else{
            products = [this];
        }
        
        localStorage.setItem("products",JSON.stringify(products));
        
    };
};


    //Actualizar los datos
    const saveButton = document.getElementById("save-button");

    //saveButton.addEventListener("click", () => {
        const form = document.forms["formEditProduct"];

        
/*Cargar imágenes */
let reader;
document.getElementById("formFile").addEventListener("change", function () {
    reader = new FileReader();

    reader.addEventListener("load", () => {

    });
    reader.readAsDataURL(this.files[0]);
})
/********************************************* */
    form.addEventListener("submit", function(){
      
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
       
    
        });       
    
    
    //});






