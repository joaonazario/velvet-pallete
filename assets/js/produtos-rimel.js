
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