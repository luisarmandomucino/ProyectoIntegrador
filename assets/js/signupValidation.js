class User {
    constructor(name, phone, email, password, birthday, address, profilePhoto) {
        this.id = this.calculateID();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.address = address;
        this.photo = profilePhoto;
    }

    calculateID() {
        if (localStorage.getItem("users")) {
            let users = localStorage.getItem("users");
            users = JSON.parse(users);
            return users.length;
        } else {
            return 0;
        }
    }

    loadDataLocalStorage() {  //Function to save data in LS
        let users;
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
            users.push(this);
        } else {
            users = [this];
        }

        localStorage.setItem("users", JSON.stringify(users));

    };


};

let reader;
document.getElementById("photoFile").addEventListener("change", function () {
    reader = new FileReader();

    reader.addEventListener("load", () => {

    });
    reader.readAsDataURL(this.files[0]);
});

/********************************************* */

/* emailpassword, birthday, User
      this.email = email;
      this.password = password;
      this.birthday = birthday;this.address = address;photo = profilePhotoUserif (localStorage.getItem) {
    
} else { */

//

const btn = document.getElementById("form-button");

btn.addEventListener("submit", function (e) {


    const infoErrorBox = document.getElementById('form-error-info');
    const name = document.getElementById("full-name");
    const email = document.getElementById("mail");
    const password = document.getElementById("password");
    const passwordConfirmation = document.getElementById("password-confirmation")
    const birthday = document.getElementById("date");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");

    //Expresiones de validacion
    const lettersRegExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    const nRegExp = /^\d{10,14}$/;
    const passwordExp = /^(?=.*[0-9])(?=.*[A-Z]).{8,10}$/;
    let message = [];

    /* if (!name) {
      message.push("<p class='alert'>Ingresa tu nombre completo</p>");
    } else if (!lettersRegExp.test(name.value)) {
      message.push( "<p class='alert'> Opps, algo anda mal, tu nombre deben ser solo letras</p>");
    } */
    if (!name.value || !lettersRegExp.test(name.value)) {
        const errorMessage = document.getElementById('error-name');
        errorMessage.innerHTML = "<p class='alert mt-3'>El nombre solo puede contener letras y con el minimo de caracteres de:</p>";
        message.push("error-name");
        console.log(mensaje);
    }

    /* if (!email) { 
      message.push("<p class='alert'>Ingresa tu email</p>");
    } else if (!lettersRegExp.test(email)) {
      message.push(
        "<p class='alert'>Opps, algo anda mal, tu email debe contener un @</p>"
      );
    } */
    if (!email.value || !lettersRegExp.test(email.value)) {
        const errorMessage = document.getElementById('error-email');
        errorMessage.innerHTML = "<p class='alert mt-3'>Ingresa tu email y recuerda que debe contener un @</p>";
        message.push("error-email");
        console.log(mensaje);
    }

    /* if (!password) { 
      message.push("<p class='alert'>Ingresa tu contraseña</p>");
    } else if (!passwordExp.test(password)) { 
      message.push("<p class='alert'>Opps, algo anda mal, vuelve a ingresar una contraseña valida</p>");
    } */
    if (!password.value || !passwordExp.test(password.value)) {
        const errorMessage = document.getElementById('error-password');
        errorMessage.innerHTML = "<p class='alert mt-3'>Ingresa tu contraseña o ingresa una válida</p>";
        message.push("error-password");
        console.log(mensaje);
    }

    /* if (!passwordConfirmation) { 
      message.push("<p class='alert'>Ingresa la confirmacion de tu contraseña</p>");
    } 
    else if (password != passwordConfirmation) { 
      message.push("<p class='alert'>Tus contraseñas no coinciden</p>");
    }  */
    if (!passwordConfirmation.value || password.value != passwordConfirmation.value) {
        const errorMessage = document.getElementById('error-password-confirmation');
        errorMessage.innerHTML = "<p class='alert mt-3'>Ingresa tu contraseña o ingresa una válida</p>";
        message.push("error-password-confirmation");
        console.log(mensaje);
    }



    if (!phone.value) {
        message.push("<p class='alert'>Ingrese tu numero de telefono</p>");
    } else if (!nRegExp.test(phone.value)) {
        message.push(
            "<p class='alert'>Opps, algo anda mal, solo debe contener 10 dígitos</p>"
        );
    }


    if (!address.value) {
        message.push("<p class='alert'>Ingrese tu domicilio</p>");
    }

    if (!date.value) {
        message.push("<p class='alert'>Ingrese su fecha de nacimiento</p>");
    }

    if (!reader?.result) {
        message.push("<p class='alert'>Hace falta agregar tu foto</p>");
    }

    message = message.join("");
    infoErrorBox.innerHTML = message;

    if (message != []) { //Si hay errores
        e.preventDefault(); //No nos manda a admin
    } else { //Si no hay errores
       
        const user = new User(name.value, phone.value, email.value, password.value, birthday.value, address.value);
        user.emailExists();
        user.loadDataLocalStorage();

    }

    //no borrar plis 
    /* if(!name || !lettersRegExp.test(name)){
      const errorMessage = document.getElementById('error-name');
      errorMessage.innerHTML = "<p class='alert mt-3'>El nombre solo puede contener letras y con el minimo de caracteres de:</p>";
      message.push("error");
      console.log(mensaje);
    } */

})


