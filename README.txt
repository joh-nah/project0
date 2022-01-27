#notes

server stuff:
https://github.com/processing/p5.js/wiki/Local-server



****** IF RUNNING PROJECT FROM NEW COMPUTER ******
    
  install node, install git, and run this in terminal:
    
  sudo npm install -g http-server                       ?????? just this, like right as i open a terminal window??
--->




****** HOW TO RUN p5 APP: ******

  open a terminal

  type 'git'
--->

  navigate to this project (shortcut, copy/paste):

  cd Desktop/Creative_coding_2/project0
--->




****** HOW TO OPEN P5 SKETCH ONLINE ******

  run this command in terminal:

  http-server -c-1
--->

  in browser, type this:
  
  http://localhost:8080/
--->




****** HOW TO CREATE LINK IN GITHUB TO MAKE PROJECT VISIBLE TO ANYONE ******

  in your project repo on github navigate to:

  settings > pages > source > change 'none' to 'main'




****** REGULAR GIT WORKFLOW ******

  anytime you make ANY (significant) edits to this project & future projects, do this once sketch.js is saved locally and/or once i've added any new files into local repo

  type this into terminal:

  git add . (do this if you've deleted/added any files in your local repo)
--->

  git commit -am'xxxxxx' (replace xxxxxx with comments/notes to remind yourself/others of any changes you made)
--->

  git push origin main (adds local files & .git file(hidden thing that tracks changes that i've commited) to GitHub)

