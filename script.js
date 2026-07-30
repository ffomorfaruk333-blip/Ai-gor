document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("🎮 Welcome to OMOR 2.0 Gaming!");
    });
  }
});
