document.addEventListener('DOMContentLoaded', () => {
  const btnIngresar = document.getElementById('btn-ingresar');
  
  btnIngresar?.addEventListener('click', async () => {
    const correo = document.getElementById('correo').value.trim();
    const clave = document.getElementById('clave').value;
    
    if (!correo || !clave) return alert('Completá correo y contraseña');

    const res = await fetch('/api/auth/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, clave })
    });

    if (res.ok) {
      window.location.href = 'descubrir.html';
    } else {
      alert('❌ Datos incorrectos');
    }
  });
});
