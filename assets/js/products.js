class Product{
    constructor(name, price, photo, description){
        this.id = this.calculateProductID();
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.description = description;
    };

    calculateProductID(){
        if(localStorage.getItem("products")){
            return JSON.parse(localStorage.getItem("products")).length;
        }else{
            return 0;
        }
    };

    loadDataLocalStorage(){
        let arrayOfProducts = [];
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
    if(localStorage.getItem("products")){
        const products = JSON.parse(localStorage.getItem("products"));
        displayCards( products );
    }else{
        createProducts();
    }
    
};

function displayCards(products){
    let productCards = products.map( product => 
        `<a href="#" class="grid-product-item">
            <img src="${product.photo}" class="card-img-top" alt="Bebida Crazy Ichigo(Maracuya)">
            <div class="card-body">
            <p class="card-description text-center" > ${product.name} </p>
            <p class="card-description text-center"> ${product.price} </p>
            <p class="card-text">${product.description}</p>
            </div>
        </a>`
        );
    const productosContainer = document.getElementById("grid-products-container");

    productosContainer.innerHTML = productCards.join("");
            
};

function createProducts(){
    const products = [];
    let product;
   
    product = new Product("Caramelo","$80","/assets/img/carmelo.webp","Dulce bebida con perlas de tapioca en caramelo suave y delicioso.");
    product.loadDataLocalStorage();

    product = new Product("Explosión de chocolate","$70","/assets/img/chocolate.webp","Sedosa bebida con perlas de tapioca sumergidas en un cremoso y rico chocolate.")
    product.loadDataLocalStorage();

    product = new Product("Fresa Refresher","$60","/assets/img/fresaRefresher.webp","Refrescante bebida con perlas de tapioca en aroma y sabor a fresa jugosa.")
    product.loadDataLocalStorage();

    product = new Product("Granada","$50","/assets/img/granada.webp","Vibrante bebida con perlas de tapioca y el dulzor único de la granada.")
    product.loadDataLocalStorage();

    product = new Product("Ken","$90","/assets/img/ken.webp","Refrescante bebida con perlas de tapioca en sabor a uva jugosa y dulce.");
    product.loadDataLocalStorage();

    product = new Product("Mora Azul","$70","/assets/img/moraazul.webp","Deliciosa bebida con perlas de tapioca y el sabor agridulce de las moras azules.");
    product.loadDataLocalStorage();

    product = new Product("Kiwi Refresher","$80","/assets/img/kiwirefresher.webp","Refrescante bebida con perlas de tapioca en sabor a kiwi tropical y vivaz.");
    product.loadDataLocalStorage();

    product = new Product("Maracuyá","$60","/assets/img/maracuya.webp","Exótica bebida con perlas de tapioca y el sabor audaz del maracuyá.");
    product.loadDataLocalStorage();

    product = new Product("Maracuyá","$60","/assets/img/maracuya.webp","Exótica bebida con perlas de tapioca y el sabor audaz del maracuyá.");
    product.loadDataLocalStorage();
    
    product = new Product("Vanilla","$65","/assets/img/vanilla.webp"," Suave bebida con perlas de tapioca y el delicado aroma de la vainilla.");
    product.loadDataLocalStorage();    
}

downloadDataLocalStorage();