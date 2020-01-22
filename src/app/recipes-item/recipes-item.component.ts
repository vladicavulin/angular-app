import { Recipes } from './../recipes/recipes.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipes:Recipes;
@Input () index:number;

  ngOnInit() {
  }

}
