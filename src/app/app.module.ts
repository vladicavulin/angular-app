import { AppRoutingModule } from './app-routing.module';

import { ShoppingListService } from './shared/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesService } from './shared/recipes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipesEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
