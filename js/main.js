document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      document.getElementById("emailError").innerText =
        "يرجى إدخال البريد الإلكتروني.";
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById("emailError").innerText =
        "صيغة البريد الإلكتروني غير صحيحة.";
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    }

    if (messageInput.value.trim() === "") {
      messageInput.classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("messageError").innerText = "";
      messageInput.classList.remove("is-invalid");
      messageInput.classList.add("is-valid");
    }

    if (isValid) {
      alert("🎯 تم التحقق بنجاح! جاري إرسال رسالتك...");
    }
  });

document.querySelectorAll(".form-control").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      this.classList.remove("is-invalid");
    }
  });
});
