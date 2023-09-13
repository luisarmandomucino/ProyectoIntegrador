class Encuesta {
    constructor(service, experience, recomendation, comments) {
        this.id = this.calculateID();
        this.service = service;
        this.experience = experience;
        this.recomendation = recomendation;
        this.comments = comments;
    }
    calculateID() {
        if (localStorage.getItem("encuestas")) {
            let encuestas = localStorage.getItem("encuestas");
            encuestas = JSON.parse(encuestas);
            return encuestas.length;
        } else {
            return 0;
        }
    }
    loadDataLocalStorage() {
        let encuestas;
        if (localStorage.getItem("encuestas")) {
            encuestas = JSON.parse(localStorage.getItem("encuestas"));
            encuestas.push(this);
        } else {
            encuestas = [this];
        }
        localStorage.setItem("encuestas", JSON.stringify(encuestas));
    };
};

const form = document.getElementById("encuesta-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let message = [];

    const infoErrorBox = document.getElementById("form-error-info");
    const coments = document.getElementById("validationComents");
    let optionSer = document.getElementsByName("optionSer");
    let answerSer = "";
    let optionExp = document.getElementsByName("optionExp");
    let answerExp = "";
    let optionRecom = document.getElementsByName("optionRecom");
    let answerRecom = "";

    if (coments.value >= 0) {
        message.push("<p class='alert'>Hace falta los comentarios</p>")
    }

    message = message.join("");
    infoErrorBox.innerHTML = message;


    for (let i = 0; i < optionSer.length; i++) {
        if (optionSer[i].checked) {
            answerSer = optionSer[i].value;
            break;
        }
    }
    for (let i = 0; i < optionExp.length; i++) {
        if (optionExp[i].checked) {
            answerExp = optionExp[i].value;
            break;
        }
    }
    for (let i = 0; i < optionRecom.length; i++) {
        if (optionRecom[i].checked) {
            answerRecom = optionRecom[i].value;
            break;
        }
    }

    if (message != []) {
        event.preventDefault();
    } else {
        const encuesta = new Encuesta(answerSer, answerExp, answerRecom, coments.value);
        encuesta.loadDataLocalStorage();

        (() => {
            Swal.fire({
                icon: "success",
                text: "Encuesta enviada con éxito",
                showConfirmButton: true,
            });
        })();
    }


})