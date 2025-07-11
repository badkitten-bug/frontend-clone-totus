const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

async function handleApiResponse(response: Response) {
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error ${response.status}:`, errorText);
    
    if (response.status === 403) {
      throw new Error('Acceso denegado. Verifica la configuración de CORS y permisos.');
    } else if (response.status === 404) {
      throw new Error('Recurso no encontrado.');
    } else if (response.status >= 500) {
      throw new Error('Error del servidor. Intenta más tarde.');
    } else {
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
  }
  
  return response.json();
}

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products?populate=*`);
    const data = await handleApiResponse(res);
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    const res = await fetch(`${API_URL}/products?filters[is_featured][$eq]=true&populate=*`);
    const data = await handleApiResponse(res);
    return data.data || [];
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

export async function getSaleProducts() {
  try {
    const res = await fetch(`${API_URL}/products?filters[is_on_sale][$eq]=true&populate=*`);
    const data = await handleApiResponse(res);
    return data.data || [];
  } catch (error) {
    console.error('Error fetching sale products:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);
    const data = await handleApiResponse(res);
    return data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export { API_URL }; 