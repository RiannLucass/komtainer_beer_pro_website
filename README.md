# 🍻 Komtainer Beer

Uma **landing page interativa para uma chopperia**, desenvolvida com **HTML, CSS e JavaScript**, com foco em apresentar o estabelecimento, disponibilizar um cardápio digital e permitir que o cliente monte e envie seu pedido pelo WhatsApp.

O projeto combina uma identidade visual inspirada em **Rock & Lúpulo** com funcionalidades interativas para proporcionar uma experiência mais completa ao usuário.

---

## 🎯 Sobre o Projeto

O **Komtainer Beer** foi desenvolvido como uma página web para representar digitalmente uma chopperia, reunindo informações sobre o estabelecimento, cardápio, avaliações, localização e formas de contato.

A página possui um **cardápio interativo**, no qual o usuário pode filtrar produtos por categoria, adicionar itens ao carrinho, alterar suas quantidades e visualizar o valor total do pedido.

Também foi implementada uma integração com o **WhatsApp**, permitindo transformar os produtos selecionados em uma mensagem de pedido.

---

## 🚀 Funcionalidades

* 🍺 Cardápio digital interativo
* 🔎 Filtro de produtos por categoria
* 🛒 Carrinho de compras
* ➕ Adição de produtos ao carrinho
* ➖ Aumento e redução da quantidade de produtos
* 💰 Cálculo automático do valor total
* 📱 Finalização do pedido pelo WhatsApp
* 📍 Seção de localização com Google Maps
* ⭐ Seção de avaliações
* 🎸 Apresentação dos diferenciais do estabelecimento
* ⏱️ Contagem regressiva para evento
* 📱 Layout responsivo
* 🎨 Interface com tema escuro e detalhes em dourado

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estrutura e conteúdo da página
* **CSS3** — Estilização, layout, animações e responsividade
* **JavaScript** — Lógica do carrinho, filtros, cálculo de valores e integração com WhatsApp
* **Font Awesome** — Ícones utilizados na interface
* **Google Fonts** — Tipografias utilizadas no projeto
* **Google Maps** — Exibição da localização

O projeto utiliza fontes como **Cinzel, Montserrat e Open Sans**, além de ícones do Font Awesome.

---

## 🛒 Sistema de Carrinho

O projeto possui um sistema de carrinho desenvolvido em JavaScript.

Ao adicionar um produto, o sistema verifica se ele já está presente no carrinho. Caso esteja, sua quantidade é incrementada; caso contrário, um novo item é adicionado.

O usuário também pode:

* Aumentar a quantidade de um produto
* Diminuir a quantidade
* Remover o produto ao chegar a zero
* Visualizar a quantidade total de itens
* Visualizar o valor total da compra

---

## 📱 Pedido pelo WhatsApp

Após montar o pedido, o usuário pode finalizá-lo através do WhatsApp.

O sistema cria automaticamente uma mensagem contendo:

```text
🍻 NOVO PEDIDO - KOMTAINER BEER 🍻

• 2x Chopp Artesanal IPA - R$ 36,00
• 1x Burguer Komtainer Especial - R$ 34,00

💰 Total: R$ 70,00

📍 Aguardando confirmação do endereço/mesa.
```

A mensagem é convertida para um formato adequado para URL e aberta em uma nova aba do WhatsApp.

---

## 🍔 Categorias do Cardápio

O cardápio possui filtros para facilitar a navegação entre os produtos:

* **Todos**
* 🍺 Chopps & Bebidas
* 🍔 Hambúrgueres
* 🍟 Porções & Snacks

Os produtos são identificados através de categorias e exibidos ou ocultados de acordo com o filtro selecionado.

---

## 🎨 Interface

A interface utiliza uma identidade visual baseada em:

* 🌑 Fundo escuro
* 🟠 Detalhes dourados
* ⚪ Tipografia clara
* 🟢 Elementos relacionados ao WhatsApp
* 🎸 Estética inspirada em Rock & Roll

As cores principais são definidas através de variáveis CSS, incluindo dourado, fundo escuro, cartões e cores de texto.

A página também utiliza efeitos de hover, transições e elementos com destaque visual para melhorar a interação.

---

## 📱 Responsividade

O projeto conta com regras de **CSS responsivo** para adaptar a interface a diferentes tamanhos de tela.

Entre os ajustes estão:

* Alteração do tamanho dos títulos
* Adaptação do menu de navegação
* Alteração do layout da seção de contato
* Adaptação da seção de evento

---

## 📂 Estrutura do Projeto

```text
📁 Komtainer-Beer
│
├── 📄 index.html
├── 📄 style.css
└── 📄 script.js
```

---

## 📚 O que foi praticado

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes de desenvolvimento Front-End, incluindo:

* Estruturação com HTML5
* Estilização com CSS3
* Responsividade
* Flexbox
* CSS Grid
* Variáveis CSS
* Manipulação do DOM
* Arrays
* Funções JavaScript
* `findIndex()`
* `forEach()`
* `push()`
* `splice()`
* `createElement()`
* `appendChild()`
* `classList`
* `dataset`
* `Math.floor()`
* `setInterval()`
* `Date()`
* `encodeURIComponent()`
* Integração com links do WhatsApp
* Criação de carrinho de compras

---

## 🎯 Objetivo

O objetivo do projeto foi desenvolver uma experiência web mais próxima de uma aplicação real, combinando **design, responsividade e interatividade**.

Além de praticar HTML e CSS, o projeto permitiu trabalhar principalmente conceitos de **JavaScript e lógica de programação**, criando funcionalidades como filtros, carrinho de compras, cálculo de valores e geração automática de pedidos.

---

## 👨‍💻 Autor

**Rian Lucas**

Desenvolvedor Front-End em formação...

---

## 🔗 Link do Projeto

https://riannlucass.github.io/komtainer_beer_pro_website/

---

