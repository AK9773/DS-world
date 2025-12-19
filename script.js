// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");
    });
  }
});

// Services select navigation
document.addEventListener("DOMContentLoaded", function () {
  const svc = document.getElementById("services-select");
  if (!svc) return;

  ["click", "mousedown", "touchstart"].forEach((evt) =>
    svc.addEventListener(evt, (e) => e.stopPropagation())
  );

  svc.addEventListener("change", function () {
    if (this.value) window.location.href = this.value;
  });
});
