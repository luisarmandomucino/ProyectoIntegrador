class Product{
    constructor(name, price, size, stock, hide, photo, description){
        this.id = this.calculateProductID();
        this.name = name;
        this.price = price;
        this.size = size;
        this.stock = stock;
        this.hide = hide;
        this.photo = photo;
        this.description = description;
    };

    calculateProductID(){ //Calculating ID for each product
        if(localStorage.getItem("products")){
            return JSON.parse(localStorage.getItem("products")).length;
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

function downloadDataLocalStorage(){
    if(localStorage.getItem("products")){ //If data in LS exists...
        const products = JSON.parse(localStorage.getItem("products"));
        displayCards( products );
    }else{ //If don't, create data in LS
        createProducts();
    }
    
};

function displayCards(products){
    // //Creating cards from array of objects
    // let productCards = products.map( product => 
    //     `<a href="#" class="grid-product-item">
    //         <img src="${product.photo}" class="card-img-top" alt="Bebida Crazy Ichigo(Maracuya)">
    //         <div class="card-body">
    //         <p class="card-description text-center" > ${product.name} </p>
    //         <p class="card-description text-center"> ${product.price} </p>
    //         <p class="card-text">${product.description}</p>
    //         </div>
    //     </a>`
    //     );
    // //Getting product container to display products
    // const productosContainer = document.getElementById("grid-products-container");

    // //Display array of products in DOM
    // productosContainer.innerHTML = productCards.join("");
            
};

function createProducts(){
    const products = [];
    let product;
   
    product = new Product("Caramelo","$80","grande",50,1,"/assets/img/carmelo.webp","Dulce bebida con perlas de tapioca en caramelo suave y delicioso.");
    product.loadDataLocalStorage();

    product = new Product("Explosión de chocolate", "$70", "grande", 50, 1,"/assets/img/chocolate.webp","Sedosa bebida con perlas de tapioca sumergidas en un cremoso y rico chocolate.")
    product.loadDataLocalStorage();

    product = new Product("Fresa Refresher", "$60", "grande", 50, 1, "/assets/img/fresaRefresher.webp","Refrescante bebida con perlas de tapioca en aroma y sabor a fresa jugosa.")
    product.loadDataLocalStorage();

    product = new Product("Granada", "$50", "grande", 50, 1, "/assets/img/granada.webp","Vibrante bebida con perlas de tapioca y el dulzor único de la granada.")
    product.loadDataLocalStorage();

    product = new Product("Ken", "$90", "grande", 50, 1, "/assets/img/ken.webp","Refrescante bebida con perlas de tapioca en sabor a uva jugosa y dulce.");
    product.loadDataLocalStorage();

    product = new Product("Mora Azul", "$70", "grande", 50, 1, "/assets/img/moraazul.webp","Deliciosa bebida con perlas de tapioca y el sabor agridulce de las moras azules.");
    product.loadDataLocalStorage();

    product = new Product("Kiwi Refresher", "$80", "grande", 50, 1, "/assets/img/kiwirefresher.webp","Refrescante bebida con perlas de tapioca en sabor a kiwi tropical y vivaz.");
    product.loadDataLocalStorage();

    product = new Product("Maracuyá", "$60", "grande", 50, 1, "/assets/img/maracuya.webp","Exótica bebida con perlas de tapioca y el sabor audaz del maracuyá.");
    product.loadDataLocalStorage();

    product = new Product("Maracuyá", "$60", "grande", 50, 1, "/assets/img/maracuya.webp","Exótica bebida con perlas de tapioca y el sabor audaz del maracuyá.");
    product.loadDataLocalStorage();
    
    product = new Product("Vanilla", "$65", "grande", 50, 1, "/assets/img/vanilla.webp"," Suave bebida con perlas de tapioca y el delicado aroma de la vainilla.");
    product.loadDataLocalStorage();    
}

downloadDataLocalStorage();



// Botón Ver producto 


const viewProduct = document.getElementById("checkoutProduct");
viewProduct.addEventListener (`click`, ()=> { 
    // if (localSotrage.getItem("prodcuts") ) { 
    //     const storedData = JSON.parse( localSotrage.getItem("products"));
    // };
    
    const keyProduct = "1";
    localStorage.setItem("product", keyProduct );

    

    

}); 












//---------modificar producto----------

const editProduct = document.getElementById("editProduct")
editProduct.addEventListener('click', ()=>{
    
    console.log('Hola');
    
   /*  const idProducto = document.getElementsByClassName("id-product");
    idContenido = idProducto.innerHTML;
    console.log(idContenido);


    localStorage
 */



});







// Eliminar producto
const deleteProduct = document.getElementById("deleteProduct");
deleteProduct.addEventListener('click', ()=>{
    /*  -- Tomar el contenido de la etiqueta id  -- */
    /* nos lleva a la etiqueta padre: cardProductExample */
    const cardProductExample = deleteProduct.parentNode.parentNode;

    /* ahora nos vamos una etiqueta hija para tomar el valor de ID*/
    const idProduct = parseInt(cardProductExample.querySelector('.id-product').innerHTML) 

    /* ahora buscamos este id en el localStorage y lo eliminamos*/
    let storedData = JSON.parse(localStorage.getItem("products"));
    
    console.log(storedData)
    storedData = storedData.filter( product => {
        return product.id !== idProduct
    } )
    console.log(storedData)

    /* guardamos los datos actualizados al local storage */
    localStorage.setItem("products",JSON.stringify(storedData));

    
    /* refrescar pagina al terminar de eliminar el producto */
    /* setTimeout(function() {
        location.reload();
    }, 2000); */
})