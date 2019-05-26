import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
