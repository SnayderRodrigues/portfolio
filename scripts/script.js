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

// DARK MODE ---------------------------------------------------//

class DarkModeToggle {
  constructor(toggleElementId) {
    this.toggleElement = document.getElementById(toggleElementId);
    this.darkModeClasses = [
      "button",
      "header",
      "author-name",
      "header-ul",
      "nav-link-header",
      "dark-mode-button",
      "navbar-button",
      "hero-section",
      "hero-avatar",
      "hero-tags",
      "about-section",
      "author-photo",
      "services-card",
      "works-section",
      "works-projects",
      "works-projects-title",
      "works-projects-tags",
      "works-projects-image-wrapper",
      "contact-section",
      "contact-email",
      "contact-socials-button",
      "footer",
    ];

    this.initializeDarkMode();
    this.addToggleListener();
  }

  initializeDarkMode() {
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (darkModeEnabled) {
      this.toggleElement.checked = true;
      this.applyDarkMode(true);
    }
  }

  addToggleListener() {
    this.toggleElement.addEventListener("change", () => {
      const darkModeEnabled = this.toggleElement.checked;
      this.applyDarkMode(darkModeEnabled);
      localStorage.setItem(
        "darkMode",
        darkModeEnabled ? "enabled" : "disabled"
      );
    });
  }

  applyDarkMode(enable) {
    document.body.classList.toggle("dark", enable);
    this.darkModeClasses.forEach((className) => {
      document.querySelectorAll(`.${className}`).forEach((element) => {
        element.classList.toggle("dark", enable);
      });
    });
  }
}

new DarkModeToggle("dark-mode-toggle");

// HIDDEN NAVBAR ---------------------------------------------------//

function setupNavbar() {
  let navbarButton = document.querySelector(".navbuttons");
  let navbarList = document.querySelector(".header-ul");
  let navbarListItems = document.querySelectorAll(".header-li");
  let html = document.querySelector("html");

  navbarButton.onclick = function () {
    navbarButton.classList.toggle("open-nav");
    navbarList.classList.toggle("open-nav");
    html.classList.toggle("open-nav");

    navbarList.removeAttribute("style");
  };

  navbarListItems.forEach((link, index) => {
    link.addEventListener("click", function () {
      if (index === navbarListItems.length - 1) {
        return;
      }
      navbarButton.classList.remove("open-nav");
      navbarList.classList.remove("open-nav");
      html.classList.remove("open-nav");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
      navbarList.style.transition = "none";
    }
  });
}

setupNavbar();

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

// COPY EMAIL FUNCTION  -------------------------------------------------//

const copyButton = document.querySelector(".contact-copy-button");

copyButton.addEventListener("click", function () {
  const email = "snayderrodrigues@gmail.com";

  const input = document.createElement("input");
  input.value = email;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  copyButton.classList.add("click");

  setTimeout(() => {
    copyButton.classList.remove("click");
  }, 2000);
});
