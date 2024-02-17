// DARK MODE ---------------------------------------------------//

const check = document.getElementById('check')

check.addEventListener('change', () => {
  document.body.classList.toggle('dark')

  document.querySelector('.header').classList.toggle('dark')
  document.querySelector('.section-hero').classList.toggle('dark')
  document.querySelector('.section-projects').classList.toggle('dark')
  document.querySelector('.section-about').classList.toggle('dark')
  document.querySelector('.section-contact').classList.toggle('dark')
  document.querySelector('.footer').classList.toggle('dark')
  document.querySelector('.label').classList.toggle('dark')
  document.querySelector('.ball').classList.toggle('dark')
  document.querySelector('.tooltip-text').classList.toggle('dark')
  document.querySelector('.navbar-button').classList.toggle('dark')
  document.querySelector('.navbar-button2').classList.toggle('dark')
  document.querySelector('.header-ul').classList.toggle('dark')
  // document.querySelector('.scroll-down-icon').classList.toggle('dark')
  // document.querySelector('.close-icon').classList.toggle('dark')
  document.querySelector('.author-photo').classList.toggle('dark')
  

  

  var elementos = document.getElementsByClassName('nav-link-header');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('button');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('mini-card');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('disable');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });

  var elementos = document.getElementsByClassName('info-title');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });

  var elementos = document.getElementsByClassName('info-link');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('block-wrapper-4');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('form-control');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  
  var elementos = document.getElementsByClassName('footer-nav-link');
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function(elemento) {
      elemento.classList.toggle('dark');
  });
  

})

// DROPDOWN PT-EN ---------------------------------------------------//

// function show(anything){
//     document.querySelector('.dropdown').value = anything;
// }

// let dropdown = document.querySelector('.language-div');
// dropdown.onclick = function(){
//   dropdown.classList.toggle('open');
// }

// document.addEventListener('click', function(event) {
//   if (!dropdown.contains(event.target)) {
//     dropdown.classList.remove('open');
//   }
// });

// HIDDEN NAVBAR ---------------------------------------------------//

function show(anything){
  document.querySelector('.navbar-button').value = anything;
}

let nv = document.querySelector('.navbuttons');
let nvh = document.querySelector('.header-ul');
let bd = document.querySelector('body');

nv.onclick = function(){
  nv.classList.toggle('open-nav');
  nvh.classList.toggle('open-nav');
}

nvh.onclick = function(){
  nvh.classList.remove('open-nav');
  nv.classList.remove('open-nav');
}

// ANIMATIONS ---------------------------------------------------//


// STARRY SKY ---------------------------------------------------//

function init() {

  // Estrelas
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function createStars(className, qtdeEstrelas) {
    var estrela = "";
    var noite = document.querySelector("." + className);
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
      estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
        + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: "
        + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;
  }

  createStars("constelacao", 130);
  createStars("constelacao2", 180);

  // Meteoros
  var numeroAleatorio = 5000;

  setTimeout(function () {
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro() {
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";

    var chuvaElements = document.querySelectorAll(".chuvaMeteoro, .chuvaMeteoro2");
    chuvaElements.forEach(function (chuva) {
      chuva.innerHTML = meteoro;
    });

    setTimeout(function () {
      chuvaElements.forEach(function (chuva) {
        chuva.innerHTML = "";
      });
    }, 1000);
  }
}

window.onload = init;

// HEADER ITEM ACTIVE ---------------------------------------------------//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

// REAL TIME ---------------------------------------------------//

function atualizarRelogio() {
  var agora = new Date();

  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var periodo = horas >= 12 ? 'PM' : 'AM';

  horas = horas % 12 || 12;

  minutos = minutos < 10 ? '0' + minutos : minutos;

  var formatoHora = horas + ':' + minutos + ' ' + periodo;

  document.getElementById('hora-local').innerText = formatoHora;
}

atualizarRelogio();

setInterval(atualizarRelogio, 20000);