document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-salir')?.addEventListener('click', () => {
    if (confirm('¿Cerrar sesión?')) {
      window.location.href = 'index.html';
    }
  });
});
