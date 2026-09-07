document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('modal-invitation-overlay');
  if (!overlay) return;
  setTimeout(function () {
    overlay.classList.add('show');
  }, 800);
});
