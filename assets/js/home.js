(function () {
  "use strict";

  const themeKey = "theme";
  const themes = ["system", "light", "dark"];
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let searchLoader;

  function getThemeSetting() {
    const storedTheme = localStorage.getItem(themeKey);
    return themes.includes(storedTheme) ? storedTheme : "system";
  }

  function getComputedTheme() {
    const setting = getThemeSetting();
    return setting === "system" ? (systemTheme.matches ? "dark" : "light") : setting;
  }

  function applyTheme() {
    const root = document.documentElement;
    const setting = getThemeSetting();
    const computedTheme = getComputedTheme();
    root.dataset.themeSetting = setting;
    root.dataset.theme = computedTheme;

    const search = document.querySelector("ninja-keys");
    if (search) {
      search.classList.toggle("dark", computedTheme === "dark");
    }

    const toggle = document.getElementById("light-toggle");
    if (toggle) {
      toggle.title = `Theme: ${setting}. Activate to change.`;
      toggle.setAttribute("aria-label", toggle.title);
    }
  }

  window.determineComputedTheme = getComputedTheme;
  window.setThemeSetting = function (setting) {
    localStorage.setItem(themeKey, themes.includes(setting) ? setting : "system");
    document.documentElement.classList.add("transition");
    applyTheme();
    window.setTimeout(function () {
      document.documentElement.classList.remove("transition");
    }, 200);
  };

  function loadSearch() {
    if (!searchLoader) {
      searchLoader = import("/assets/js/search/ninja-keys.min.js?a3446f084dcaecc5f75aa1757d087dcf")
        .then(function () {
          return customElements.whenDefined("ninja-keys");
        })
        .then(function () {
          return new Promise(function (resolve, reject) {
            const dataScript = document.createElement("script");
            dataScript.src = "/assets/js/search-data.js";
            dataScript.onload = resolve;
            dataScript.onerror = reject;
            document.head.appendChild(dataScript);
          });
        })
        .then(function () {
          applyTheme();
          return document.querySelector("ninja-keys");
        });
    }
    return searchLoader;
  }

  window.openSearchModal = function () {
    const menu = document.getElementById("navbarNav");
    const menuToggle = document.querySelector(".navbar-toggler");

    if (menu) {
      menu.classList.remove("show");
    }
    if (menuToggle) {
      menuToggle.classList.add("collapsed");
      menuToggle.setAttribute("aria-expanded", "false");
    }
    loadSearch()
      .then(function (search) {
        if (search && typeof search.open === "function") {
          search.open();
        }
      })
      .catch(function (error) {
        console.error("Search failed to load", error);
      });
  };

  applyTheme();

  const onSystemThemeChange = function () {
    if (getThemeSetting() === "system") {
      applyTheme();
    }
  };
  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", onSystemThemeChange);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(onSystemThemeChange);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("light-toggle");
    const menuToggle = document.querySelector(".navbar-toggler");
    const menu = document.getElementById("navbarNav");
    const shortcut = document.getElementById("search-shortcut");
    const searchToggle = document.getElementById("search-toggle");

    applyTheme();

    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        const currentIndex = themes.indexOf(getThemeSetting());
        window.setThemeSetting(themes[(currentIndex + 1) % themes.length]);
      });
    }

    if (menuToggle && menu) {
      menuToggle.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("show");
        menuToggle.classList.toggle("collapsed", !isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    if (shortcut && /Mac|iPhone|iPad/.test(navigator.platform)) {
      shortcut.textContent = "⌘ K";
    }

    if (searchToggle) {
      searchToggle.addEventListener("pointerenter", loadSearch, { once: true });
      searchToggle.addEventListener("focus", loadSearch, { once: true });
    }

    document.addEventListener("keydown", function (event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        window.openSearchModal();
      }
    });

    const backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.className = "hidden";
    backToTop.type = "button";
    backToTop.title = "Back to top";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 15.4 12 10.8l4.6 4.6L18 14l-6-6-6 6z"></path></svg>';
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(backToTop);

    const updateBackToTop = function () {
      backToTop.classList.toggle("hidden", window.scrollY < 300);
    };
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
  });
})();
