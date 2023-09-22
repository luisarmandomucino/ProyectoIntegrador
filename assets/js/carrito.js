function loadProducts(){
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        container = document.getElementById("container-carrito");
        carrito = carrito.map(
          (value) =>
            `
                <div class="col-12 m-0 p-0">
                            <div class="row g-0 align-items-center">
                        
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-3 m-0 p-0 d-flex align-items-center justify-content-center img-carrito" >
                                            <img src="/assets/img/Bubble Mora.png" class="img-fluid " alt="...">
                                        </div>

                                        <div class="col-9 text-center d-flex align-items-center justify-content-center flex-column">
                                            <div class="row">
                                                <h1 class=" title-drinks">Bebida Ken </h1>
                                            </div>

                                            <div class="row">
                                                <p class="product-d☺escription">Deliciosa bebida con perlas de tapioca sabor a uva jugosa y dulce. </p>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                               
                                
                                <div class="col-md-4">
                                    <div class="row">
                                        <div class="col-8 text-center">
                                            <p class="product-description"> Precio: $ <span class="precio-producto">90</span> </p>
                                            <label class="counter" for="contador"> Cantidad: </label>
                                            <input type="number" id="counter" min="0" max="10" step="1" value="1"> 
                                        </div>
                                
                                        <div class="col-4 text-center d-flex align-items-center justify-content-center ">
                                            <div >
                                                <a class="icon-delete" href="/assets/pages/404.html">
                                                    <i class="bi bi-trash3 size-icon" ></i>  
                                                </a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
            `
        );

            container.innerHTML = carrito.join("");
    }
}

loadProducts();