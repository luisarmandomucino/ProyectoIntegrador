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
const photo = document.getElementById("photo");


name.setAttribute("value", productoUno.name);
price.setAttribute("value", productoUno.price);
size.setAttribute("value", productoUno.size);
stock.setAttribute("value", productoUno.stock);

description.innerHTML = productoUno.description;

hide.setAttribute("value",productoUno.hide);

//buscamos el producto en el arreglo del local storage
/* mostrar los datos del producto en los inputs */




   




    //Actualizar los datos
    const saveButton = document.getElementById("save-button");

    //saveButton.addEventListener("click", () => {
        const form = document.forms["formEditProduct"];

    form.addEventListener("submit", function(){
        //event.preventDefault();
        const nameNewProduct = document.getElementById("nom-producto");
        const sizeNewProduct = document.getElementById("size");
        const stockNewProduct = document.getElementById("stock");
        const disguiseNewProduct = document.getElementById("disguise");
        const descriptionNewProduct = document.getElementById("descripcion");
        const photoFileNewProduct = document.getElementById("photoFile");
        const priceNewProduct = document.getElementById("price");
        

        
        const productInf = new NewProduct(nameNewProduct.value, priceNewProduct.value, sizeNewProduct.value, stockNewProduct.value, disguiseNewProduct.value, descriptionNewProduct.value, photoFileNewProduct.value)

        productInf.loadDataLocalStorage();
        console.log(productInf);  
    
        });       
    
    
    //});






