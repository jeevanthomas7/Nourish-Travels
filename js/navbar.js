function initNavbar() {
  const toggle = document.getElementById("menu-toggle");
  const menu   = document.getElementById("mobile-menu");

  if (!toggle || !menu) {
    setTimeout(initNavbar, 100);
    return;
  }

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

initNavbar();