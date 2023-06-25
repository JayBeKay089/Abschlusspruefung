document.addEventListener("DOMContentLoaded", function () {
  const animationRadio0 = document.getElementById("animation_radio_0");
  const animationRadio1 = document.getElementById("animation_radio_1");
  const animationSection = document.getElementById("animation");

  // Function to handle visibility based on radio button selection
  function handleAnimationVisibility() {
    if (animationRadio0.checked) {
      animationSection.style.display = "block"; // Show the animation section
    } else {
      animationSection.style.display = "none"; // Hide the animation section
    }
  }

  // Set initial visibility based on default selection
  handleAnimationVisibility();

  // Add event listeners to both radio buttons
  animationRadio0.addEventListener("change", handleAnimationVisibility);
  animationRadio1.addEventListener("change", handleAnimationVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
  const bewirtungRadio0 = document.getElementById("bewirtung_radio_0");
  const bewirtungRadio1 = document.getElementById("bewirtung_radio_1");
  const bewirtungSection = document.getElementById("bewirtung");

  // Function to handle visibility based on radio button selection
  function handlebewirtungVisibility() {
    if (bewirtungRadio0.checked) {
      bewirtungSection.style.display = "block"; // Show the bewirtung section
    } else {
      bewirtungSection.style.display = "none"; // Hide the bewirtung section
    }
  }

  // Set initial visibility based on default selection
  handlebewirtungVisibility();

  // Add event listeners to both radio buttons
  bewirtungRadio0.addEventListener("change", handlebewirtungVisibility);
  bewirtungRadio1.addEventListener("change", handlebewirtungVisibility);
});
