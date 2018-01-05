(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    var offCanvas = document.getElementById('off_canvas');
    document.getElementById('menu_close').addEventListener('click', function () {
      offCanvas.classList.remove('open');
    });
    document.getElementById('menu_open').addEventListener('click', function () {
      offCanvas.classList.add('open');
    });
  });
}());
