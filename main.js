// ================================
// GitHub Pages Safe JavaScript
// ================================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initThemeToggle();
  initSmoothScroll();
});

/* ================================
   MENU TOGGLE
================================ */
function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const menuDropdown = document.getElementById("menuDropdown");
  const semesterBtn = document.getElementById("semesterMaterialBtn");
  const semesterSubmenu = document.getElementById("semesterSubmenu");
  const semesterArrow = document.getElementById("semesterArrow");

  if (!menuBtn || !menuDropdown) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuDropdown.classList.toggle("active");
  });

  if (semesterBtn && semesterSubmenu) {
    semesterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      semesterSubmenu.classList.toggle("active");
      semesterArrow.style.transform =
        semesterSubmenu.classList.contains("active")
          ? "rotate(180deg)"
          : "rotate(0deg)";
    });
  }

  document.addEventListener("click", () => {
    menuDropdown.classList.remove("active");
    semesterSubmenu?.classList.remove("active");
    if (semesterArrow) semesterArrow.style.transform = "rotate(0deg)";
  });
}

/* ================================
   DARK / LIGHT MODE
================================ */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const mainContainer = document.getElementById("mainContainer");
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  if (!toggleBtn || !mainContainer) return;

  let isDark = localStorage.getItem("theme") === "dark";

  applyTheme();

  toggleBtn.addEventListener("click", () => {
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme();
  });

  function applyTheme() {
    if (isDark) {
      mainContainer.classList.add("dark-mode");
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
    } else {
      mainContainer.classList.remove("dark-mode");
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");
    }
  }
}

/* ================================
   SMOOTH SCROLL
================================ */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
