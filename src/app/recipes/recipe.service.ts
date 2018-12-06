import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Apple Pie',
      'tasty dessert',
      'https://cdn.vox-cdn.com/thumbor/esKKy31RBlU5AyaHuPuggsqJvMo=/0x0:2039x1529/1400x1400/filters:focal(0x0:2039x1529):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47743599/fruit_pie.0.jpg',
      [new Ingredient('sugar', 5), new Ingredient('water', 4)]),
    new Recipe('Pumpkin Pie',
      'Not so great',
      'https://cdn.vox-cdn.com/thumbor/esKKy31RBlU5AyaHuPuggsqJvMo=/0x0:2039x1529/1400x1400/filters:focal(0x0:2039x1529):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47743599/fruit_pie.0.jpg',
      [new Ingredient('prunes', 25), new Ingredient('pepper', 3)])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // slice clones array instead of giving reference to it
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
