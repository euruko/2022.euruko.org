import smoothscroll from 'smoothscroll-polyfill';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import "index.scss"

smoothscroll.polyfill();

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
    linkDateBlocker();
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
    heroImage.style.cssText = "transform: translate3d(0, " + (window.scrollY * 0.3).toFixed(0) + "px, 0);";
  }

  window.addEventListener("scroll", e => {
    if (header && window.scrollY > 100) {
      header.classList.remove("header--not-scrolled");
    } else {
      header.classList.add("header--not-scrolled");
    }
    if (heroImage && window.scrollY < 1600) {
      heroImage.style.cssText =
        "transform: translate3d(0, " + (window.scrollY * 0.3).toFixed(0) + "px, 0);";
    }
  });
};

const setClickListeners = () => {
  const mobileToggle = document.getElementById("mobile-toggle");
  const header = document.getElementById("header");
  if (mobileToggle && header) {
    mobileToggle.addEventListener("click", () => {
      header.classList.toggle("header--mobile-toggled");
    });
  }

  const links = document.getElementsByTagName("a");
  for (let link of links) {
    if (link.href) {
      const url = new URL(link.href);
      if (url.hostname === window.location.hostname && url.pathname === window.location.pathname && url.hash) {
        link.addEventListener("click", e => {
          e.preventDefault();
          const target = document.getElementById(url.hash.substring(1));
          if (target) {
            header.classList.remove("header--mobile-toggled");
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      }
    }
  };
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

const linkDateBlocker = () => {
  const links = document.querySelectorAll("a[data-datetime]");
  for (let link of links) {
      const date = new Date(link.dataset.datetime);
      if (date && !isNaN(date) && date >= Date.now()) {
        link.addEventListener("click", e => {
          e.preventDefault();
          const now = Date.now()
          if (date <= now) {
            window.location.href = link.href
          } else {
            console.log(link.dataset)
            if (!link.dataset.blocked) {
              link.dataset.blocked = true
              const span = link.querySelector("span")
              const originalText = span.innerText
              const distance = formatDistanceToNow(date, { addSuffix: true })
              span.innerText = `Available ${distance}`
              setTimeout(() => {
                delete link.dataset.blocked
                span.innerText = originalText
              }, 5000)
            }
          }
        })
      }
  }
}
