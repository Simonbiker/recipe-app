import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
