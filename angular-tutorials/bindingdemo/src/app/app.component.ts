import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // for controlling dynamic binding of classes
  isItDangerous = false;
  isItSpecial = false;
  isItLarge = false;

  // for controlling disabled status of green button
  isDisabled = false;

  // to store contents of first text box
  firstTextBox = "";

  processFirstBox(hie: HTMLInputElement) {
    this.firstTextBox = hie.value;
  }

  imageName = "cat";
  animalNames = ['cat','dog','horse'];

  processAnimalBox(hie: HTMLInputElement) {
    for (const name of this.animalNames) {
      if (hie.value === name)
        this.imageName = name;
    }
  }

  totalValue: number =0;
  complexity: string ='';

  isCosmetic = false;
  isProduct = false;
  isOthers = false;

  complexityValues = {
    Cosmetics: 1,
    'New Product': 2,
    Others: 3
  };

  calculateValue(){
    this.totalValue=0;
    let totalCosmetics=0, totalProducts=0, totalOthers=0;
    
    if(this.isCosmetic)
    {
      totalCosmetics = this.complexityValues.Cosmetics;
    }
    if(this.isProduct)
    {
      totalProducts = this.complexityValues['New Product'];
    }
    if(this.isOthers)
    {
      totalOthers = this.complexityValues.Others;
    }

    this.totalValue=totalCosmetics+totalOthers+totalProducts;    

    if (this.totalValue === 0) {
      this.complexity = 'No categories selected';
    } else if (this.totalValue <= 2) {
      this.complexity = 'Low Complexity';
    } else if (this.totalValue <= 4) {
      this.complexity = 'Medium Complexity';
    } else {
      this.complexity = 'High Complexity';
    }
  }


}
