document.addEventListener("click", function(event) {
  const hoverElements = document.querySelectorAll(".hover-text");
  const clickedElement = event.target;
  let clickedHoverText = false;

  hoverElements.forEach(function(element) {
    if (element.contains(clickedElement)) {
      clickedHoverText = true;
    }
    element.classList.remove("active");
  });

  if (!clickedHoverText) {
    hoverElements.forEach(function(element) {
      element.classList.remove("active"); 
    });
  }
});