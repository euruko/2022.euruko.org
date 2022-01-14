import "index.scss"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")

window.addEventListener(
  "load",
  () => {
    setClickListeners();
    setScrollListener();
    setIntersectionObserver();
  },
  false
);

const setScrollListener = () => {
  const header = document.getElementById("header");
  const heroImage = document.getElementById("hero-image");

  if (header && window.scrollY > 100) {
    header.classList.remove("header--not-scrolled");
  }

  if (heroImage && window.scrollY < 1600) {
    heroImage.style.cssText = "transform: translateY(" + (window.scrollY * 0.3).toFixed(0) + "px);";
  }

  window.addEventListener("scroll", e => {
    if (header && window.scrollY > 100) {
      header.classList.remove("header--not-scrolled");
    } else {
      header.classList.add("header--not-scrolled");
    }
    if (heroImage && window.scrollY < 1600) {
      heroImage.style.cssText =
        "transform: translateY(" + (window.scrollY * 0.3).toFixed(0) + "px);";
    }
  });
};

const setClickListeners = () => {
  const mobileToggle = document.getElementById("mobile-toggle");
  const langSelect = document.getElementById("lang-select");
  const continueButton = document.getElementById("continue-button");
  const firstSection = document.querySelector(".section");
  const header = document.getElementById("header");
  const calendarUrl = document.getElementById("calendarUrl");

  if (mobileToggle && header)
    mobileToggle.addEventListener("click", e => {
      header.classList.toggle("header--mobile-toggled");
    });

  if (langSelect && header)
    langSelect.addEventListener("click", e => {
      header.classList.toggle("header--language-toggled");
    });

  if (continueButton && firstSection)
    continueButton.addEventListener("click", e => {
      firstSection.scrollIntoView({
        behavior: "smooth",
      });
    });

  if (calendarUrl) {
    calendarUrl.addEventListener("click", e => {
      e.target.select();
    });
  }
};

const setIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(observerCallback, options);

  document.querySelectorAll(".section__heading").forEach(section => {
    observer.observe(section);
  });
};

const observerCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section__heading--active");
    }
  });
};
