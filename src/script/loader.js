window.onload = fadeOutLoader();

function fadeOutLoader() {
  const loader = document.querySelector(".outer-wrapper");
  loader.classList.add("visuallyHidden");
  loader.addEventListener(
    "transitionend",
    function () {
      loader.classList.add("hidden");
    },
    { capture: false, once: true, passive: false }
  );
}
