document.getElementById("currentYear").textContent = new Date().getFullYear();

function validateText() {
  const inputEl = document.getElementById("inputText");
  const message = document.getElementById("message");
  const input = inputEl.value;
  const regex = /^[a-zA-Zá-úÁ-Úä-üÄ-Ü0-9#$(=;:\-,.´/%"¨` \s]*$/;
  const invalidCharRegex = /[^a-zA-Zá-úÁ-Úä-üÄ-Ü0-9#$(=;:\-,.´/%"¨` \s]/g;

  if (!input) {
    message.textContent = "Esperando texto...";
    message.style.color = "#999";
    inputEl.classList.remove("has-errors");
    return;
  }

  if (regex.test(input)) {
    message.innerHTML =
      '<span class="valid-message">✓ Texto válido - Todos los caracteres son permitidos</span>';
    inputEl.classList.remove("has-errors");
  } else {
    const invalidChars = [...new Set(input.match(invalidCharRegex) || [])];
    const highlighted = input.replace(
      invalidCharRegex,
      (m) => `<span class="invalid">${m}</span>`
    );
    message.innerHTML = `<strong>⚠ Caracteres inválidos encontrados:</strong> ${invalidChars
      .map((c) => `<span class="invalid">${c}</span>`)
      .join(" ")}<br><br>${highlighted}`;
    message.style.color = "#333";
    inputEl.classList.add("has-errors");
  }
}
