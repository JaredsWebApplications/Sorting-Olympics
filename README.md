// readme.txt file :: project overview
**Documentation by:** Brian Lucero
**Date:** Saturday, October 31, 2020



# CLASS: CPSC-335 - Algorithms Engineering | Section-02 | Sort Race

### TEAM NAME: BurritoUI

### TEAM MEMBERS:
- Mason Godfrey
- Jared Dyreson
- Brian Lucero

## INTRODUCTION
**Sorting-Olympics (or Sort Race)**
HTML and P5 Sorting Algorithm comparison program.

// -------------------------------------------------
// -------------------------------------------------
// ------  **Readme.txt instruction notes**   ------
// -------------------------------------------------
// -------------------------------------------------

## *Project Development Reporting*
Standup Status Report, twice weekly. The Standup Status Report is due Monday's and Friday's by noon-ish. One report per team, CC'ing the other team members. It should contain, team name and the member names. This documents should be delivered as a PDF file; and the filename should be in the following format: include your course and section number, project number, your team name, the document type (Standup), and the date as YYMMDD:. E.g., “335-02-p1-Groggy-Standup-200831.pdf”.

## Algorithms
For this project, Team Burrito-UI was instructed to implement and  run four sorting algorithms:

**1.** Insertion Sort
**2.** Gold's Poresort
**3.** Mergesort
**4.** Quicksort

The goal of this project is to show each algorithm manipulate indices of an array iteration by iteration. A clear visual comparison could then be made between each algorithm's efficiency of string manipulation.

- An easy way to visualize this sorting race before actually running the program is with the PB&J sandwich assembly example.

***Peanut Butter & Jelly Sandwich Assembly Race***
> Let's say 4 contestants are told to assemble a peanut butter sandwich as fast as they possibly can. The first contestant to finish building their peanut butter & jelly sandwich wins the race.

> If we assume each contest has a different way of building

## Input
> The input for a Sort Race will be one of several 15-character hexadecimal strings (for example "5F7D8A1593B47B8"). You will be provided with a set of them for testing. Note, there may be duplicate characters in the input.

