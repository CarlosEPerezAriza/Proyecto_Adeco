export interface ListaCompra {
  id: string;
  content: Array<{ name: string; image: string, bought: boolean }>;
  owner: string;
}
