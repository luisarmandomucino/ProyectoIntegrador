
// const keyProduct = "2";
// localStorage.setItem("product", keyProduct);
//---------mostrar producto----------



function localStorageData(){

  if(localStorage.getItem('products')){
   const data = localStorage.getItem('products');
    const products = JSON.parse(data);
    console.log(products);
    showProducts(products);

  }
 
}
let products = localStorageData();

function showProducts(products) {
    let productCard = products.map((product)=>
         
        `
        <div class="row text-center align-items-center justify-content-between">
          <p class="id-product col-2">${product.id}</p>
          <img class="img-product col-2" src="${product.photo}" alt="bebida de tapioca"/>
          <p class="name-product col-2">${product.name}</p>
          <p class="price-product col-2">${product.price}</p>
          <p class="description-product col-md-2">${product.description}</p>
          <div class="icons col-2">
          

            <a class="icon-link checkoutProduct" aria-current="page" idProduct="${product.id}" href="./checkoutProduct.html" >
              <i class="bi bi-eye-fill"></i>
            </a>          

            <a class="icon-link editProduct" aria-current="page" idProduct="${product.id}" href="editProduct.html">
              <i class="bi bi-gear-fill"  ></i>
            </a>          

            <a class="icon-link deleteProduct" idProduct="${product.id}" aria-current="page" idProduct="${product.id}" href="./admin.html">
        
              <i class="bi bi-x-square-fill "  ></i>
            </a>    
            
          </div>
        </div>
      `
    ); 
    console.log(productCard)
    let product = document.getElementById("containerProducts");
    product.innerHTML = productCard.join("");    
      
}

localStorageData();

// Eliminar producto
const deleteProduct = document.querySelectorAll(".deleteProduct");
deleteProduct.forEach( product=> product.addEventListener('click', () => {
    /*  -- Tomar el contenido de la etiqueta id  -- */
    /* nos lleva a la etiqueta padre: cardProductExample */
    // const cardProductExample = deleteProduct.parentNode.parentNode;
    const keyProduct = product.getAttribute("idProduct");
    /* ahora nos vamos una etiqueta hija para tomar el valor de ID*/
    // const idProduct = parseInt(cardProductExample.querySelector('.id-product').innerHTML)

    /* ahora buscamos este id en el localStorage y lo eliminamos*/
    let storedData = JSON.parse(localStorage.getItem("products"));

    console.log(storedData)
    storedData = storedData.filter(product => {
        return product.id !== parseInt(keyProduct)
    })
    console.log(storedData)

    /* guardamos los datos actualizados al local storage */
    localStorage.setItem("products", JSON.stringify(storedData));

}))

const viewProduct = document.querySelectorAll(".checkoutProduct");
viewProduct.forEach(product => product.addEventListener("click", () => {
    // if (localSotrage.getItem("prodcuts") ) { 
    //     const storedData = JSON.parse( localSotrage.getItem("products"));
    // };

    const keyProduct = product.getAttribute("idProduct");
    localStorage.setItem("product", keyProduct);

})); 