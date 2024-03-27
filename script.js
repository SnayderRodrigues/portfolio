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

// DARK MODE ---------------------------------------------------//

const check = document.getElementById("check");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  document.querySelector(".header").classList.toggle("dark");
  document.querySelector(".section-hero").classList.toggle("dark");
  document.querySelector(".section-projects").classList.toggle("dark");
  document.querySelector(".section-about").classList.toggle("dark");
  document.querySelector(".section-contact").classList.toggle("dark");
  document.querySelector(".footer").classList.toggle("dark");
  document.querySelector(".author-name").classList.toggle("dark");
  document.querySelector(".toggle-label").classList.toggle("dark");
  document.querySelector(".tooltip-text").classList.toggle("dark");
  document.querySelector(".navbar-button").classList.toggle("dark");
  document.querySelector(".header-ul").classList.toggle("dark");
  // document.querySelector('.close-icon').classList.toggle('dark');
  document.querySelector(".author-photo").classList.toggle("dark");
  document.querySelector(".services-dropdown").classList.toggle("dark");

  var elementos = document.getElementsByClassName("nav-link-header");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("button");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("services-dropdown-div");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("scroll-down-icon");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("block-wrapper-4");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("project-description");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("mini-card");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("disable");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("info-title");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("info-link");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("copy-button");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("form-control");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });

  var elementos = document.getElementsByClassName("footer-nav-link");
  var arrayDeElementos = Array.from(elementos);
  arrayDeElementos.forEach(function (elemento) {
    elemento.classList.toggle("dark");
  });
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

// ANIMATIONS ---------------------------------------------------//

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

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header");
  var origOffsetY = document.querySelector(".section-hero").offsetHeight - 200;

  function scroll() {
    if (window.scrollY >= origOffsetY) {
      menu.classList.add("opaque");
    } else {
      menu.classList.remove("opaque");
    }
  }

  document.addEventListener("scroll", scroll);
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
