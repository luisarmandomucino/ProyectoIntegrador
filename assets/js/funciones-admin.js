
//---------mostrar producto----------
function localStorageData() {

    if (localStorage.getItem('products')) {
        const data = localStorage.getItem('products');
        const products = JSON.parse(data);
        showProducts(products);
    };
};
let products = localStorageData();

function showProducts(products) {
    let productCard = products.map((product) =>
        `
        <div class="row header-product py-3 p-0 m-0 mw-100">
                <p class="id-product ">${product.id}</p>
                <img class="img-product " src="${product.photo}" alt="bebida de tapioca"> 
                <p class="name-product text ">${product.name}</p>
                <p class="price-product ">$${product.price}</p>
                <p class="description-product ">${product.description}</p> 
                <div class="icons icon-actions-products text-center d-flex justify-content-center align-items-start p-0">        
                    <a class="icon-link checkoutProduct mb-1" aria-current="page p-0" idproduct="${product.id}" href="./checkoutProduct.html">
                        <i class="bi bi-eye-fill"></i>
                    </a>          
                    <a class="icon-link editProduct mb-1" aria-current="page p-0" idproduct="${product.id}" href="editProduct.html">
                        <i class="bi bi-gear-fill"></i>
                    </a>          
                    <a class="icon-link deleteProduct p-0" idproduct="${product.id}" aria-current="page" href="./admin.html">
                        <i class="bi bi-x-square-fill " ></i>
                    </a> 
                </div>
         </div>   
         `
    );
    let product = document.getElementById("containerProducts");
    product.innerHTML = productCard.join("");
};

localStorageData();

/* Eliminar producto */
const deleteProduct = document.querySelectorAll(".deleteProduct");
deleteProduct.forEach(product => product.addEventListener('click', () => {
    const keyProduct = product.getAttribute("idProduct");
    let storedData = JSON.parse(localStorage.getItem("products"));
    storedData = storedData.filter(product => {
        return product.id !== parseInt(keyProduct)
    });

    /* Save data local storage */
    localStorage.setItem("products", JSON.stringify(storedData));
}));

const viewProduct = document.querySelectorAll(".checkoutProduct");
viewProduct.forEach(product => product.addEventListener("click", () => {
    const keyProduct = product.getAttribute("idProduct");
    localStorage.setItem("product", keyProduct);
}));

/* edit product */
const editProduct = document.querySelectorAll(".editProduct");
editProduct.forEach(product => product.addEventListener("click", () => {
    const keyProduct = product.getAttribute("idProduct");
    localStorage.setItem("productModify", keyProduct);
})); 