  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = document.querySelector(".toggle-icon");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Animasi fade + rotate
    toggleIcon.style.opacity = "0";
    toggleIcon.style.transform = "scale(0.5) rotate(90deg)";

    setTimeout(() => {
      if (document.body.classList.contains("dark")) {
        toggleIcon.textContent = "☀️";
      } else {
        toggleIcon.textContent = "🌙";
      }

      toggleIcon.style.opacity = "1";
      toggleIcon.style.transform = "scale(1) rotate(0deg)";
    }, 200);
  });