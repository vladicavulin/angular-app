import { Subscription } from 'rxjs';
import { RecipesService } from './../shared/recipes.service';
import { Recipes } from './../recipes/recipes.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipes[];
subscription: Subscription;
  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipesService.recipesChanged
      .subscribe(
        (recipes: Recipes[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy () {
this.subscription.unsubscribe();
  }
}

