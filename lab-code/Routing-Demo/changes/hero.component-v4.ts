import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  id : string | null = '';
  firstname :  string | null = '';

  //Injecting the ActivatedRoute service
  constructor (private route: ActivatedRoute) {  }


  // There are 2 ways to extract route parameters from the 
  // route parameter map (paramMap). 
  // Extraction will typically be done in ngOnInit

  ngOnInit() {

  // Comment out either one of the code segments 
  // below to see both of them in action

  // Approach #1
  // Using methods such as get, getAll, etc

    const paramMap = this.route.snapshot.paramMap;
    console.log(paramMap);
    this.id = paramMap.get('id');
    this.firstname = paramMap.get('firstname');

  // Approach # 2 
  // Using observables 

    // const paramMap = this.route.paramMap;
    // paramMap.subscribe(
    //   (params) => {
    //     this.id = params.get('id');
    //     this.firstname = params.get('firstname');
    //   }
    // );



  }




}
