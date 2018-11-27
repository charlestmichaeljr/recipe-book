import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Apple Pie',
      'tasty dessert',
      'https://cdn.vox-cdn.com/thumbor/esKKy31RBlU5AyaHuPuggsqJvMo=/0x0:2039x1529/1400x1400/filters:focal(0x0:2039x1529):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47743599/fruit_pie.0.jpg'),
    new Recipe('Pumpkin Pie',
      'Not so great',
      'https://cdn.vox-cdn.com/thumbor/esKKy31RBlU5AyaHuPuggsqJvMo=/0x0:2039x1529/1400x1400/filters:focal(0x0:2039x1529):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47743599/fruit_pie.0.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
