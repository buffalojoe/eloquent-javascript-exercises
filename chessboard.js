let chessboard = ''
let size = 124

for (i = 1; i <= size; i++){
    for(j = 1; j <= size; j++){
        if (i % 2 == 0){
            if(j % 2 == 0){
                chessboard += ' '
            } else {
                chessboard += '#'
            }
        } else {
            if(j % 2 == 0){
                chessboard += '#'
            } else {
                chessboard += ' '
            }
        }
    }
    chessboard += '\n'
}


console.log(chessboard)
