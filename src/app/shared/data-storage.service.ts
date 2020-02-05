import { RecipesService } from './recipes.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from '../recipes/recipes.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
 export class DataStorageService {
    constructor (private http: HttpClient,
                private recipesService: RecipesService){

    }
    storeRecipes(){
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://recipe-book-67cf9.firebaseio.com/recipes.json',
         recipes
         )
        .subscribe(response =>{
            console.log(response);
        });
    }

    fetchRecipes () {
    this.http.get <Recipes[]>('https://recipe-book-67cf9.firebaseio.com/recipes.json')
    .pipe(map (recipes => {
        return recipes.map(recipes => {
           return{...recipes, ingredients: recipes.ingredients ? recipes.ingredients: []} 
        });
    }))
    .subscribe(recipes => {
        this.recipesService.setRecipes(recipes);
    })
    }
}
