# notes

server stuff:
https://github.com/processing/p5.js/wiki/Local-server


****** IF RUNNING PROJECT FROM NEW COMPUTER ******
    
> install node, install git, and run:
    
  sudo npm install -g http-server
--->




****** HOW TO RUN p5 APP: ******

> open a terminal

> type 'git'

--->

> navigate to this project (shortcut, copy/paste):

  cd ~/Desktop/creative\ coding\ 2
--->
  cd project0-steep-and-fast/
--->

> host a server to show on web browser
  http-server -c-1
--->

> point your browser, copy/paste to:
  
  http://localhost:8080/
--->




****** HOW TO CREATE LINK TO MAKE PROJECT VISIBLE TO ANYONE ******

  in github > project repo > settings > pages > source > change to 'main'




****** REGULAR GIT WORKFLOW ******
anytime i make ANY significant edits to this project & future projects, DO THIS once sketch.js is saved locally and/or once i've added any new files into local repo type this into terminal

git add . (do this command if i've deleted/added any files in my local repo)
git commit -am'__WRITE NOTES FOR WHAT YOU DID, SHOWS IN GITHUB. SIMILAR TO  //comment IN PROCESSING__'
git push origin main (adds local files & .git file(hidden thing that tracks changes that i've commited to it) to GitHub)

