let bodySiteMaquiagem = document.querySelector('body');
let sectionNinaSecrets = document.getElementById('ninasecrets');

//Cria o elemento div e a classe produtos EUDORA.
let produtos = document.createElement('div');
produtos.className = 'produtos';

// Criando informaçoes dos produtos Eudora
let imagensEudora = [
    './assets/img-maquiagem/Blush-Iluminador-RostoCorpo-eudora.jpg',
    './assets/img-maquiagem/mascara-Cílios-Soul-eudora.jpg',
    './assets/img-maquiagem/acido-Hialurônico-eudora.jpg',
    './assets/img-maquiagem/Combo-Batom-eudora.jpg',
    
];

let productLabelEudora = [
    'Eudora',
    'Eudora',
    'Eudora',
    'Eudora',
];

let productNameEudora = [
    'Blush Iluminador',
    'Mascara p/ Cilios',
    'Àcido Hiolaurico',
    'Combo Batom',
];

let productPriceEudora = [
    'R$67,99',
    'R$44,99',
    'R$54,99',
    'R$74,97',    
];

let productPart = [
    '4x de R$17,00',
    '3x de R$15,00',
    '3x de R$18.99',
    '4x de R$18,74',
]

for (let i = 0; i < 4; i++) {

    //Criar o elemento div - bloco de produtos com as informaçoes - preço foto etc.
    let produtoBlock = document.createElement('div');
    produtoBlock.className = 'produto-block';
    
    let imagemProduto = document.createElement('img');
    imagemProduto.src = imagensEudora[i % imagensEudora.length];;

    let spanOne = document.createElement('span');
    spanOne.className = 'produto-lançamento';
    spanOne.textContent = productLabelEudora[i % productLabelEudora.length];

    let spanTwo = document.createElement('span');
    spanTwo.textContent = productNameEudora[i % productNameEudora.length];

    let spanThree = document.createElement('span');
    spanThree.className = 'produto-preço';
    spanThree.textContent = productPriceEudora[i % productPriceEudora.length];

    let spanFour = document.createElement('span');
    spanFour.className = 'produto-parcela';
    spanFour.textContent = productPart[i % productPart.length];

    let divBotaoComprarAgora = document.createElement('span');
    divBotaoComprarAgora.className = 'btn btn-three';

    let spanBotaoComprarAgora = document.createElement('span');
    spanBotaoComprarAgora.textContent = `COMPRAR AGORA`;

    sectionNinaSecrets.appendChild(produtos);
    produtos.appendChild(produtoBlock);
    produtoBlock.appendChild(imagemProduto);
    produtoBlock.appendChild(spanOne);
    produtoBlock.appendChild(spanTwo);
    produtoBlock.appendChild(spanThree);
    produtoBlock.appendChild(spanFour);
    produtoBlock.appendChild(divBotaoComprarAgora);
    divBotaoComprarAgora.appendChild(spanBotaoComprarAgora);    
}

// Criando informaçoes dos produtos Mac
let imagensMac = [
    './assets/img-maquiagem/mini-baton-winter-mac.jpg',
    './assets/img-maquiagem/kit-batons-mac.jpg',
    './assets/img-maquiagem/lapis-delineador-mac.jpg',
    './assets/img-maquiagem/mascara-de-cilios-mac.jpg',
    
];

let productLabelMac = [
    'Mac',
    'Mac',
    'Mac',
    'Mac',
];

let productNameMac = [
    'Mini Batom Mac Flush Winter',
    'Mascara de Cílios Mac Lean',
    'Lápis Deliniador Teen Plus Mac',
    'Kit 5 Batons Mac Lux Night',
];

let productPriceMac = [
    'R$149,00',
    'R$269,00',
    'R$199,00',
    'R$449,00',    
];

let productPartMac = [
    '7x de R$21,90',
    '10x de R$26,90',
    '9x de R$22,11',
    '10x de R$44,90',
];


// Criando produtos MAC
let sectionMac = document.getElementById('mac');

