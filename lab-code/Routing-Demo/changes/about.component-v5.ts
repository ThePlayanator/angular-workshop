import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  person : string | null = "";
  status : string | null = "";

  //Injecting the ActivatedRoute service
  constructor (private route: ActivatedRoute) {  }

  // There are 2 main ways to extract query parameters  
  // from the route parameter map (paramMap). 
  // Extraction will typically be done in ngOnInit

  ngOnInit() {

  // Comment out either one of the code segments 
  // below to see both of them in action

  // Approach #1
  // Using methods such as get, getAll, etc

    const queryParamMap = this.route.snapshot.queryParamMap;
    this.person = queryParamMap.get('person') || 'noone';
    this.status = queryParamMap.get('status') || '0';


    
  // Approach # 2 
  // Using observables 

    // const queryParamMap = this.route.queryParamMap;
    // queryParamMap.subscribe(
    //   (params) => {
    //     this.person = params.get('person') || 'noone';
    //     this.status = params.get('status') || '0';
    //   }
    // );


    
  }

}
