// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");
    });
  }

  // Contact form: build mailto: with form data and open user's mail client
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value || "";
      const phone = document.getElementById("phone")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value || "";
      const rawSubject =
        document.getElementById("subject")?.value ||
        `Website enquiry from ${name}`;

      const to = "dsworldtechnicalservices@gmail.com";
      const subject = encodeURIComponent(rawSubject);
      const bodyLines = [
        "Hello,",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
        "",
        "Thanks,",
        name,
        "-----",
        "This email was generated from the website contact form.",
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));

      // Use location.href to open default mail client with prefilled fields
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
