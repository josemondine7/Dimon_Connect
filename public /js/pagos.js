document.addEventListener('DOMContentLoaded', () => {
  const valor = 100;
  document.getElementById('valor-servicio').textContent = valor.toFixed(2);
  document.getElementById('total').textContent = (valor * 1.02).toFixed(2);
});
