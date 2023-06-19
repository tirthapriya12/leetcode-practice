/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let hasValidSubMatrices = true, hasValidRowCols = true;

    hasValidRowCols = isValidMatrix(board);

    for (let i = 0, k = 0; i < board.length; i++) {
        if (!hasValidSubMatrices) return false;

        //keep updating k whenever i traverses all 3*3 matrix in a row. i.e 
        // i = 0-2 , k = 0, i = 3-5 , k =3
        // to get the starting value for rows
        k = i % 3 == 0 && i != 0 ? (k + 3) : k;
        const numMap = {};
        for (j = 0; j < 3; j++) {
            //i%3 because the index cannot go >= 3
         
            board[k + j].slice(((i % 3) * 3), ((i % 3) * 3) + 3).every((num) => {
                if (num == '.') return true;

                if (numMap[num] || parseInt(num) > 9 || parseInt(num) < 1) {
                    hasValidSubMatrices = false;
                    return false;
                }
                numMap[num] = 1;
                return true;
            });
        }

        // hasValidSubMatrices = isValidMatrix(subMatrix);


    }

    return hasValidRowCols && hasValidSubMatrices;
};

function isValidMatrix(matrix) {
    let hasValidRows = true;
    let hasValidColumns = true;
    //check rows
    matrix.every(row => {
        const numMap = {};
        //using every() to break out of loop by returning false when we find an exit condition
        row.every((num) => {
            if (!hasValidRows) return false;
            //empty cell
            if (num == '.') return true;

            if (numMap[num] || parseInt(num) > 9 || parseInt(num) < 1) {
                hasValidRows = false;
                return false;
            }
            else {
                numMap[num] = 1;
            }
            return true;
        });

        return hasValidRows;
    });



    //check columns

    matrix.every((row, i) => {
        const numMap = {};
        matrix.every((col, j) => {
            const num = matrix[j][i];
            if (!hasValidColumns) return false;
            //empty cell
            if (num == '.') return true;
            if (numMap[num] || parseInt(num) > 9 || parseInt(num) < 1) {
                hasValidColumns = false;
                return false;
            }
            else {
                numMap[num] = 1;
            }
            return true;
        });

        return hasValidColumns;
    });

    return hasValidColumns && hasValidRows;
}

x = isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]);

console.log(x);