const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products?populate=*`);
  const data = await res.json();
  return data.data;
}

export async function getFeaturedProducts() {
  const res = await fetch(`${API_URL}/products?filters[is_featured][$eq]=true&populate=*`);
  const data = await res.json();
  return data.data;
}

export async function getSaleProducts() {
  const res = await fetch(`${API_URL}/products?filters[is_on_sale][$eq]=true&populate=*`);
  const data = await res.json();
  return data.data;
}

export { API_URL }; 