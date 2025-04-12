// select DOM elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");

let isDark = true;

// button clicks
buttons.forEach((button) => {
  button.onclick = () => {
    const value = button.id;

    switch (value) {
      case "clear":
        display.innerText = "";
        break;

      case "backspace":
        display.innerText = display.innerText.slice(0, -1);
        break;

      case "equal":
        if (display.innerText.trim() !== "") {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error!";
            setTimeout(() => (display.innerText = ""), 2000);
          }
        } else {
          display.innerText = "Empty!";
          setTimeout(() => (display.innerText = ""), 2000);
        }
        break;

      default:
        display.innerText += value;
        break;
    }
  };
});

// handle theme
themeToggleBtn?.addEventListener("click", () => {
  calculator?.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});
