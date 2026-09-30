let cart = []; /* Criando uma variavel vazia(array) */

function addToCart(name, price) {   /* Criando uma função para adicionar os produtos com dois parametros. Onde -> name = "Heineken" / price = 12 */
    const existingIndex = cart.findIndex(item => item.name === name); /* Cria uma variavel que nao pode mudar o valor... Aqui estamos procurando se o produto ja existe, findIndex() procura um item no array e retorna o seu indice */
    if (existingIndex > -1) { /* Verificando se encontrou o produto */
        cart[existingIndex].qty += 1; /* Aqui aumentamos a quantidade do produto */
    } else { /* Caso o produto nao exista */
        cart.push({ name, price, qty: 1 }); /* Push() adiciona algo ao final do array */
    }
    updateCartUI(); /* Função para atualizar visualmente o carrinho na pagina */
    toggleCartModal(true); /* Função que abre o modal do carrinho */
}

function changeQty(index, change) { /* Essa função altera a quantidade de um produto, recebendo dois parametros. Onde -> Index = Produto da posição "X" / change = Quantidade que sera adicionada ou removida */
    cart[index].qty += change; /* Aqui estamos alterando a quantidade, por exemplo: Se qty = 3 e change = 1 --> Ficamos com 3 + 1 = 4 qty */
    if (cart[index].qty <= 0) { /* Verificamos se a quantidadae chegou a zero ou ficou negativa */
        cart.splice(index, 1); /* Splice() remove elementos de um array. O primeiro parametro -> Index = Indica onde começar / Ja o "1" = quantos elementos remover */
    }
    updateCartUI(); /* Depois de mudanças no carrinho, atualize a tela */
}
 
