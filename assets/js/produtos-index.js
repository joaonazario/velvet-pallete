let bodySite = document.querySelector('body')
let sectionMaisVendidos = document.getElementById('mais-vendidos');
let i = 8;
//Cria o elemento div e a classe produtos.
let produtos = document.createElement('div');
produtos.className = 'produtos';

let imagens = [
    './assets/img/baton_liquido_eudora.jpg',
    './assets/img-index/paleta-avon.jpg',
    './assets/img-index/iluminador-mac-extra.jpg',
    './assets/img-index/sabonete-liquido-quemdisse.jpg',
    './assets/img-index/anti-oxi-quemdisse.jpg',
    './assets/img-index/baton-eudora-glam-nude.jpg',
    './assets/img-index/pincel-mac-fibra.jpg',
    './assets/img-index/paleta-de-sombras-quem.jpg',
    
    
];

let productLabel = [
    'Eudora',
    'Avon',
    'Mac',
    'Quem disse',
    'Quem disse',
    'Mac',
    'Mac',
];

let productName = [
    'Rimel Red Eudora',
    'Paleta Color Mac',
    'Iluminador Mac',
    'Sabonete Guaraná',
    'Anti Oxidante',
    'Batom Red Eudora',
    'Pincel Grosso Mac',
    'Paleta de Sombras',
];

let productPrice = [
    'R$27,00',
    'R$94,00',
    'R$339,00',
    'R$134,90',
    'R$139,90',
    'R$39,00',
    'R$289,00',
    'R$469,00',
    
];

// Criando produtos com loop

for (let i = 0; i < 8; i++) {

    //Criar o elemento div - bloco de produtos com as informaçoes - preço foto etc.
    let produtoBlock = document.createElement('div');
    produtoBlock.className = 'produto-block';
    
    let imagemProduto = document.createElement('img');
    imagemProduto.src = imagens[i % imagens.length];

    let spanOne = document.createElement('span');
    spanOne.className = 'produto-lançamento';
    spanOne.textContent = productLabel[i % productLabel.length];

    let spanTwo = document.createElement('span');
    spanTwo.textContent = productName[i % productName.length];

    let spanThree = document.createElement('span');
    spanThree.className = 'produto-preço';
    spanThree.textContent = productPrice[i % productPrice.length];

    let spanFour = document.createElement('span');
    spanFour.className = 'produto-parcela';
    spanFour.textContent = `2x de R$13,50`;

    let divBotaoComprarAgora = document.createElement('span');
    divBotaoComprarAgora.id = 'comprar-agora';
    divBotaoComprarAgora.className = 'btn btn-three';

    // função do botão carrinho

    function atualizarCarrinho() {

        let divCarrinhoStyle = document.createElement('div');
        divCarrinhoStyle.className = 'carrinho-style';

        divCarrinhoStyle.style.backgroundColor = 'black';
        divCarrinhoStyle.style.color = 'white';
        divCarrinhoStyle.style.display = 'flex';
        divCarrinhoStyle.style.flexDirection = 'row';
        divCarrinhoStyle.style.margin = '7px';
        divCarrinhoStyle.style.border = 'solid';
        divCarrinhoStyle.style.borderRadius = '10px';
        divCarrinhoStyle.alignItems = 'center';
        divCarrinhoStyle.style.height = '40px';
        

        let carrinho = document.querySelector("dialog");
        carrinho.style.position = 'fixed';
        carrinho.style.top = '30%';
        carrinho.style.left = '35%';

        let produtoCarrinho = document.createElement("p")
        produtoCarrinho.textContent = productName[i];
        //produtoCarrinho.style.margin = '10px'; 


        
        let imagemProdutoCarrinho = document.createElement('img');
        imagemProdutoCarrinho.src = imagens[i];
        //imagemProdutoCarrinho.style.width = '100px';
        //imagemProdutoCarrinho.style.height = '10px';

        let preçoProdutoCarrinho = document.createElement('span');
        preçoProdutoCarrinho.style.alignItems = 'center';
        preçoProdutoCarrinho.style.marginLeft = '10px';
        preçoProdutoCarrinho.textContent = '  ' + '  ' + productPrice[i];
        
        divCarrinhoStyle.appendChild(imagemProdutoCarrinho);
        divCarrinhoStyle.appendChild(produtoCarrinho);
        
        divCarrinhoStyle.appendChild(preçoProdutoCarrinho);
        carrinho.appendChild(divCarrinhoStyle);
        //console.log(productName[i % productName.length])
        
         

    };

    divBotaoComprarAgora.addEventListener("click", function(){
                atualizarCarrinho();
    });

    let spanBotaoComprarAgora = document.createElement('span');
    spanBotaoComprarAgora.textContent = `COMPRAR AGORA`;

    //
    //let link = document.getElementById('comprar-agora');
    //link.addEventListener
    
    
    //

    sectionMaisVendidos.appendChild(produtos);
    produtos.appendChild(produtoBlock);
    produtoBlock.appendChild(imagemProduto);
    produtoBlock.appendChild(spanOne);
    produtoBlock.appendChild(spanTwo);
    produtoBlock.appendChild(spanThree);
    produtoBlock.appendChild(spanFour);
    produtoBlock.appendChild(divBotaoComprarAgora);
    divBotaoComprarAgora.appendChild(spanBotaoComprarAgora);
    //link.appendChild(spanBotaoComprarAgora);
    
}

// Criando o banner abaixo dos produtos
let bannerMidIndex = document.createElement('div');
bannerMidIndex.className = 'banner-mid';
bannerMidIndex.style.textAlign = 'center';
bannerMidIndex.style.width = 'auto';
bannerMidIndex.style.margin = 'auto';
let bannerMidIndexImg = document.createElement('img');
bannerMidIndexImg.src = './assets/img/banner-mid-page.jpg';

//Adicionando os elementos criados ao DOM
sectionMaisVendidos.appendChild(bannerMidIndex);
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


//

// Criando carrinho de compras

/*inicializarLoja = () => {
    var containerProdutos = document.getElementsByClassName('produto-block');
        productName.map((val)=>{
            console.log(val)
            
        })
};

inicializarLoja();*/

// 





/*
function atualizarCarrinho(){
    for (let i = 0; i < 8; i++){

    }
}
*/

//var comprarAgora = document.getElementsByTagName('a');
//for ()

//function atualizarCarrinho() {
 //   console.log(items);
//}

const botaoModal = document.getElementById("botao-modal");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

botaoModal.onclick = function(){
    modal.showModal();
};

buttonClose.onclick = function () {
    modal.close()
}