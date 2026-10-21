export interface Producto {
  id: number;
  codigo: string;
  nombreProd: string;
  modeloProd: string;
  imgURL: string;
  marca?: { nombre: string };
  tipo?: { nombre: string };
  industrias: { nombre: string }[];
  subcategoria?: { nombre: string };
  portada: boolean;
}
