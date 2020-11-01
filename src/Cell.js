/************************************************************************
 *	CELL * CREATED BY JARED DYRESON * jareddyreson@csu.fullerton.edu    *
 ************************************************************************
 * This file contains a function to be run when a webpage initially
 * runs, as well as a function that updates the program every frame.
 *
 * CLASSES
 *
 * Cell - an entity that contains a character representing a string given as
 * input for the sorting algorithm. Can be mutated and updated at will
 *
 * FUNCTIONS
 *
 * dimensions - get an unpackable version of the attributes which can be used
 * throughout other functions
 * drawToScreen - write an individual to the screen and can also accept a color
 * value to change the fill of that given cell
 * center - get the center position of the cell
 *
 *
 *************************************************************************/

 class Cell {
	/*
     * Returns the dimensions of the cell
    */
    dimensions(){
      return [this.bl.x, this.bl.y, this.length, this.width];
    }

	constructor(bl, content, length=10, width=10){
        /*
         * bl: bottom left coordinate
         * length: how many pixels long the box is
         * width: how many pixels wide the box is
         * both of these are defaulted to 10
         * state: which color is the cell
        */
        this.bl = bl;
        this.content = content;
        this.length = length;
        this.width = width;
	}

    drawToScreen(position, x, y, colorMe=false){
      /*
       * Draw the current square to the screen
      */

      if(colorMe){
        // modify the color as needed
        fill(colorMe);
      }
      stroke('black');
      strokeWeight(2);

      let [x1,y1,height,width] = this.dimensions();
      rect(x1, y1, height, width);

      textSize(22);
      text(this.content, x+position+20, y+30);
      fill('white');
    }

    center(){
        /*
         * Get the approximate center of a cell
        */

        return new point(
            Math.floor((this.bl.x + this.length)/2),
            Math.floor((this.bl.y + this.width)/2)
        )
    }
}
