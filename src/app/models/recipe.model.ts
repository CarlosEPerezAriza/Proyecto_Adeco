export interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
    ingredients: Array<{ name: string; quantity: number; measureUnit: string }>;
  instructions: Array<{
    image: string;
    name: string;
    description: string;
    extrainfo?: string;
  }>
}
