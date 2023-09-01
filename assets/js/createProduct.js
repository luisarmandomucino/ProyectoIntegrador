//---------------Crear producto
//Obtener datos con el Id del forms
//Obtener la informacion del form

class NewProduct {
    constructor( name, price, size, stock, disguise, description, photoFile){
        this.id = calculateProductID();
        this.nameNewProduct = name;
        this.priceNewProduct = price;
        this.sizeNewProduct = size;
        this.stockNewProduct = stock;
        this.disguiseNewProduct = disguise;
        this.descriptionNewProduct = description;
        this.photoFileNewProduct = photoFile;
        
    }

    calculateProductID(){ //Calculating ID for each product
        if(localStorage.getItem("products")){
            let productos = JSON.parse(localStorage.getItem("products"));
            console.log(productos)
            return parseInt([productos.length-1].id) + 1;
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

const form = document.forms["formCreateProduct"];

form.addEventListener("click", function(event){
    event.preventDefault();
    const nameNewProduct = document.getElementById("nom-producto");
    const sizeNewProduct = document.getElementById("size");
    const stockNewProduct = document.getElementById("stock");
    const disguiseNewProduct = document.getElementById("disguise");
    const descriptionNewProduct = document.getElementById("description");
    const photoFileNewProduct = document.getElementById("photoFile");
    const priceNewProduct = document.getElementById("price");  

        
    
        const productInf = [];
        productInf.push(new NewProduct(id, nameNewProduct.value, priceNewProduct.value, sizeNewProduct.value, stockNewProduct.value, disguiseNewProduct.value ))

        console.log(productInf);


        
        
    



    

    


console.log(newProduct); 





    
});