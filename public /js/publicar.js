document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-publicar');
  
  btn?.addEventListener('click', async () => {
    const datos = {
      tipo: document.getElementById('tipo').value,
      titulo: document.getElementById('titulo').value.trim(),
      descripcion: document.getElementById('descripcion').value.trim(),
      precio: document.getElementById('precio').value,
      ciudad: document.getElementById('ciudad').value.trim()
    };

    if (!datos.titulo || !datos.precio) return alert('Completá título y precio');

    const res = await fetch('/api/publicaciones/nueva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    if (res.ok) {
      alert('✅ Publicado con éxito');
      window.location.href = 'descubrir.html';
    }
  });
});
