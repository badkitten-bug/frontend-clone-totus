const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
export async function getProducts() {
  const res = await fetch(`${API_URL}/products?populate=*`);
  const data = await res.json();
  return data.data;
}

export { API_URL }; 