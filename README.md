

// readme.txt file :: project overview

**Documentation by:** Brian Lucero

**Last Update:** Saturday, October 31, 2020

# CLASS: CPSC-335 - Algorithms Engineering | Section-02 | Sort Race

### TEAM NAME: BurritoUI

### TEAM MEMBERS:
- Mason Godfrey
- Jared Dyreson
- Brian Lucero

## INTRODUCTION
**Sorting-Olympics (or Sort Race)**
HTML and P5 Sorting Algorithm comparison program.

// --------- readme.txt work in progress --------------


## Readme File
When your project is complete, you should provide a README.txt text file. Be clear in your instruction on how to build and use the project by providing instructions a novice programmer would understand. If there are any external dependencies for building, the README must also list them and how to find and incorporate them. Usage should include an example invocation. A README would cover the following:

1.  Class number ----------------------------------- (DONE)
2.  Project number and name --------------------- (DONE)
3.  Team name and members --------------------- (DONE)
4.  Intro (including the algorithm used) ---------- (DONE)
5.  Contents: Files in the .zip submission -------- (WIP)
6.  External Requirements (None?) --------------- (N/A)
7.  Setup and Installation (if any) ----------------- (WIP)
8.  Sample invocation ------------------------------ (WIP)
9.  Features (both included and missing) --------- (WIP)
10.  Bugs (if any) ------------------------------------- (WIP)
11.  Academic Rules --------------------------------- (WIP)
-Correctly and properly attribute all third party material and references, lest points be taken off.


## Algorithms
For this project, Team Burrito-UI was instructed to implement and  run four sorting algorithms:

**1.** Insertion Sort
**2.** Pore's Gold Sort
**3.** Merge Sort
**4.** Quick Sort

The main task of this project is to show each algorithm manipulate indices of an array iteration by iteration.

- A clear visual comparison can then be made between each algorithm's efficiency of string manipulation.
- An easy way to visualize this sorting race before actually running the program is with the PB&J sandwich assembly example.

***Peanut Butter & Jelly Sandwich Assembly Race***
 Let's say 4 contestants are told to assemble a peanut butter sandwich as fast as they possibly can. The first contestant to finish building their peanut butter & jelly sandwich wins the race.

*Different Assembly Instruction Lists*
> If we assume each contest has a different way of building the pb&j, then each contestant will mathematically have different completion times.

*Running time: Algorithm Efficiency class*
> However, depending on similarities of instruction lists, some contestants may fall into a distribution range that is acceptable to define such efficiency.

*The Main Idea*
> Two of the contestants check their time and then try to calculate the rate at which they are assembling (PB&J per second) after each assembly task, those 2 contestants might have a very similar end time in terms of end time distributions. The competition is split into different distribution ranges, thus can be labeled into different classes. . It will be similar, at least in the sense that they have an extra variable attached to their total running time.

## --- maybe will take out the following ---
```js
runTimeTotal = runTime( eachPass ) * extraTasks							
```
## --- ---

`Our Program`
> While BurritoUI was not making PB&J's, the Sorting Algorithms mentioned earlier are meant to be managed under similar principle's. An alternate example might be a Playing Card Sorting Race. All in All, the principle is observing, comparing, and assigning meaning to the various list of instructions to achieve the same desired end outcome, although they yield different run times.

***The main takeaway from this project is comparing the brilliance and efficiency of these 4 algorithms, visually, in real time.***

> How our team met the requirements and implementation designs are discussed further in the file descriptions below.

## Zip Contents

 File **readme.txt** ---  This file.

  File pix-js-p5-example-1.JPG.  A snapshot of the example webpage.

  File pix-js-p5-example2-F12-Console.JPG  A webpage + F12 Console.
    Shows entering some global var names to see their current values.

  File index-js-p5-example.html. Drag and drop this into a browser to
    run the example.
    Click to set new loc for drunk-bot (via mousePressed).
    Hit (almost) any key to toggle bot on or off (via keyPressed).

  File p5.js. This is the P5 package.  It is loaded inside the html.

  File cs-sketch.js; This contains several P5 user-defined linkage functions
   (setup, draw, keyPressed, and mousePressed), as well as example
    support functions.  P5's setup() is run once before page display.
    P5's draw() is run once per display frame, so you can do animation.

  File assets/styles.css.  This is an extra-small example of controlling
    webpage styling.  // Loaded inside the html.

  File assets/draw-stuff.js. This is an example to show loading a JS
    script file from a folder other than the index HTML file's
    folder location.  It also includes the utility draw_grid function
    written in P5+JS. // Loaded inside the html.

Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index-js-p5-example.html, into a browser
    window.  The example P5 program should start immediately.  You
    should see a 640x480 grid (white lines on black background) with
    row/column headers and some of the grid cells colored.  See the
    picture pix-js-p5-example-1.JPG





## Input

> The input was provided for our Sort Race will be one of several 15-character hexadecimal strings (for example "5F7D8A1593B47B8"). Note, the algorithms were created to also account for duplicate characters within the string.

## Input Ring

> Once the first string has been completely sorted by the set of algorithms, then the original input hexadecimal string should be rotated rightward by one character (ie, the last string character is removed from the end and inserted in front of the first character. For example, "5F7D8A1593B47B8" would be rotated to become "85F7D8A1593B47B". Then with this new string as input, the algorithms should be reset and rerun.

> This rotate-reset-rerun behavior should continue until the string has been rotated back into its original form. Then the entire program stops. (I.e., for a 15-character string, there should be 15 sort runs.)

## Expected Output

> To show the race competition, our program displays in an HTML page graphics canvas, each of the racing algorithms in their own quadrant.

> Note that all the algorithms run for one pass, and then display all the single pass results in the row (for each of the quadrants) BEFORE you have the algorithm continue to run for the next pass.

> to perform a single Pass Any Sort Array changes for each algorithm's Pass will be displayed on the program's HTML web page touching' all Pass results each algorithm will get a turn). Your program will one row per 'pass' algorithm's name input hex string will appear for between one half and one second, in order for the audience to see and understand the results.  

> Also, if one algorithm finishes its sorting, then it should not further update its column display until after all
the other algorithms have also finished.

## Architecture

> To simplify your code, and because you cannot run an algorithm through the entire sorting process at one time, we recommend that you create a Pass object for each algorithm, which keeps track of any
details (e.g., the array being sorted, or Mergesort might track a sublist size value) and is capable of
pass of its algorithm if given the string, probably as an array, to work on.

> It then becomes a bit simpler to run a single pass for each algorithm. You can do this for each algorithm by creating a Row Mgr (manager) object, which keeps track of what row needs to be updated, and can call each of the algorithms to get access to the pass-updated string for that algorithm. The Row Mgr could then get the results from a Pass object and display the updates to the algorithm's row.

> You might also want a Race Mgr to setup the initial strings, and display, for each algorithm, and then call the Row Mgr enough times to get all the algorithms to finish sorting the string. The Race Mgr would then do the rotate-reset and kick off the Row Mgr again.

> You do not have to use this architecture, but note that you cannot run an algorithm to completion and then display each of its passes, before running the next algorithm. The algorithms must each be “paused” in some fashion after each pass so that those pass results can be displayed.

## Running Time
> Included in our project folder is a 1-page paper describing our analysis of the rough running time of each algorithm as we have implemented it, not counting any GUI operations. The basic operation for a Sort algorithm is the 2-item comparison operation.  An expression for running time in terms of the number of operations used (including the algorithm's setup), is used show (briefly) how this running time is converted to a Big-O running time.



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
