function loadProducts(){
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        container = document.getElementById("container-carrito");
        carrito.map( value => 
            `
                
            `
        );


    }
}

//loadProducts();