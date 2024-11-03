
/* Provide the structure for the JSON content returned     
from a call to retrieve a single hero, for e.g:
https://localhost:3000/heros/3
*/

export interface Hero {
    id : number;
    firstName : string;
    lastName: string;
    age: number;
    married: boolean;
    job: string;
}