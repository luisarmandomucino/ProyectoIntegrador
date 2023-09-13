
const storedData = JSON.parse(localStorage.getItem("products"));
const storedId = localStorage.getItem("product");//"1"

let i;
for( i=0; i<storedData.length;i++){
    if(storedData[i].id == storedId){
        break;
    }
}
const productoUno =  storedData[i] ;

const name = document.getElementById("nom-producto");
const price = document.getElementById("price");
const size = document.getElementById("size");
const stock = document.getElementById("stock");
const description = document.getElementById("descripcion");
const hide = document.getElementById("disguise");
const photo = document.getElementById("photo");

name.setAttribute("value", productoUno.name);
price.setAttribute("value", productoUno.price);
size.setAttribute("value", productoUno.size);
stock.setAttribute("value", productoUno.stock);
description.setAttribute("value", productoUno.description);
description.innerHTML = productoUno.description;
photo.setAttribute("src",productoUno.photo);
hide.setAttribute("value",productoUno.hide);








