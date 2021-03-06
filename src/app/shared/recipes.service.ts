import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipes } from "./../recipes/recipes.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipesService {
  recipesChanged = new Subject<Recipes[]>();
  /* private recipes: Recipes[] = [
    new Recipes(
      "Zucchini pasta",
      "My favorite way to cook zucchini noodles! See how to make our 20-minute zucchini noodles pasta recipe with garlic, tomatoes, basil, and parmesan cheese. Low-carb, keto-adaptable, and vegetarian!",
      "https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg",
      [new Ingredient("Pasta", 1), new Ingredient("Zucchini", 2)]
    ),

    new Recipes(
      "Garlic-Parm zucchini saute",
      "This easy, quick-sautéed zucchini is the perfect side dish. It's full of flavor, and the zucchini slightly caramelizes as it cooks in the cast-iron pan.",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190618-saute-ed-zucchini-015-landscape-pf-1561759338.png?crop=0.668xw:1.00xh;0.245xw,0&resize=768:*",
      [new Ingredient("Zucchini", 3), new Ingredient("Cloves garlic", 2)]
    )
  ]; */
  private recipes: Recipes[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipes[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeIndex(index: number) {
    return this.recipes[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipes) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipes) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
