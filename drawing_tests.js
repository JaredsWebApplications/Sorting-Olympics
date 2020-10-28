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

    drawToScreen(position, x, y, colorMe=true){
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

class point {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	//location of the current cell
	position(){
		return [this.x, this.y];
	}
}

class Row {
    constructor(size, string, x=0, y=0){
        this.size = size;
        this.string = string;
        this.x = x;
        this.y = y;
        this.container = this.createContainer(x, y);
    }

    createContainer(x, y){
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

    display(){
        // write to the screen
        for(var i = 0; i < this.container.length; ++i){
            this.container[i].drawToScreen(i*this.size, this.x, this.y);
        }
    }
    updateColor(index, color){
        this.container[index].drawToScreen(index*this.size, this.x, this.y, color);
    }
}

class Quadrant {
    constructor(x_ran, y_ran){
        this.x_range = x_ran;
        this.y_range = y_ran;
    }

    between(val, range){
        /*
         * Check if a value is in range of values
        */
        let [min, max] = range;
        return(min <= val && max >= val);
    }

    value_in_range(coordinate){
        /*
         * Given two ranges, check if a coordinate lies in it
        */
        let [x, y] = coordinate.position();
        let x_in = this.between(x, this.x_range);
        let y_in = this.between(y, this.y_range);
        return (x_in && y_in);
    }

    center(){

        /*
         * Get the approximate center of a quadrant
        */

        let [x_0, x_f] = this.x_range;
        let [y_0, y_f] = this.y_range;

        return new point(
            Math.floor((x_0 + x_f)/2),
            Math.floor((y_0 + y_f)/2)
        )
    }

    writeLabel(content, coordinate) {

      let [x, y] = coordinate.position();
      textSize(16);
      text(content, x, y);
    }

    writeRow(content){
      content.display();
    }
}

class Plane {
    constructor(length, height){
        /*
         * length, height: determine size of the Cartesian plane
         * middle: find center divider
         * quadrants: each quadrant for a given plane, interfaced via n-1 indexing. Quadrant 1 is at index 0, so on..
        */
        this.length = length;
        this.height = height;
        this.hmiddle = Math.floor(this.length/2);
        this.vmiddle = Math.floor(this.height/2);
        this.quadrants = this.partition();
    }

    display(){
        /*
         * Draw to the screen
        */
        line(this.hmiddle, 0, this.hmiddle, this.height); // vertical line
        line(0, this.vmiddle, this.length, this.vmiddle); // horizontal line
    }

    partition(){
        let container = [];
        
        container.push(new Quadrant(
                        [0, this.hmiddle],
                        [0, this.hmiddle]
                      )
        ) // 1

        container.push(new Quadrant(
                        [this.hmiddle+1, this.length],
                        [0, this.hmiddle]
                      )
        ) // 2


        container.push(new Quadrant(
                        [0, this.hmiddle],
                        [this.hmiddle+1, this.height]
                      )
        ) // 3

        container.push(new Quadrant(
                        [this.hmiddle+1, this.length],
                        [this.hmiddle+1, this.height]
                      )
        ) // 4
        return container;
    }

}

class displayInterface {
	setup() {
		/*
		* attempting to center the canvas
		*/
		var canvas = createCanvas(windowWidth, windowHeight);
		var x = Math.floor((windowWidth - width) / 2);
		var y = Math.floor((windowHeight - height) / 2);
		canvas.position(x, y);
	}
	draw(insertionString, poreString, mergeString, quickString) {
		background(255);
		stroke(0);

		let P = new Plane(windowWidth, windowHeight);


		let QUADS = new Map();
		QUADS.set("Insertion", 
				[new point(5, 15),
				 new Row(50, insertionString, Math.floor(P.hmiddle/2)-375, Math.floor(P.vmiddle/2))]
		);
		QUADS.set("Poresort",
				[new point(965, 15),
				 new Row(50, poreString, Math.floor(P.hmiddle/2)+600, Math.floor(P.vmiddle/2))]
		);
		QUADS.set("Merge", 
				[new point(5, 555),
				new Row(50, mergeString, Math.floor(P.hmiddle/2)-375, Math.floor(P.vmiddle/2)+450)]
		);
		QUADS.set("Quick", 
				[new point(965, 555),
				new Row(50, quickString, Math.floor(P.hmiddle/2)+600, Math.floor(P.vmiddle/2)+450)]
		);

		let i = 0;


		for (const [label, value] of QUADS.entries()) {
		  let Q = P.quadrants[i++];
		  let [position, rower] = value;
		  Q.writeLabel(label, position);
		  rower.display();
		  //rower.updateColor(0, color('green'));
		}

		P.display();
	}
}


