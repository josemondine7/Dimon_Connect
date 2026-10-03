const API = {
  async get(ruta) {
    const res = await fetch(`/api${ruta}`);
    return res.json();
  },
  async post(ruta, datos) {
    const res = await fetch(`/api${ruta}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    return res.json();
  }
};
