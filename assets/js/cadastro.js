let btnSubmit = document.getElementById("cadastrar");

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    alert("NÃO FOI POSSÍVEL ENVIAR OS DADOS DO FORMULÁRIO")
})

function togglePopup(input, label) {
    input.addEventListener("focus", (e) => {
        label.classList.add("required-popup");
    });

    input.addEventListener("blur", (e) => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

//---------- VALIDAÇÃO DE USUSARIO ----------

let nameInput = document.getElementById("name");
let nameLabel = document.querySelector("label[for=name]");
let nameHelper = document.getElementById("name-helper");

togglePopup(nameInput, nameLabel)

nameInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if (valor.length < 3) {
        nameHelper.innerText = "Nome de usuário precisa ter um mínimo de 3 caracteres";
        estilizarInputIncorreto(nameInput, nameHelper);
    } else {
        estilizarInputCorreto(nameInput, nameHelper);
    }
})

//---------- VALIDAÇÃO DE EMAIL ----------

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector("label[for=email]");
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if (valor.includes("@") && valor.includes(".com")) {
        estilizarInputCorreto(emailInput, emailHelper);
    } else {
        emailHelper.innerText = "Insira um email válido";
        estilizarInputIncorreto(emailInput, emailHelper);
    }
})

/**---------- VALIDAÇÃO DE CPF ---------- */

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector("label[for=cpf]");
let cpfHelper = document.getElementById("cpf-helper");

togglePopup(cpfInput, cpfLabel)

cpfInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.length != 11) {
        cpfHelper.innerText = "CPF inválido";
        estilizarInputIncorreto(cpfInput, cpfHelper);
    } else {
        estilizarInputCorreto(cpfInput, cpfHelper);
    }
})

/** ---------- VALIDAÇÃO DE SENHA ---------- */

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector("label[for=senha]");
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value;


    if (valor == '') {
        senhaHelper.innerText = "Precisa digitar uma senha válida";
        estilizarInputIncorreto(senhaInput, senhaHelper);
    } else {
        
        estilizarInputCorreto(senhaInput,   senhaHelper);
    }

})

/** ---------- VALIDAR CONFIRMAR SENHA ---------- */

let confirmaSenhaInput = document.getElementById("confirmar-senha");
let confirmaSenhaLabel = document.querySelector("label[for=confirmar-senha]");
let confirmaSenhaHelper = document.getElementById("confirmar-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("change", (e) => {
    let valor = e.target.value;


    if (valor != senhaInput.value) {
        confirmaSenhaHelper.innerText = "Por favor verifique se as senhas coincidem.";
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
        
    }else {
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    }

})