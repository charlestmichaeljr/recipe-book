import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }
  addShoppingListItem(itemData) {
    const newIngredient = new Ingredient(itemData.name, itemData.amount)
    this.ingredientAdded.emit(newIngredient);
  }

}
