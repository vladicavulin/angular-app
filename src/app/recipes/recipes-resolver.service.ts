import { RecipesService } from './../shared/recipes.service';
import { DataStorageService } from './../shared/data-storage.service';
import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Recipes } from './recipes.model';

@Injectable()
export class RecipesResolverService implements Resolve <Recipes[]> {
    constructor (private dataStorageService: DataStorageService,
         private recipesService: RecipesService){}

    resolve (route: ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const recipes = this.recipesService.getRecipes();
        
        if(recipes.length===0) {
            return this.dataStorageService.fetchRecipes();
        }else{
            return recipes;
        }

    }
}