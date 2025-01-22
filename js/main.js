document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const email = "jocelynmiemie@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    });

    const name = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //mailto:example@mail.com?subject=Hello&body=This is email content
    const mailtoLink = `mailto:${email}?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${userEmail}`;
    window.location.href = mailtoLink;

    const alert = document.createElement("div");
    alert.className = "alert alert-success mt-3";
    alert.textContent = "Email client opened successfully!";

    form.appendChild(alert);
    form.reset();

    //after 3000s, remove alert
    setTimeout(() => alert.remove(), 3000);
  });
});
