const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event){
    
    const infoErrorBox = document.getElementById('form-error-info');
    let message = []

    const email = document.getElementById("correo");
    const password = document.getElementById("contrasena");
    const emailError = document.getElementById("error-email");
    const passwordError = document.getElementById("error-password");
   
    
    if( !email.value ){
        message.push("<p class='alert'>Ingresa tu email </p>")
        emailError.innerHTML = "<p class='alert'>Ingresa tu email </p>";
    }else{
        emailError.innerHTML = "";
    }
    
    if( !password.value ){
        message.push("<p class='alert'>Ingresa tu password </p>")
        passwordError.innerHTML = "<p class='alert'>Ingresa tu password</p>";    
    }else{
        passwordError.innerHTML = "";
    }

    if(message.length>0){
        event.preventDefault();
    }else{
        if (localStorage.getItem("users")) {
            const users = JSON.parse(localStorage.getItem("users"));

            const emailFound = users.filter( value => value.email == email.value );

            if( emailFound.length > 0 ){
                emailError.innerHTML = "";

                const passwordFound = users.filter( value => value.password == password.value );

                if( passwordFound.length > 0 ){
                    passwordError.innerHTML = "";
                }else{
                    event.preventDefault();
                    passwordError.innerHTML ="<p class='alert'>Password no válido</p>";    
                }
            }else{
                event.preventDefault();
                emailError.innerHTML = "<p class='alert'>No existe ese email </p>";
            }
        }else{
            event.preventDefault();
            emailError.innerHTML = "<p class='alert'>No existe ese email </p>";
        }
    }
});


