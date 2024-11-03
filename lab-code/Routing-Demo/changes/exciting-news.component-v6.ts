import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-exciting-news',
  standalone: true,
  imports: [],
  templateUrl: './exciting-news.component.html',
  styleUrl: './exciting-news.component.css'
})
export class ExcitingNewsComponent implements OnInit {

  framework : string | null = '';

  //Injecting the ActivatedRoute service
  constructor (private route: ActivatedRoute) {  }

  ngOnInit() {

  // Approach #1
  // Using methods such as get, getAll, etc
  // This is not a suitable approach here 

    // const paramMap = this.route.snapshot.paramMap;
    // console.log(paramMap);
    // this.framework = paramMap.get('framework');


  // Approach # 2 
  // Using observables 
  // This approach is suitable here as it ensures
  // we always get the latest updated value of the 
  // route parameter

    const paramMap = this.route.paramMap;
    paramMap.subscribe(
      (params) => {
        this.framework = params.get('framework');
      }
    );

  }




}

