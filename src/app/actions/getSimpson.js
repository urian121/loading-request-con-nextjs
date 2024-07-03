export async function getSimpson() {
  const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50");
  if (!response.ok) {
    throw new Error("Error en la consulta a la API");
  }
  const data = await response.json();
  return data;
}