## Input Ring
> Once the first string has been completely sorted by the set of algorithms, then the original input hexadecimal string should be rotated rightward by one character (ie, the last string character is removed from the end and inserted in front of the first character. For example, "5F7D8A1593B47B8" would be rotated to become "85F7D8A1593B47B". Then with this new string as input, the algorithms should be reset and rerun.

> This rotate-reset-rerun behavior should continue until the string has been rotated back into its original form. Then the entire program can stop. (I.e., for a 15-character string, there should be 15 sort runs.)

## Output
> To show the race competition, you should display in an HTML page graphics canvas each of the racing algorithms, side-by-side, with each as a grid column with one cell wide by 40+ rows high. All four grid columns (one for each algo) can share the canvas if you put 1 or 2 cells between each algorithm column. Each grid cell should be at least 20x20 pixels wide, and as you will be putting one hex digit in a cell, you will have to ensure that the text digit character fits.

> On the top (row 0) row, the will appear (or enough of it to fit within your 15-cell width).

> On the next (row 1) the in each sort algorithm's column. Thereafter, for each pass of all the algorithms, the updated order of the hexadecimal string should be shown in each column. This row-by-row display updating is intended to be similar to the cellular automata display of Project #1, but in several columns, one for each algorithm.

> Note that you run all the algorithms for one pass, and then display all the single pass results in the row (for each of the columns) BEFORE you have the algorithm continue to run for the next pass.

> Below are sample inputs that your program should be able to race. For a race, each sorting algorithm will start with the same input. You should be able to run any of the sample inputs.

> Make sure that you have enough rows to display all the passes for the worst algorithm. Output Delay

> After each pass is displayed (for all the algorithms) you should delay the start of the next pass computations

> This project is to write (in HTML+JS+P5) program display the generational (i.e., progress of several run several algorithms in an interleaved fashion, where  (approximately ' the elements of its array to be sorted) in its Pass, and then show the newly updated array (the ) in the next row of that algorithm's column.

> different sorting algorithms (each in their own column) side-by-side

> to perform a single Pass Any Sort Array changes for each algorithm's Pass will be displayed on the program's HTML web page touching' all Pass results each algorithm will get a turn). Your program will one row per 'pass' algorithm's name input hex string will appear for between one half and one second, in order for the audience to see and understand the results.  

> Also, if one algorithm finishes its sorting, then it should not further update its column display until after all
the other algorithms have also finished.

## Setup
> Your program should select one of the sample inputs provided below at random (or you can ask the user for a hex “index” digit to pick one of them). Each is a list of 15 hex digits. Your program can include them as dedicated input data (ie, hardcoded).

## Architecture
> To simplify your code, and because you cannot run an algorithm through the entire sorting process at one time, we recommend that you create a Pass object for each algorithm, which keeps track of any
details (e.g., the array being sorted, or Mergesort might track a sublist size value) and is capable of
pass of its algorithm if given the string, probably as an array, to work on.

> It then becomes a bit simpler to run a single pass for each algorithm. You can do this for each algorithm by creating a Row Mgr (manager) object, which keeps track of what row needs to be updated, and can call each of the algorithms to get access to the pass-updated string for that algorithm. The Row Mgr could then get the results from a Pass object and display the updates to the algorithm's row.

> You might also want a Race Mgr to setup the initial strings, and display, for each algorithm, and then call the Row Mgr enough times to get all the algorithms to finish sorting the string. The Race Mgr would then do the rotate-reset and kick off the Row Mgr again.

> You do not have to use this architecture, but note that you cannot run an algorithm to completion and then display each of its passes, before running the next algorithm. The algorithms must each be “paused” in some fashion after each pass so that those pass results can be displayed.

## Running Time
> You should prepare a 1-page (at most) paper describing your analysis of the rough running time (not Big-O) of each algorithm as you have implemented it, not counting any GUI operations. Your basic operation for a Sort algorithm is the 2-item comparison operation. If you feel that other operations should also be included -- perhaps because they end up taking a significant (above 5% of the total) time -- then they should be included as well. Once you have an expression for running time in terms of the number of operations used (including the algorithm's setup), then show (briefly) how this running time is converted to a Big-O running time.

## Sample Inputs
"05CA627BC2B6F03"	 "065DE6671F040BA" "0684FB893D5754E" 	"07C9A2D183E4B65" "09F48E7862D2616" 	"1FAB3D47905C286"
"286E1D0342D7859" 	"30E530C4786AF21" "328DE4765C10BA9"  "34F2756F18E90BA" "90BA34F0756F180" 	"D7859286E2D0342"

## Academic Rules -- (WIP)
Correctly and properly attribute all third party material and references, if any, lest points be taken off.

## Project Reporting Data, Readme File, Submission & Readme File, Grading
Same as for Project #1.

## Readme File
When your project is complete, you should provide a README.txt text file. Be clear in your instruction on how to build and use the project by providing instructions a novice programmer would understand. If there are any external dependencies for building, the README must also list them and how to find and incorporate them. Usage should include an example invocation. A README would cover the following:

1.  Class number ----------------------------------- (DONE)
2.  Project number and name --------------------- (DONE)
3.  Team name and members --------------------- (DONE)
4.  Intro (including the algorithm used) ---------- (WIP)
5.  Contents: Files in the .zip submission -------- (WIP)
6.  External Requirements (None?) --------------- (N/A)
7.  Setup and Installation (if any) ----------------- (WIP)
8.  Sample invocation ------------------------------ (WIP)
9.  Features (both included and missing) --------- (WIP)
10.  Bugs (if any) ------------------------------------- (WIP)
11.  Academic Rules --------------------------------- (WIP)
-Correctly and properly attribute all third party material and references, lest points be taken off.

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
