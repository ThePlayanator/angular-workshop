import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FakeAPIService } from './fakeAPI.service';
import { Photo } from './photo';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Use non-null assertion operator ! on these two properties
  // to avoid compiler complaining about non-initialization
  singlePost!: Post;
  singlePhoto!: Photo;
  errorMessage!: string;

  postId = 5;
  allPosts: Post[] = [];

  // Inject the service class that implements all the HTTP calls
  constructor(private fakeAPIService : FakeAPIService) {
  }

  ngOnInit() {

    this.fakeAPIService.getSinglePost(this.postId).subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Post) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singlePost = { ...val};
      }
    );

  }

  retrievePhoto(hie: HTMLInputElement) {

    this.errorMessage = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.fakeAPIService.getSinglePhoto(parseInt(hie.value)).subscribe({

      // Handle successful emissions
      next: (val:Photo) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singlePhoto = { ...val};
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {                              
        console.error('Request failed !');
        this.errorMessage = "GET request failed with error code " + errorVal.status;
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }

  retrieveAllPosts() {

    this.fakeAPIService.getAllPosts().subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Post[]) => { 
        this.allPosts = val;
      }
    );

  }


}
