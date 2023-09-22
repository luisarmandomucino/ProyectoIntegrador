let total = [];

function calcularTotal(){
    let subtotal = 0;

    const subtotalBox = document.getElementById("subTotalAmount");
    const totalBox = document.getElementById("totalAmount");
    const precioProductos = document.querySelectorAll(".precio-producto");
    const cantidadProductos = document.querySelectorAll(".cantidad");

    precioProductos.forEach((value,index)=>{
        subtotal += parseInt(value.innerHTML) * parseInt(cantidadProductos[index].value);
    });

    subtotalBox.innerHTML = subtotal;
    totalBox.innerHTML = subtotal + 50;
}

function loadProducts(){
    if(localStorage.getItem("carrito" ) && localStorage.getItem("products") ){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        container = document.getElementById("container-carrito");
        idsCarrito = carrito.map(value => value.id);
        products = JSON.parse( localStorage.getItem("products") );
        productos = products.filter(value => idsCarrito.includes(String(value.id)))
        
        productos = productos.map( (value,index) => {
            
            return `
            <div class="row g-0 align-items-center addedProduct ">
                        
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-3 m-0 p-0 d-flex align-items-center justify-content-center img-carrito" >
                            <img src="${value.photo}" class="img-fluid " alt="...">
                        </div>

                        <div class="col-9 text-center d-flex align-items-center justify-content-center flex-column">
                            <div class="row">
                                <h1 class=" title-drinks">${value.name} </h1>
                            </div>

                            <div class="row">
                                <p class="product-description">${value.description} </p>
                            </div>
                        </div>   
                    </div>
                </div>
                
                
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-6 text-center">
                            <p class="product-description"> Precio: $ <span class="precio-producto">${value.price}</span> </p>
                            <label class="counter" for="contador"> Cantidad: </label>
                            <input type="number" class="cantidad" id="counter${value.id}" min="0" max="10" step="1" value="${carrito[index].quantity}"> 
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-center flex-column botones-cantidad" >
                            <div class="row">
                                <div class="col-12">
                                    <i class="bi bi-plus-square-fill boton-mas" data-id=${value.id}></i> 
                                </div>   
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <i class="bi bi-dash-square-fill boton-menos" data-id=${value.id}></i> 
                                </div>   
                            </div>
                        </div>
                
                        <div class="col-3 text-center d-flex align-items-center justify-content-center ">
                            <div class="row">                
                                <i class="bi bi-trash3 size-icon icon-delete" data-id=${value.id}></i>  
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            `
        }
        );
        
        calcularTotal();
        container.innerHTML = productos.join("");
    }
}

loadProducts();
calcularTotal();
botonMas = document.querySelectorAll(".boton-mas");
botonMenos = document.querySelectorAll(".boton-menos");
botonEliminar = document.querySelectorAll(".icon-delete");
botonSubmit = document.getElementById("carrito-submit");

botonMas.forEach(element => {
    element.addEventListener("click",(e)=>{
        const id = element.getAttribute("data-id");
        const cantidad=document.getElementById(`counter${id}`);
        
        if(cantidad.value<10){
            cantidad.value=parseInt(cantidad.value)+1;
        }
        
        let idProducto = -1; 
        let carrito = JSON.parse( localStorage.getItem("carrito"));
        carrito = JSON.parse( localStorage.getItem("carrito") );
        
        for(let i = 0 ; i<carrito.length ; i++){
            if(carrito[i].id==id){
                idProducto = i;
                break;
            }
        }

        carrito[idProducto].quantity= cantidad.value;
        localStorage.setItem("carrito",JSON.stringify(carrito));
        calcularTotal();    
    });
    
});

botonMenos.forEach(element => {
    element.addEventListener("click",(e)=>{
        const id = element.getAttribute("data-id");
        const cantidad=document.getElementById(`counter${id}`);

        if(cantidad.value>1){
            cantidad.value=parseInt(cantidad.value)-1;
        }

        let idProducto = -1; 
        let carrito = JSON.parse( localStorage.getItem("carrito"));
        carrito = JSON.parse( localStorage.getItem("carrito") );
        
        for(let i = 0 ; i<carrito.length ; i++){
            if(carrito[i].id==id){
                idProducto = i;
                break;
            }
        }

        carrito[idProducto].quantity= cantidad.value;
        localStorage.setItem("carrito",JSON.stringify(carrito));
        calcularTotal();
    });
    
});

botonEliminar.forEach( element => {
  
    element.addEventListener("click", e =>{
    
        const id = element.getAttribute("data-id");
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito = JSON.stringify( carrito.filter(value => value.id != parseInt(id)) );
     
        localStorage.setItem("carrito",carrito);
        loadProducts();
        calcularTotal();
    } );
});

botonSubmit.addEventListener("click", e => {
    
    localStorage.removeItem("carrito");
    loadProducts();
    calcularTotal();
});