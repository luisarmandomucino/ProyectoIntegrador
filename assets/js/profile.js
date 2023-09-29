
/* getUserById */
async function getUserById(id){
    try {
        const url='http://localhost:8080/api/user/'+ id;
        const responseJSON = await fetch(url);
        const response = await responseJSON.json();
        if(response.ok){
            console.log(response);
            return response;
        }
  
    } catch (error) {
     console.log(error)   
    }
    
}
//getUserById(1)


// modificar
async function modifyUser(user){
    const url = `http://localhost:8080/api/user/${user.id}`;
    try{ 
        const response = await fetch(url,{
            methot: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });
        const responseData = await response.json();

        if(responseJSON.ok){
            console.log(responseData);
        } else {
            console.log("Error en la solicitud");
        }
    } catch (error){
        console.error(error);
    }

}

//Delete User
async function deleteUser(userId){
    const deleteUrl = "http://localhost:8080/api/user/" + userId;
    try {
        const response = await fetch(deleteUrl, {
            method: "DELETE",
        });
            if (!response.ok) {
                throw new Error("Error al eliminar usuario")
            }
        console.log("producto eliminado");
    } catch (error) {
        console.error(console.error);
    } 
}

//deleteUser(1)     Funcionó pero hay que modificar la base de datos



//const storedId = localStorage.getItem("profile");  Obtiene el ID del perfil almacenado en localStorage

async function getUserById(id){
    try {
        const url='http://localhost:8080/api/user/' + id;
        const responseJSON = await fetch(url);
        const response = await responseJSON.json();
        if(response.ok){
            localStorage.setItem("userData", JSON,stringify(response));
            console.log(response);
            return response;
        }
    } catch (error) {
     console.log(error)   
    }
}

let userData = JSON.parse(localStorage.getItem("userData"));

if(userData){
    const fullname = userData.fullname;
    const email = userData.email;
    const id = userData.user_id;

    console.log("Fullname:", fullname);
    console.log("Email:", email);
    console.log("id", id);
}else{
    console.log("no hay datos");
}

/* async function getProfile() {
    try {
        const user = await getUserById(storedId);
       
        if(user) {
            userData = user;
        
        
        
        fullname.value = profileData.fullname;
        email.value = profileData.email;
       }
    } catch (error) {
        console.log(error);
    }
} */

//getProfile();  Llamada a la función para obtener el perfil

/* 
// render mi perfil

const name = document.getElementById("name");
const email = document.getElementById("correo");

function getProfile() {
    fetch ("http://localhost:8080/api/user/2")
    .then (response => response.json())
    .then(userData => {
        name.value = userData.fullname;
        email.value= userData.email;
    })
    .catch(error => {
        console.log("Error al obtener datos del usuario", error);
    });

}

async function getOrderById(orderId){
    const orderUrl = "http://localhost:8080/api/orders/" + orderId;
    try{
        const response = await fetch(orderUrl);
        
        if (!response.ok) {
            throw new Error("Error");
        }

        const order = await response.json();
        //console.table(order);
        return order;
    } catch(error) {
        throw error;
    }
}*/

async function getOrders(){
    const orderUrl = "http://localhost:8080/api/orders";
    try{
        const response = await fetch(orderUrl);
        
        if (!response.ok) {
            throw new Error("Error");
        }

        const order = await response.json();
        console.table(order);

        showOrder(order);
        return order;
    } catch(error) {
        throw error;
    }
}
async function getOrdersByUserId(userId){
    try {
        const orders = await getOrders();

        const ordersMatch = orders.filter(order => order.userData.user_id=== userId);

        if(ordersMatch.length === 0) {
            console.log("no exiten ordenes");
            return;
        }

        showOrder(ordersMatch);
    }catch(error){
        console.error(error);
    }

function showOrder(orderId){ 
    //  No puede ser el mismo nombre que tu parámetro: orderId
    let orderHTML = orderId.map( ord =>
      
        `
        <div class="p-0 m-0 col-12 header-pedido">
            <div class="m-0-p-0 d-flex  justify-content-center">
              <p class="m-0 p-0">${ord.order_id}</p>
            </div>

            <div class="m-0 p-0 d-flex align-items-center justify-content-center">
              <p class="m-0 p-0">${ord.total_amount}</p>
            </div>
            
            <div class="m-0 p-0 d-flex align-items-center justify-content-center">
              <p class="m-0 p-0">${ord.purchase_date}</p>
            </div>

            <div class="icons icon-actions-products text-center m-0 p-0">        
                <a class="icon-link checkoutOrder mb-1 " aria-current="page" idOrder="${ord.order_id}" href="./verPedido.html">
                    <i class="bi bi-eye-fill"></i>
                </a>          
       
                <a class="icon-link deleteOrder p-0 " aria-current="page" idOrder="${ord.order_id}" href="./admin.html">
                    <i class="bi bi-x-square-fill"></i>
                </a> 
            </div>
          </div>
        `
    );

    const orderContainer=document.getElementById("order-container");
    orderContainer.innerHTML=orderHTML.join("");

    const checkoutOrder = document.querySelectorAll(".checkoutOrder");
    checkoutOrder.forEach(product => product.addEventListener('click', () => {
        const keyProduct = product.getAttribute("idOrder");
        localStorage.setItem("orderId",keyProduct);
     }));

}

}

getOrdersByUserId(2);
//getOrders(); 



/* 
    const ordersContainer = document.querySelector(".header-pedido");
    console.log(orders); //No imprime nada
    ordersContainer.innerHTML = `
        
    `;

    orders.forEach (order => {
        const orderRow= document.createElement("div");
        orderRow.classList.add ("p-0", "col-12", "header-order");

        const id = createTableCell(order.id); //No existe createTableCell
        const quantity = createTableCell(order.quantity)
        const price = createTableCell(`${order.price_product}`);
        const products = createTableCell(order.fk_product_id);

        orderRow.appendChild(id);
        orderRow.appendChild(quantity);
        orderRow.appendChild(price);
        orderRow.appendChild(products);

        ordersContainer.appendChild(orderRow);

        ordersContainer.classList.remove("hidden");

   

    })

}*/
