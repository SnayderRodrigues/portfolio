// LENIS SCROLLING ---------------------------------------------------//

class App {
  constructor() {
    this._initialize();
    this._render();
  }

  _initialize() {
    this._createLenis();

    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      duration: 0.8,
      wheelMultiplier: 0.8,
      // lerp: 0.1,
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();

// PRELOADER ---------------------------------------------------//

// var loader = document.getElementById("preloader");

// window.addEventListener("load", function () {
//   // loader.style.display = "none";
//   loader.classList.add("loading-animation");
// });


// DARK MODE ---------------------------------------------------//

function toggleDarkClass(className) {
  var elementos = document.getElementsByClassName(className);
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });
}

const check = document.getElementById("check");

check.addEventListener("change", () => {

  document.body.classList.toggle("dark");

  toggleDarkClass("header");
  toggleDarkClass("section-hero");
  toggleDarkClass("section-projects");
  toggleDarkClass("section-about");
  toggleDarkClass("section-contact");
  toggleDarkClass("footer");
  toggleDarkClass("author-name");
  toggleDarkClass("toggle-label");
  toggleDarkClass("tooltip-text");
  toggleDarkClass("navbar-button");
  toggleDarkClass("header-ul");
  toggleDarkClass("author-photo");
  toggleDarkClass("services-dropdown");
  toggleDarkClass("nav-link-header");
  toggleDarkClass("button");
  toggleDarkClass("services-dropdown-div");
  toggleDarkClass("scroll-down");
  toggleDarkClass("block-wrapper-4");
  toggleDarkClass("mini-card");
  toggleDarkClass("disable");
  toggleDarkClass("info-link");
  toggleDarkClass("copy-button");
  toggleDarkClass("form-control");
  toggleDarkClass("footer-nav-link");
});

// HIDDEN NAVBAR ---------------------------------------------------//

function show(anything) {
  document.querySelector(".navbar-button").value = anything;
}

let nv = document.querySelector(".navbuttons");
let nvh = document.querySelector(".header-ul");
let links = document.querySelectorAll(".header-li");
let uls = document.querySelector(".ul-shadow");
let html = document.querySelector("html");

nv.onclick = function () {
  nv.classList.toggle("open-nav");
  nvh.classList.toggle("open-nav");
  uls.classList.toggle("open-nav");
  html.classList.toggle("open-nav");

  nvh.removeAttribute("style");
  uls.removeAttribute("style");
};

links.forEach((link) => {
  link.addEventListener("click", function () {
    nv.classList.remove("open-nav");
    nvh.classList.remove("open-nav");
    uls.classList.remove("open-nav");
    html.classList.remove("open-nav");
  });
});

uls.onclick = function () {
  nv.classList.remove("open-nav");
  nvh.classList.remove("open-nav");
  uls.classList.remove("open-nav");
  html.classList.remove("open-nav");
};

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    nvh.style.transition = "none";
    uls.style.transition = "none";
  }
});

// HEADER ITEM ACTIVE ---------------------------------------------------//

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// OPAQUE HEADER ---------------------------------------------------//

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// SERVICES DROPDOWN ---------------------------------------------------//

const services = document.querySelectorAll(".services-title");

services.forEach((sv) => {
  sv.addEventListener("click", () => {
    services.forEach((item) => {
      if (item !== sv) {
        item.classList.remove("opened");
      }
    });

    sv.classList.toggle("opened");
  });
});

// FORM VALIDATION -------------------------------------------------//

function validateForm() {
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var message = document.getElementById("inputMessage").value;
  var isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerHTML = "*Por favor, insira o seu nome.";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("emailError").innerHTML = "*Por favor, insira o seu e-mail.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML =
      "*Por favor, insira um e-mail válido.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (message === "") {
    document.getElementById("messageError").innerHTML =
      "*Por favor, insira a sua mensagem.";
    isValid = false;
  } else {
    document.getElementById("messageError").innerHTML = "";
  }

  if (isValid) {
    document.getElementById("form").reset();
    document.getElementById("formSent").innerHTML =
      "Mensagem enviada.";
  }

  return isValid;
}

function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function clearFormSent() {
  document.getElementById("formSent").innerHTML = "";
}

// REAL TIME ---------------------------------------------------//

function atualizarRelogio() {
  var agora = new Date();

  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var periodo = horas >= 12 ? "PM" : "AM";

  horas = horas % 12 || 12;

  minutos = minutos < 10 ? "0" + minutos : minutos;

  var formatoHora = horas + ":" + minutos + " " + periodo;

  document.getElementById("hora-local").innerText = formatoHora;
}

atualizarRelogio();

setInterval(atualizarRelogio, 20000);

// COPY BUTTONS ---------------------------------------------------//

function copiarTexto() {
  var texto = document.getElementById("copy-email");

  var textoSelecionado = window.getSelection();
  var intervalo = document.createRange();
  intervalo.selectNodeContents(texto);
  textoSelecionado.removeAllRanges();
  textoSelecionado.addRange(intervalo);

  document.execCommand("copy");

  textoSelecionado.removeAllRanges();

  alert("E-mail copiado.");
}

function copiarNumero() {
  var numero = document.getElementById("copy-phone");

  var textoSelecionado = window.getSelection();
  var intervalo = document.createRange();
  intervalo.selectNodeContents(numero);
  textoSelecionado.removeAllRanges();
  textoSelecionado.addRange(intervalo);

  document.execCommand("copy");

  textoSelecionado.removeAllRanges();

  alert("Número copiado.");
}
