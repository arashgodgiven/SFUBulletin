function changeSymbol(button) {
  if (button.textContent === "☆") {
    button.style.opacity = "0";
    setTimeout(function() {
      button.textContent = "✭";
      button.style.opacity = "1";
    }, 100);
  } else {
    button.style.opacity = "0";
    setTimeout(function() {
      button.textContent = "☆";
      button.style.opacity = "1";
    }, 100);
  }
}

