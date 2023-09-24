var splide = new Splide( '.splide', {
  type   : 'loop',
pagination: false,
  perMove: 1,
  padding: { left: 60, right: 60},
  lazyLoad: true,
  breakpoints: {
    9000: {
          perPage: 5,
           gap: 65,
    },
    1000: {
          perPage: 4,
           gap: 65,
    },
    800: {
          perPage: 3,
           gap: 65,
    },
    640: {
        perPage: 2,
         gap: 60,
    },
    440: {
        perPage: 1,
         gap: 65,
    },
  },
} );

splide.mount();

function agregarAlCarrito(e){

  idItem = botonCarrito.getAttribute("data-id");

  if(localStorage.getItem("carrito")){

    carrito = JSON.parse( localStorage.getItem("carrito") );

    let id = -1;
    
    for(let i = 0 ; i<carrito.length ; i++){

      if(carrito[i].id==idItem){
        id = i;
        break;

      }

    }

    if(id!= -1){

      carrito[id].quantity++;

    }else{

      newItem = {
        id: idItem,
        quantity: 1,
      };

      carrito.push(newItem);
    }
    
    carrito = JSON.stringify(carrito);
    localStorage.setItem("carrito", carrito);

  }else{

    newItem = {
      id: idItem,
      quantity: 1
    };

    carrito = JSON.stringify([newItem]);
    localStorage.setItem("carrito",carrito);

  }
      const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Agregado al carrito'
    })
}

botonCarrito = document.getElementById("agregar-carrito");
botonComprar = document.getElementById("comprar-ahora");

botonCarrito.addEventListener("click", agregarAlCarrito);
botonComprar.addEventListener("click", agregarAlCarrito);
