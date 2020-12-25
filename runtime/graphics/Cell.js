/************************************************************************
* * * * * * * * * * * * * *	CELL.JS * * * * * * * * * * * * * * * * * * *
*************************************************************************
* CREATED BY : JARED DYRESON * jareddyreson@csu.fullerton.edu
             : BRIAN LUCERO  * 13rianlucero.csu.fullerton.edu
*************************************************************************
*
* This file contains the implementation of the Cell class, which is where each
* index of a given string is displayed on to the screen.
*
**************************************************************************/

class Cell {
	/* Returns the dimensions of the cell */
    dimensions() {
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

    drawToScreen(position, x, y, colorMe=true) {
      /*
       * Draw the current square to the screen
      */
		  let colorWanted = (this.content.charCodeAt(0) - "0".charCodeAt(0));
		  if(colorWanted > 9)
			colorWanted -= 7;

		  colorWanted *= 18;

	    fill(colorWanted, 0xff, 0x77, 255);
      stroke('black');
      strokeWeight(1);

      let [x1,y1,height,width] = this.dimensions();
      rect(x1, y1, height, width);
      textSize(22);
      // modify the color as needed
	    fill("black");
	    strokeWeight(0)
      text(this.content, x+position+20, y+30);
	    strokeWeight(1);
    }

    center() {
        /*
         * Get the approximate center of a cell
        */
        return new point(
            Math.floor((this.bl.x + this.length)/2),
            Math.floor((this.bl.y + this.width)/2)
        )
    }
}
