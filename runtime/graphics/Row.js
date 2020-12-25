/************************************************************************
* * * * * * * * * * * * * *	ROW.JS * * * * * * * * * * * * * * * * * * *
*************************************************************************
* CREATED BY : JARED DYRESON * jareddyreson@csu.fullerton.edu
             : BRIAN LUCERO  * 13rianlucero.csu.fullerton.edu
*************************************************************************
*
* This file contains the implementation of the Row class, which is where
* a chain of Cell class instances form a horizontal row.
*
**************************************************************************/

class Row {
    constructor(size, string, x=0, y=0){
        this.size = size;
        this.string = string;
        this.x = x;
        this.y = y;
        this.container = this.createContainer(x, y);
    }

    createContainer(x, y) {
        /*
         * we convert the string into an array of Cells
         * here we can display each index correctly in a row like fashion
         * contents can be changed after, so we can even pass into sorting functions directly
        */
        let array = [];
        let indexer = 0;
        let length = this.size * this.string.length;
        let height = length;

        for(var i = 0; i < length; i+=length/this.string.length){
            let p =  new point(x+i, y);
            let cell = new Cell(p, this.string[indexer++], this.size, this.size);
            array.push(cell);
        }
        return array;
    }

    display() {
        // write to the screen
        for(var i = 0; i < this.container.length; ++i){
            this.container[i].drawToScreen(i*this.size, this.x, this.y);
        }
    }
    updateColor(index, color){
        this.container[index].drawToScreen(index*this.size, this.x, this.y, color);
    }
}
