let previousTitle = document.title;
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "¡No te Vayas! ¡Vuelve! 😐 ";
});
window.addEventListener("focus", () => {
  document.title = previousTitle;
});
