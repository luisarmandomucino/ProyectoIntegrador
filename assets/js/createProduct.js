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
        this.photoFile = photoFile;
        
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

const form = document.getElementById;

form.addEventListener("submit", function(event){
    //event.preventDefault();
    const nameNewProduct = document.getElementById("nom-producto");
    const sizeNewProduct = document.getElementById("size");
    const stockNewProduct = document.getElementById("stock");
    const disguiseNewProduct = document.getElementById("disguise");
    const descriptionNewProduct = document.getElementById("description");
    const photoFileNewProduct = document.getElementById("photoFile");
    const priceNewProduct = document.getElementById("price");

        const productInf = new NewProduct(nameNewProduct.value, priceNewProduct.value, sizeNewProduct.value, stockNewProduct.value, disguiseNewProduct.value, descriptionNewProduct.value, photoFileNewProduct.value)

        productInf.loadDataLocalStorage();
        
});

//         document.getElementById("photoFile").addEventListener("change",()=>{
//     const reader = new FileReader();
//     reader.addEventListener("load",()=>{
//         localStorage.setItem("img",reader.result);
//     });
//     //reader.readAsDataURL(this.files[0]);
// })

//Validacion de datos
