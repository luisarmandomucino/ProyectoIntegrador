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


    

  calculateID(){
    if(localStorage.getItem("users")){
        let users = localStorage.getItem("users");
        users = JSON.parse(users);
        return users.length;
    }else{
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

  }

 /* emailpassword, birthday, User
      this.email = email;
      this.password = password;
      this.birthday = birthday;this.address = address;photo = profilePhotoUserif (localStorage.getItem) {
    
} else { */
    
}




const btn = document.getElementById("form-button");
btn.addEventListener("click", (e) => {
     //e.preventDefault(); 

const name = document.getElementById("full-name");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const birthday = document.getElementById("date");
const phone = document.getElementById("phone");
const address = document.getElementById("address");

const user = new User(name.value, phone.value, email.value, password.value, birthday.value, address.value);
user.loadDataLocalStorage();

});







/*                 ("uss")   users =  JSON.parse(localStorage.getItem("users"));
        console.log(user) 
    return parseInt(users[users.length - 1].id) + 1;    return 0;          ;        
                  users = J      users.pus          husers         rs  } */




                                     // todo esto está mal escrito 
    //lo puedo comentar? es que quiero probar pero me salen errores
// simon sin falla comentalo
//si jalo, lo descomento ahora

