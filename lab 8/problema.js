/**
 * Encontrar todos los 0s en la matriz y llenar la columna y la fila en la que se 
 * encuentra usando 0s. 

O(N + M) -> set columns and set rows 

first columns: set
first row: set

copy matrix true false  O(NM) <--> O(NM)

[[1,2,3,4,0], [0,5,3,4,6], [9,7,5,6,7]] 

 */

const turnMatrixToZeros = (matrix) => {
    let firstRowhasZero = false;
    let firstColhasZero = false;

    // column
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] == 0) firstColhasZero = true;
    }
    // row
    for(let i = 0; i < matrix[0].length; i++) {
        if(matrix[0][i] == 0) firstRowhasZero = true;
    }

    // O(NM)
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                matrix[0][j] == 0;
                matrix[i][0] == 0;
            }
        }
    }
    
    // O(NM) -- ceck first row for flags
    for(let i = 1; i < matrix[0].length; i++) {
        if(matrix[0][i] == 0) {
            for(let j = 1; j < matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }

    // O(NM) -- ceck first column for flags
    for(let i = 1; i < matrix.length; i++) {
        if(matrix[i][0] == 0) {
            for(let j = 1; j < matrix[i].length; j++) {
                console.log(matrix[i][j])
                matrix[i][j] = 0;
            }
        }
    }

    if(firstColhasZero) {
        // column
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    if(firstRowhasZero) {
        // row
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    return matrix;
}

console.log(turnMatrixToZeros([[1,2,3,4,0], [0,5,3,4,6], [9,7,5,6,7]]));