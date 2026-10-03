document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/api/publicaciones/lista?ciudad=Montevideo');
  const datos = await res.json();
  console.log('Publicaciones cargadas:', datos);
});
