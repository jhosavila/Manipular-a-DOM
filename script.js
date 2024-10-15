// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

//SELECIONAR AS TAGS <p> da classe "mensagem2"
const mensagens = document.getElementsByClassName('mensagem2');

//criar um botão que vai modificar as frases
const botaoDeMudarAsFrases = document.createElement('button');
botaoDeMudarAsFrases.textContent = 'Modificar frases';
document.querySelector('.container').appendChild(botaoDeMudarAsFrases);

//evento de clique para modificar as frases
botaoDeMudarAsFrases.addEventListener('click', function(){
    for (let i = 0; i <mensagens.length; i++){
        mensagens[i].textContent = `Agora esta é a ${i + 1} ª frase, graças ao JS!`
    }
})