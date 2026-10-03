document.addEventListener('DOMContentLoaded', () => {
  const btnCrear = document.getElementById('btn-crear');
  
  btnCrear?.addEventListener('click', async () => {
    const nombre = document.getElementById('nombre').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const clave = document.getElementById('clave').value;
    const clave2 = document.getElementById('clave2').value;
    const acepto = document.getElementById('acepto').checked;

    if (!nombre || !usuario || !correo || !clave) return alert('Completá todos los campos');
    if (clave.length < 6) return alert('La contraseña debe tener al menos 6 caracteres');
    if (clave !== clave2) return alert('Las contraseñas no coinciden');
    if (!acepto) return alert('Debés aceptar los términos');

    const res = await fetch('/api/auth/registrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, usuario, correo, clave })
    });

    const datos = await res.json();
    if (res.ok) {
      alert('✅ Cuenta creada con éxito');
      window.location.href = 'perfil.html';
    } else {
      alert('❌ ' + datos.error);
    }
  });
});
