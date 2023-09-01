document.addEventListener("DOMContentLoaded", () => {
    const formEditProduct = document.getElementById("formEditProduct");
    const nomProducto = document.getElementById("nom-producto");
    const price = document.getElementById("price");
    const size =  document.getElementById("size");
    const stock = document.getElementById("stock");
    const disguise = document.getElementById("disguise");
    const description = document.getElementById("descripcion");
    const formFile = documen.getElementById("formFile");
    const saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", () => {
        fetchSaveData();
        saveButton.disabled = true;

        

    });
    
    const 
    const cachedData = JSON.parse(localStorage.getItem("saveData"))

});