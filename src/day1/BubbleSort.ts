/*

[           ]
0           n


DEFINITION OF SORTED ARRAY
must meet this condition: xᵢ <= xᵢ₊₁

DEFINITION OF BUBBLE SORT
if I'm larger than you, we swap positions

FIRST ITERATION
[1,3,7,4,2]
 ^ 1 is smaller than 3, move on
[1,3,7,4,2]
   ^ 3 is smaller than 7, move on
[1,3,7,4,2]
     ^ 7 is larger than 4, swap, and move on
[1,3,4,7,2]
       ^ 7 is larger than 2, swap and move on     
[1,3,4,2,7] 
         ^ done. biggest number ends up at end.

Do another Iteation of bubble sort until end - 1.

SECOND ITERATION
...
[1,3,4,2,|7] 
     ^ 4 is larger than 2, swap and move on
[1,3,2,4,|7] 
       ^ done. biggest number ends up at end - 1 - 1. 

THIRD ITERATION
...
[1,3,2,|4,7]
   ^ 3 is larger than 2, swap and move on
[1,2,3,|4,7]
     ^ done. biggest number ends up at end - 1 - 1 - 1. 

FOURTH ITERATION
...
[1,2,|3,4,7]
   ^ done. we are done. 

*/

export default function bubble_sort(arr: number[]): void {
    // Iterations for to get the largest number to the end
    for (let i = arr.length; i > 0; i--) {
        // Compare every value against the next value
        for (let j = 0; j < i - 1; j++) {
            // if larger, swap it
            if (arr[j] > arr[j + 1]) {
                const valToMove = arr.splice(j, 1);
                arr.splice(j + 1, 0, ...valToMove);
            }
        }
    }
}
