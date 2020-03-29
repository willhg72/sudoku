module.exports = function solveSudoku(matrix) {
//function solveSudoku(matrix) {
  // your solution

  // Solution using a backtracking algorithm
  // William Hernandez - 28/03/2020

  //calling the main logic
   recursiveSolveSudoku(matrix);
   //printMatrix(matrix);
   return matrix;
}

// the main logic of the solution using recursion
function recursiveSolveSudoku(matrix){   
  // Assigning values to row and col from empty location if any
  let [row,col] = [...findEmptyLocation(matrix)];
  // If there is no assigned location, we are done!
  if(row == -1) {return true}
   
    // consider digits 1 to 9 
    for (let num = 1; num < 10; num ++){    
      // verify colum, row and subset for the num 
      if(checkIsLocationSafe(matrix,row,col,num)){        
          // make tentative assignment number
          matrix[row][col]=num 
          // return if success! 
          if(recursiveSolveSudoku(matrix)){return true}
          // failure, resets the spot and try again 
          matrix[row][col] = 0;
      }      
    }
    return false
  }
//return an array of two positions  
// find a empty spot or a spot with 0 and return the row,col position
function findEmptyLocation(matrix){
  for( let i=0; i< 9;i++){
    for (let j=0; j < 9; j++){ 
        if(matrix[i].indexOf(0) == -1){break}
        if(matrix[i][j] == 0) {return [i,j]}
     }  
   }   
 return [-1,-1]; 
}
// return a boolean
//ask if there is the "num parameter"  in any spot of the row "row parameter" 
function usedInRow(matrix,row,num){ 
  for(let j = 0; j < 9; j++){ 
      if(matrix[row][j] == num) {return true}
   }    
  return false;
}
// return a boolean
//ask if there is the "num parameter"  in any spot of the column "col parameter"
function usedInCol(matrix,col,num){ 
  for(let i = 0; i < 9; i++){ 
      if(matrix[i][col] == num) {return true}
  }      
  return false;  
}
// return a boolean
//ask if there is the "num parameter"  in any spot of the subset 3x3     
function usedInBox(matrix,row,col,num){ 
  for( let i= 0; i< 3; i++){ 
      for(let j = 0; j < 3; j++){ 
          if(matrix[i+row][j+col] == num) {return true}
      }
  }        
  return false
}
// ask if safe put the number "num parameter" , check the colum "col", the row "row" and 
  // the subset 3x3  
function checkIsLocationSafe(matrix,row,col,num){   
    // Check if 'num' is not already placed in current row, 
    // current column and current 3x3 box 
    return !usedInRow(matrix,row,num) 
           && !usedInCol(matrix,col,num) && !usedInBox(matrix,((row+1) - row%3)-1,((col+1) - col%3)-1,num); 
}


/*



*/


//Print the matrix for local testing
function printMatrix(matrix){ 
  for( let i = 0 ; i < 9 ; i++){ 
      //for( let j = 0; j < 9; j++){ 
        console.log(""+ matrix[i]); 
      //}
   }
}


/*
let matrix = [
  [0, 5, 0, 4, 0, 0, 0, 1, 3],
    [0, 2, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 0, 0, 0, 8, 5, 6, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 0],
    [3, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 7, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0]
];

solveSudoku(matrix);
*/