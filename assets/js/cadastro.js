let bodySite = document.querySelector('body')

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

});

//Estilizando a parte do footer com JS
let footerFormaPagamento = document.getElementById('forma-de-pagamento');
footerFormaPagamento.className = 'mais-vendidos';

//Criando a div endereço com JS
let rodaPe = document.querySelector('footer');
let endereco = document.createElement('address');
endereco.className = 'localização';
let rua = document.createElement('p');
rua.textContent = `Av. das Comunicações, 927 - Vila Jaragua, Osasco - SP, 06276-906 `
let mapa = document.createElement('iframe');
mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234209.32274921096!2d-46.93548836074468!3d-23.477748530972793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefc20c090c4eb%3A0xb42d0ff375fbe216!2sJequiti%20Cosm%C3%A9ticos!5e0!3m2!1spt-BR!2sbr!4v1699739333176!5m2!1spt-BR!2sbr" width="800" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
let condicoesRodape = document.createElement('p');
condicoesRodape.textContent = `Todos os preços e condições divulgados são válidos apenas para compras no site. Destacamos que os preços previstos no site
        prevalecem aos demais anunciados em outros meios de comunicação e sites de buscas. Em caso de divergência, o preço
        válido é o do carrinho de compras. Imagens meramente ilustrativas. Confira condições na sacola de compras.
        Todas as promoções de brindes não são acumulativas, serão aplicadas apenas 1x por pedido.
        Em promoções com produtos selecionados, são válidas apenas as cores dos produtos
        disponíveis na página da promoção, ainda que o produto possua outras variações de cor, essas não estarão inclusas.
        As promoções consideram apenas o valor do pedido, ou seja, o valor do frete não é considerado para atingir o valor mínimo das promoções.`

endereco.style.display = 'flex';
endereco.style.flexDirection = 'column'
endereco.style.textAlign = 'center';
endereco.style.width = 'auto';
endereco.style.alignItems = 'center';
endereco.style.marginLeft = '300px';
endereco.style.marginRight = '300px';
condicoesRodape.style.width = 'auto';
condicoesRodape.style.paddingTop = '10px';


endereco.appendChild(rua);
endereco.appendChild(mapa);
endereco.appendChild(condicoesRodape);
rodaPe.appendChild(endereco);
bodySite.appendChild(rodaPe);
