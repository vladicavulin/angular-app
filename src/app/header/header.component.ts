import { DataStorageService } from './../shared/data-storage.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
constructor(private dataStorageS: DataStorageService){}

  onSaveData() {
this.dataStorageS.storeRecipes();
  }

  onFetchData() {
    this.dataStorageS.fetchRecipes();
  }
}