//Cria o elemento div e a classe produtos MAC.
let produtosMac = document.createElement('div');
produtosMac.className = 'produtos';
for (let i = 0; i < 4; i++) {

    //Criar o elemento div - bloco de produtos com as informaçoes - preço foto etc.
    let produtoBlock = document.createElement('div');
    produtoBlock.className = 'produto-block';
    
    let imagemProduto = document.createElement('img');
    imagemProduto.src = imagensMac[i % imagensMac.length];

    let spanOne = document.createElement('span');
    spanOne.className = 'produto-lançamento';
    spanOne.textContent = productLabelMac[i % productLabelMac.length];

    let spanTwo = document.createElement('span');
    spanTwo.textContent = productNameMac[i % productNameMac.length];

    let spanThree = document.createElement('span');
    spanThree.className = 'produto-preço';
    spanThree.textContent = productPriceMac[i % productPriceMac.length];

    let spanFour = document.createElement('span');
    spanFour.className = 'produto-parcela';
    spanFour.textContent = productPartMac[i % productPartMac.length];

    let divBotaoComprarAgora = document.createElement('span');
    divBotaoComprarAgora.className = 'btn btn-three';

    let spanBotaoComprarAgora = document.createElement('span');
    spanBotaoComprarAgora.textContent = `COMPRAR AGORA`;

    sectionMac.appendChild(produtosMac);
    produtosMac.appendChild(produtoBlock);
    produtoBlock.appendChild(imagemProduto);
    produtoBlock.appendChild(spanOne);
    produtoBlock.appendChild(spanTwo);
    produtoBlock.appendChild(spanThree);
    produtoBlock.appendChild(spanFour);
    produtoBlock.appendChild(divBotaoComprarAgora);
    divBotaoComprarAgora.appendChild(spanBotaoComprarAgora);    
}


// Criando informaçoes dos produtos Mac
let imagensAvon = [
    './assets/img-maquiagem/avon-mascara-supershock-cilios.jpg',
    './assets/img-maquiagem/avon-brilho-labial-rollette.jpg',
    './assets/img-maquiagem/avon-creamy-dLicious-matte.jpg',
    './assets/img-maquiagem/avon-brilho-labial-rollette-gloss.jpg',
    
];

let productLabelAvon = [
    'Avon',
    'Avon',
    'Avon',
    'Avon',
];

let productNameAvon = [
    'Máscara Para Cílios Supershock',
    'Brilho Labial Rollete Pink',
    'Batom Creamy DLicious Matte',
    'Brilho Labial Rollette Gloss',
];

let productPriceAvon = [
    'R$18,00',
    'R$16,00',
    'R$10,00',
    'R$20,00',    
];

let productPartAvon = [
    '1x de R$18,00',
    '2x de R$8,00',
    '2x de R$5,00',
    '2x de R$10,00',
];




//Cria os produtos Avon
let sectionAvon = document.getElementById('avon');

let produtosAvon = document.createElement('div');
produtosAvon.className = ('produtos');
//Cria o elemento div e a classe produtos Avon
for (let i = 0; i < 4; i++) {

    //Criar o elemento div - bloco de produtos com as informaçoes - preço foto etc.
    let produtoBlock = document.createElement('div');
    produtoBlock.className = 'produto-block';
    
    let imagemProduto = document.createElement('img');
    imagemProduto.src = imagensAvon[i % imagensAvon.length];

    let spanOne = document.createElement('span');
    spanOne.className = 'produto-lançamento';
    spanOne.textContent = productLabelAvon[i % productLabelAvon.length];

    let spanTwo = document.createElement('span');
    spanTwo.textContent = productNameAvon[i % productNameAvon.length];

    let spanThree = document.createElement('span');
    spanThree.className = 'produto-preço';
    spanThree.textContent = productPriceAvon[i % productPriceAvon.length];

    let spanFour = document.createElement('span');
    spanFour.className = 'produto-parcela';
    spanFour.textContent = productPartAvon[i % productPartAvon.length];

    let divBotaoComprarAgora = document.createElement('span');
    divBotaoComprarAgora.className = 'btn btn-three';

    let spanBotaoComprarAgora = document.createElement('span');
    spanBotaoComprarAgora.textContent = `COMPRAR AGORA`;

    sectionAvon.appendChild(produtosAvon);
    produtosAvon.appendChild(produtoBlock);
    produtoBlock.appendChild(imagemProduto);
    produtoBlock.appendChild(spanOne);
    produtoBlock.appendChild(spanTwo);
    produtoBlock.appendChild(spanThree);
    produtoBlock.appendChild(spanFour);
    produtoBlock.appendChild(divBotaoComprarAgora);
    divBotaoComprarAgora.appendChild(spanBotaoComprarAgora);    
}

// Criando o banner abaixo dos produtos
let bannerMidIndex = document.createElement('div');
bannerMidIndex.className = 'banner-mid';
bannerMidIndex.style.textAlign = 'center';
bannerMidIndex.style.width = 'auto';
bannerMidIndex.style.margin = 'auto';
let bannerMidIndexImg = document.createElement('img');
bannerMidIndexImg.src = './assets/img/banner-mid-page3.jpg';

//Adicionando os elementos criados ao DOM
sectionMac.appendChild(bannerMidIndex);
bannerMidIndex.appendChild(bannerMidIndexImg);

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

//Estilizando o o elemento adress com JS        
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
bodySiteMaquiagem.appendChild(rodaPe);