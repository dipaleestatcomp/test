import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'abc',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
      ingredients: ['a', 'b', 'c']
    },
    {
      id: 'r2',
      title: 'xyz',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
      ingredients: ['x', 'y', 'z']
    }
  ];

  constructor() { }

      getAllRecipes() {
        return [...this.recipes];
      }

      gettRecipe(recipeId: string)
      {
        return{... this.recipes.find(recipe => {
          return recipe.id === recipeId;
        } ) };
      }

      deleteRecipe(recipeId: string)
      {
        this.recipes = this.recipes.filter(recipe => {
          return recipe.id !== recipeId;
        });
      }

}
