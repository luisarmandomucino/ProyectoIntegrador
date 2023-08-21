


function dataValidation( event ){
    //event.preventDefault();

    let message = [];
    const messagesBox = document.getElementById("messages-box")
    const firstName = document.getElementById("validationName").value;
    const lastName = document.getElementById("validationLastName").value;
    const telNumber = document.getElementById("validationTel").value;
    const email = document.getElementById("validationEmail").value;
    const asunto = document.getElementById("validationAsunto").value;

    if(!firstName){
        message.push( "<p class='alert'>Hace falta el nombre</p>");
    }

    if(!lastName){
        console.log("lastname")
        message.push( "<p class='alert'>Hace falta el apellido</p>");
    }

    if (!telNumber) {
        message.push("<p class='alert'>Hace falta el número de telefono</p>");
    }
    
    if (!asunto) {
        message.push("<p class='alert'>Hace falta el asunto</p>");
    }

    if (!email) {
        message.push("<p class='alert'>Hace falta el email</p>");
    }

    messagesBox.innerHTML = message.join("");
}

const formButton = document.getElementById("form-button");

formButton.addEventListener("click", event => dataValidation( event ))

const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
       event.preventDefault(); 
       
        let name = document.getElementById("validationName").value;
        let email = document.getElementById("validationEmail").value;
        let message = document.getElementById("validationAsunto").value;

          
          let emailData = {
                to: "allanolivier1997@gmail.com",
                subject: "Nuevo mensaje de contacto",
                body: "Nombre: " + name + "\nCorreo electrónico: " + email + "\nMensaje: " + message
            };

         
            alert("Mensaje enviado con éxito");
        });