function updateCartUI() { /* Função que atualiza o carrinho */
    const cartItemsContainer = document.getElementById('cartItems'); /* Pegando elementos do Html */
    const cartCountElement = document.getElementById('cartCount'); /* Pegando elementos do Html */
    const cartTotalElement = document.getElementById('cartTotalValue'); /* Pegando elementos do Html */

    let totalQty = 0; /* Quantidade total de produtos */
    let totalPrice = 0; /* Preço total */

    if (cart.length === 0) { /* Verificando se o carrinho esta vazio -> .length diz quantos elementos existem no array */
        cartItemsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">Seu carrinho está vazio.<br>Escolha itens do cardápio!</p>'; /* Mostrando mensagem de carrinho vazio usando Html */
    } else { /* Caso o carrinho nao esteja vazio... */
        cartItemsContainer.innerHTML = ''; /* Limpa o conteudo anterior presente no carrinho */
        cart.forEach((item, index) => { /* forEach() percorre todos os elementos do array. Temos -> item = Representa o produto atual / indwex = Representa a posição dele. Por exemplo: item = cerveja ; index = 0 */
            totalQty += item.qty; /* Calculando a quantidade do produto ao total */
            totalPrice += item.price * item.qty; /* Calculando o preço. item.price = Preço unitario / item.qty = Quantidade --> item.price * item.qty = Preço daquele produto, ou seja, se preço = R$10 e a quantidade = 3 --> 10 x 3 = R$30 */

            const itemElement = document.createElement('div'); /* Aqui o Js cria uma nova <div> na memoria */
            itemElement.className = 'cart-item'; /* Adiciona a classe CSS */
            itemElement.innerHTML = ` 
                <div class="cart-item-info"> 
                    <h4>${item.name}</h4> 
                    <span>R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span> 
                </div>
                <div class="cart-item-controls">
                    <button class="btn-qty" onclick="changeQty(${index}, -1)">-</button>
                    <span style="font-weight:bold;">${item.qty}</span>
                    <button class="btn-qty" onclick="changeQty(${index}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement); /* appendChild() adiciona um elemento dentro do outro, ou seja, cartItemsContainer -> Container do carrinho e itemElement -> Produto que acabamos de criar */
        });
    }

    cartCountElement.innerText = totalQty; /* Atualizando o contador */
    cartTotalElement.innerText = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`; /* Atualizando o peço total */
}

function toggleCartModal(forceOpen = false) { /* Abrindo / fechando o carrinho. Onde forceOpen = false significa que, se nenhum valor for enviado, ele assume: false */
    const modal = document.getElementById('cartModal'); /* Pega elemento Html */
    const overlay = document.getElementById('cartOverlay'); /* Pega elemento Html */
    if (forceOpen) { /* Se forceOpen === true */
        modal.classList.add('open'); /* Adiciona a classe CSS: open */
        overlay.classList.add('show'); /* Adiciona show ao overlay */
    } else {
        modal.classList.toggle('open'); /* toggle() -> Se nao tiver: open = adiciona /\ Se ja tiver o open = remove */
        overlay.classList.toggle('show'); /* Mesma coisa com o overlay */
    }
}

function filterMenu(category, event) { /* Função para filtagrem dos produtos. Category = Categoria escolhida */
    const buttons = document.querySelectorAll('.filter-btn'); /* querySelectorAll() pega todos os elementos que possuem .filter-btn */
    buttons.forEach(btn => btn.classList.remove('active')); /* Percorre todos os botões e remove "active", serve para tirar o destaque do botão anterior */
    if (event && event.target) { /* Verifica se event existe e se event.target tambem existe */
        event.target.classList.add('active'); /* Adicionando a classe "active" ao botão que foi clicado */
    }

    const cards = document.querySelectorAll('.menu-card'); /* Pega todos os elementos com .menu-card */
    cards.forEach(card => { /* Percorre todos os cards */
        if (category === 'all' || card.dataset.category === category) { /* Verificando a categoria, primeira condição: category === 'all', ou seja, o usuario escolheu "Todos"? 
                                                                        E temos a segunda: card.dataset.category === category que verifica se a categoria do car é igual a categoria selecionada */
            card.style.display = 'flex'; /* Se a categoria corresponder, mostra o card */
        } else {
            card.style.display = 'none'; /* Se nao corresponder, o produto desaparece da tela */
        }
    });
}

function sendWhatsAppOrder() { /* Função responsavel por montar e enviar o pedido */
    if (cart.length === 0) { /* Verificando se o carrinho estiver vazio*/
        alert('Seu carrinho está vazio!'); /* Mensagem se o carrinho nao tiver nada */
        return;
    }

    let message = "🍻 *NOVO PEDIDO - KOMTAINER BEER* 🍻\n\n"; /* Mensagem que sera enviada */
    let total = 0; /* Criando o total */
 
    cart.forEach(item => { /* Percorre cada produto do carrinho */
        const itemTotal = item.price * item.qty; /* Calcula o valor aquele produto */
        total += itemTotal; /* Adiciona o valor ao total geral */
        message += `• *${item.qty}x* ${item.name} - R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`; /* Codigo para montar a mensagem */
    });

    message += `\n💰 *Total:* R$ ${total.toFixed(2).replace('.', ',')}`; /* Adiciona o total do pedido */
    message += "\n\n📍 *Aguardando confirmação do endereço/mesa.*"; /* Adiciona essa informação ao final da mensagem */

    const encodedMessage = encodeURIComponent(message); /* encodeURIComponent() trasforma a mensagem em um formato seguro para ser colocado na URL */
    window.open(`https://wa.me/5519974057515?text=${encodedMessage}`, '_blank'); /* window.open() abre uma nova janela/aba para o WhatsApp */
} 

// Countdown Timer para o evento K5
const eventDate = new Date("2026-07-18T15:00:00").getTime(); /* Definindo a data do evento. Date() -> Cria uma data e tambem .getTime() -> Trasforma a data em um numero chamado timestmp */
setInterval(function() { /* setInterval() executa uma função repetidamente em um intervalo determinado */
    const now = new Date().getTime(); /* Pega o horario atual e trasforma tambem em timestamp. Onde: eventDate -> Data do evento e: now -> Momento atual */
    const distance = eventDate - now; /* Calcula quanto tempo falta */
 
    if (distance > 0) { /* Verificando se ainda falta tempo */
        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)); /* Pega a distancia em milissegundos e converte para dias. Math.floor() arredonda para baixo */
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); /* Com a % ele permite descobrir o que sobra depois de retirar os dias completos e converte o resto para horas */
        document.getElementById("mins").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); /* Ele pega o restante das horas e converte para minutos */
    }
}, 1000);