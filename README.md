
`readme.txt file :: project overview`

**Documentation by:** `Brian Lucero`

**Last Update:** `Saturday, October 31, 2020`

# CLASS: CPSC-335 - Algorithms | Section-02 | Sort Race

### TEAM NAME: `BurritoUI`

### TEAM MEMBERS:

- Mason Godfrey
- Jared Dyreson
- Brian Lucero

## INTRODUCTION
**Sorting-Olympics (or Sort Race)**
HTML and P5 Sorting Algorithm comparison program.

**INPUT**

The input was provided for our Sort Race will be one of several 15-character hexadecimal strings (for example "5F7D8A1593B47B8"). Note, the algorithms were created to also account for duplicate characters within the string.

**INPUT RING**

Once the first string has been completely sorted by the set of algorithms, then the original input hexadecimal string should be rotated rightward by one character (ie, the last string character is removed from the end and inserted in front of the first character. For example, "5F7D8A1593B47B8" would be rotated to become "85F7D8A1593B47B". Then with this new string as input, the algorithms should be reset and rerun.

This rotate-reset-rerun behavior should continue until the string has been rotated back into its original form. Then the entire program stops. (I.e., for a 15-character string, there should be 15 sort runs.)

**EXPECTED OUTPUT**

*To show the race competition, our program displays in an HTML page graphics canvas, each of the racing algorithms in their own quadrant.*

- Each Quadrant has it's own array size 15 (15 indices), which holds the hexadecimal strings that the algorithm sorts through.
- Each array within the quadrant starts with the same string to sort and the passes are seen
- Note that all the algorithms run for one pass, and then display all the single pass results in the row (for each of the quadrants) BEFORE you have the algorithm continue to run for the next pass.
- To perform a single Pass Any Sort Array changes for each algorithm's Pass will be displayed on the program's HTML web page touching' all Pass results each algorithm will get a turn). Your program will one row per 'pass' algorithm's name input hex string will appear for between one half and one second, in order for the audience to see and understand the results.  
- Also, if one algorithm finishes its sorting, then it should not further update its column display until after all
the other algorithms have also finished.

**Algorithms**

**The main task of this project is to write (in HTML+JS+P5) program display the generational (i.e. one row per pass)
progress of several different sorting algorithms, side by side in their own columns**

**1.** Insertion Sort

**2.** Pore's Gold Sort

**3.** Merge Sort

**4.** Quick Sort

*A Different Approach*

Our group used a different way to display the sorting olympics. We utilize quadrants instead of a giant grid which will be explained in further detail later in the file contents section. Self-explanatory if one simply runs the program. With our approach, we still manage to achieve:

- A clear visual comparison can then be made between each algorithm's efficiency of string manipulation.
- An easy way to visualize this sorting race before actually running the program is with the PB&J sandwich assembly example.
- Extra functionalities to visualize other features.

***Concept***

Let's say 4 contestants are told to assemble a peanut butter sandwich as fast as they possibly can. The first contestant to finish building their peanut butter & jelly sandwich wins the race.

*Different Assembly Instruction Lists*

> If we assume each contest has a different way of building the pb&j, then each contestant will mathematically have different completion times.

*Running time: Algorithm Efficiency class*

> However, depending on similarities of instruction lists, some contestants may fall into a distribution range that is acceptable to define such efficiency.

*Similarities & Differences*

> Two of the contestants check their time and then try to calculate the rate at which they are assembling (PB&J per second) after each assembly task, those 2 contestants might have a very similar end time in terms of end time distributions. The competition is split into different distribution ranges, thus can be labeled into different classes. . It will be similar, at least in the sense that they have an extra variable attached to their total running time.

```js
/*
* Some pseudo code to help visualize this concept
* The two contestants who DO have extra tasks
* vs.
* other two contestants who DO NOT have extra tasks
*/
runTimeTotal1 = runTime( eachPass ) * extraTasksRunTime( eachPass)

// vs.

runTimeTotal2 = runTime( eachPass ) 							
```

`*** Our Program ***`

> While BurritoUI was not making PB&J's, the Sorting Algorithms mentioned earlier are meant to be managed under similar principle's. An alternate example might be a Playing Card Sorting Race. All in All, the principle is observing, comparing, and assigning meaning to the various list of instructions to achieve the same desired end outcome, although they yield different run times.

***The main takeaway from this project is comparing the brilliance and efficiency of these 4 algorithms, visually, in real time.***

`How our team met the requirements and implementation designs are discussed further in the file descriptions below.`

## ZIP CONTENTS

**-- Documentation --**

`-- EXPORTED FOLDER --`

File || **documentation/exported/SortingOlympics.pdf**

> Included in our project folder is a 1-page paper describing our analysis of the rough running time of each algorithm as we have implemented it, not counting any GUI operations. The basic operation for a Sort algorithm is the 2-item comparison operation.  An expression for running time in terms of the number of operations used (including the algorithm's setup), is used show (briefly) how this running time is converted to a Big-O running time.

File || **documentation/exported/readme.pdf**

> This file, but in pdf format

`-- MAIN DOCUMENTATION FOLDER --`

File || **documentation/SortingOlympics.tex**

>  https://stackoverflow.com/questions/3175105/inserting-code-in-this-latex-document-with-indentation

File ||  **documentation/pix-js-p5-example-1.JPG**

> A snapshot of the example webpage.

File || **documentation/readme.txt**

> This file, in requested format

> * * * * * * * * * * * * * *

**-- Runtime --**

`-- ALGORITHMS FOLDER --`

File || **runtime/algorithms/QuickSort.js**

> Implementation of the actual sorting functionality of Quick Sort. Although naturally a recursive algorithm, it is implemented via 1 main function, quickie(), and two other helper functions.

`-- ASSETS FOLDER --`

File || **runtime/assets/p5.js**

> This is the P5 package. It is loaded inside the html.

`-- GRAPHICS FOLDER --`

File || **runtime/graphics/Cell.js**

> This file contains the implementation of the Cell class, which is where each index of a given string is displayed on to the screen.

File || **runtime/graphics/Draw.js**

> This file contains the driver code to display a plane, four quadrants and their respective rows.

File || **runtime/graphics/Plane.js**

> - This file contains the implementation of the plane class, which is where the quadrants and other components of this project reside.
> - It also defines the boundaries of each quadrant dynamically based on screen size and is passed the respective quadrant object.

File || **runtime/graphics/point.js**

> This file contains the implementation of the point class, which represents Cartesian points on a plane.

File || **runtime/graphics/Quadrant.js**

> This file contains the implementation of the quadrant class, which is where each row and algorithm resides.

File || **runtime/graphics/Row.js**

> This file contains the implementation of the Row class, which is where a chain of Cell class instances form a horizontal row.

`-- MAIN RUNTIME FOLDER --`

File || **Algorithm.js**

> This file contains the sorting function implementations for the each of the following sorting functions:
> 1. Insertion Sort
> 2. Pore's GoldSort
> 3. Merge Sort
> 4. Quick Sort
- Implementation contained in separate file
- runtime/algorithms/QuickSort.js

File || **Display.js

> This file contains implementations of the select(), setup(), and draw() functions.

> - select() --- function that gets a random value from a string array in JS
>
> - setup() --- acts as the main function to set up the environment inside of the web browser
>
> - draw() --- function to draw the values of the array and sorting visuals

> * * * * * * * * * * * * * *

**-- Remaining Project Files --**

File || **index.html**

> Drag and drop this into a browser to
run the example.

File ||  **LICENSE**

> MIT LICENSE, for this project, and all related material

***End of Zip Contents***


## SETUP & INSTALLATION & RUNNING

**1.** Download and extract the .zip file into a folder on your machine.

**2.** Drag the HTML file, index.html, into a browser window.  The example P5 program should start immediately.  You should see a 4 quadrant grid box (black lines with white background) with labels inside  and some of the grid cells colored.  See the picture pix-js-p5-example-1.JPG

## EXTERNAL REQUIREMENTS

There is not any external applications required to run this app besides an internet browser, which is assumed every individual has, if they are able to download the file from the internet.

## SAMPLE INVOCATION

Included in the project folder are images highlighting the various example screens when running successfully.

## FEATURES (both included and missing)

***Included:***

> our program features a dynamic color gradient on the arrays, to also help visualize certain processes that occur behind the scenes.

***Missing:***

> This program should have all of the required features.

## BUGS & ISSUES (if any
BurritoUI is not aware of any bugs or issues that currently exist in our program after running various tests and utilizing different input. The submitted program should run as mentioned.

## CREDITS & REFERENCES (ACADEMIC RULES)

**Brian Lucero:**

- I referred to some documentation about p5 but can't find the exact URL for it. Simple handbook doc.
- Referred to Geeks for Geeks website to correct my implementation for an iterative solution to merge sort
- https://www.geeksforgeeks.org/iterative-merge-sort/

**Jared Dyreson:**

referred to these websites:

- Sourced from https://www.techiedelight.com/iterative-implementation-of-quicksort/
- https://stackoverflow.com/questions/3175105/inserting-code-in-this-latex-document-with-indentation
- Source: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

**Mason Godfrey:**

referred to these websites:

- a documentation website for p5 that brian mentioned earlier

***

`end of readme`

***

# notes for submission of project

## Submission

**All Necessary Files:** Your submission must, at a minimum, include a plain ASCII text file called **README.txt**, all project documentation files (except those already delivered), all necessary source files to allow the submission to be built and run independently by the instructor. [For this project, no unusual files are expected.] Note, the instructor not use use your IDE or O.S.

- also **include a .pdf version of the readme file** so that more features within the markdown text can be viewed.

### Headers:

All source code files must include a comment header identifying the author, author’s contact info (please, no phone numbers), and a brief description of the file.

### No Binaries:

Do not include any IDE-specific files, object files, binary executables, or other superfluous files.

### Project Folder:

Place your submission files in a folder named like your Standup report files: 335-02-p1- Groggy.

### Project Zip File:

Then zip up this folder. Name the .zip file the same as the folder name, like 335-02-p1- Groggy.zip. Turn in by 11pm on the due date (as specified in the bulletin-board post) by submitted via emailed zip file(s) (preferred), or via accessible cloud (eg, Github, Gdrive, Dropbox) with emailing the accessible cloud link/URL. See the Syllabus for the correct email address. The email subject title should include the folder name, like 335-02-p1-Groggy. Note that some email-programs block .ZIP files (but maybe allow you to change .ZIP to .ZAP) and block sending zipped files with .JS files inside (but maybe allow you to change .JS to .JS.TXT).

### Email Body:

Please include your team members' names and campus IDs at the end of the email.

### Project Problems:

If there is a problem with your project, don't put it in the email body – put it in the README.txt file, under an “ISSUES” section.

### Grading

-   75% for compiling and executing with no errors or warnings
-   10% for clean and well-documented code (Rule #5(Clean))
-   10% for a clean and reasonable documentation files
-   5% for successfully following Submission rules


## Academic Rules

Correctly and properly attribute all third party material and references, if any, lest points be taken off.

## Project Reporting Data, Readme File, Submission & Readme File, Grading

Same as for Project #1.
