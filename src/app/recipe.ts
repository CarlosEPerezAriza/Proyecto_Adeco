
export class Recipe {
  title: string;
  image: string;
  description: string = "Recipe description";
  ingredients: {name: string, quantity: number, measureUnit: string}[] = [];
  instructions: {image: string, name: string, description:string, extrainfo?: string }[] = [];

  constructor(title: string, image: string){
    this.title = title
    this.image = image
  }
}
