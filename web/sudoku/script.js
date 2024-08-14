
(()=>{

    const board = []
    const rows_filled = []
    const columns_filled = []
    const blocks_filled = []

    //initializing
    for(let i=0;i<9;i++){
        board[i] = []
        for(let j=0;j<9;j++)
            board[i][j] = 0

        rows_filled[i]=0
        columns_filled[i]=0
        blocks_filled[i]=0
    }


    function randomChoice(){
        let n = Math.floor(Math.random()*10)
        return n;
    }

    function pickASlot(){
        let block,cell,row,column;
        do{
            block = randomChoice()
        }
        while(isBlockOverfilled(block))

        do{
            cell =  randomChoice()
            [row,column] = cellToCoordinatesMapper(cell,block)
        }
        while()
    }


    //minus one modulus for column
    //divide for row
    //0 - 00, 1 - 03 , 2- 06
    //3 - 30, 4 - 33,  5 - 36
    //6 - 60, 7 - 63, 8 - 66 
    //block number divided by 3 rounded multiplied by 3 : row_start
    //block number * 3 : col_start
    function markSlot(){

    }

    //mappers
    function cellToCoordinatesMapper(cell,block){
        let row,column;
        
    }


    //helpers to prevent overfilling
    function isRowOverfilled(n){
        return rows_filled[n]>4;
    }

    function isColumnOverfilled(n){
        return columns_filled[n]>4;
    }

    function isBlockOverfilled(n){
        return blocks_filled[n]>4;
    }


    //validators

    function isRowValid(n){
        let present = [], current;
        for(i=0;i<9;i++){
            current = board[n][i];
            if(present.contains(current))
                return false;
            present.push(current)
        }
        return true;
    }

    function isColumnValid(n){
        let present = [], current;
        for(i=0;i<9;i++){
            current = board[i][n];
            if(present.contains(current))
                return false;
            present.push(current)
        }
        return true;
    }

    function isBlockValid(n){

    }
    













})()