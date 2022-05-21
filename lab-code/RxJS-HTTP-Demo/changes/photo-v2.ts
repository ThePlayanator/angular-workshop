
/* Provide the structure for the JSON content returned     
from a call to retrieve a single photo, for e.g. 
https://jsonplaceholder.typicode.com/photos/3
*/

export interface Photo {
    albumId : number;
    id : number;
    title : any;
    url: string;
    thumbnailUrl: string;
}