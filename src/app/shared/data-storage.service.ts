import { RecipesService } from './recipes.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
