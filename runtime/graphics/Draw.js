/************************************************************************
* * * * * * * * * * * * * *	DRAW.JS * * * * * * * * * * * * * * * * * * *
*************************************************************************
* CREATED BY : JARED DYRESON * jareddyreson@csu.fullerton.edu
             : BRIAN LUCERO  * 13rianlucero.csu.fullerton.edu
*************************************************************************
*
* This file contains the driver code to display a plane, four quadrants and their
* respective rows.
*
 *************************************************************************/

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
				[new point(5, 480),
				new Row(50, mergeString, Math.floor(P.hmiddle/2)-375, Math.floor(P.vmiddle/2)+450)]
		);
		QUADS.set("Quick",
				[new point(965, 480),
				new Row(50, quickString, Math.floor(P.hmiddle/2)+600, Math.floor(P.vmiddle/2)+450)]
		);

		let i = 0;

		for (const [label, value] of QUADS.entries()) {
		  let Q = P.quadrants[i++];
		  let [position, rower] = value;
		  Q.writeLabel(label, position);
		  rower.display();
		}
		P.display();
	}
}
