// ==========================================
// CONFIGURAÇÃO DO WHATSAPP
// Troque pelo seu número: 55 (Brasil) + DDD + número,
// tudo junto, sem espaços nem traços.
// ==========================================
var numeroWhatsapp = '5511999990066';

// Função que monta o link do WhatsApp com uma mensagem pronta
function criarLinkWhatsapp(mensagem) {
  return 'https://wa.me/' + numeroWhatsapp + '?text=' + encodeURIComponent(mensagem);
}

// Botão "Pedir orçamento" do hero (mensagem padrão)
var botaoWhatsapp = document.getElementById('botao-whatsapp');
botaoWhatsapp.href = criarLinkWhatsapp('Olá! Gostaria de pedir um orçamento.');

// ==========================================
// 1. MENU MOBILE
// Ao clicar no botão, abre ou fecha o menu.
// ==========================================
var botaoMenu = document.getElementById('botao-menu');
var menu = document.getElementById('menu');

botaoMenu.addEventListener('click', function () {
  menu.classList.toggle('aberto');
});

// Fecha o menu depois de clicar em um link
var links = document.querySelectorAll('.menu a');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('aberto');
  });
});

// ==========================================
// 2. NAVBAR COM BORDA AO ROLAR
// Quando desce mais de 50px, adiciona a classe "rolou".
// ==========================================
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('rolou');
  } else {
    navbar.classList.remove('rolou');
  }
});

// ==========================================
// 3. ANIMAÇÃO AO ROLAR (Intersection Observer)
// Observa os elementos com a classe "aparecer".
// Quando entram na tela, ganham a classe "visivel".
// ==========================================
var observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add('visivel');
    }
  });
});

var elementos = document.querySelectorAll('.aparecer');
elementos.forEach(function (elemento) {
  observador.observe(elemento);
});

// ==========================================
// 4. FORMULÁRIO DE CONTATO
// Ao enviar, monta uma mensagem com o nome e o
// problema digitados e abre o WhatsApp com ela pronta.
// ==========================================
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // impede a página de recarregar

  // Pega o que o cliente digitou
  var nome = document.getElementById('nome').value;
  var problema = document.getElementById('mensagem').value;

  // Monta a mensagem (\n pula uma linha)
  var mensagem = 'Olá! Meu nome é ' + nome + '.\n' +
                 'Gostaria de um orçamento. Meu problema é:\n' + problema;

  // Abre o WhatsApp em uma nova aba e limpa o formulário
  window.open(criarLinkWhatsapp(mensagem), '_blank');
  formulario.reset();
});
