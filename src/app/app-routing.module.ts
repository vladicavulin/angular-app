import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';

    
const appRoutes: Routes = [ 
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecipesComponent, children:[
        {path:  '', component:RecipesStartComponent },
        { path: 'new', component: RecipesEditComponent },
        {path:  ':id', component:RecipesDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent },

      ]},
      {path:'shopping-list', component:ShoppingListComponent},

  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
    RouterModule    
    ]
    })
    export class AppRoutingModule{
    
    }
