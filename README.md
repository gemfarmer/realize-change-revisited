# realize-change-revisited
# Setup
## Mac
* Download XCode from Apple AppStore
* In Terminal (open empty terminal shell)
* `cd ~`
* `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* install git -> `brew install git` or refer to other options [here](http://git-scm.com/downloads)
* install node and npm -> `brew install node`
* install mongodb -> `brew install mongodb`
* install grunt -> `npm install -g grunt-cli`
* install bower -> `npm install -g bower`
* Set up your github -> great setup instructions [here](https://help.github.com/articles/set-up-git/)
* Now, clone the directory from github
* `mkdir Projects`
* `cd Projects`
* clone -> `git clone https://github.com/gemfarmer/realize-change-revisited.git`
* `cd realize-change-revisited`
* install node modules -> `npm install`
* install bower packages -> `bower install`
* run server -> `grunt serve`

## PC
* install git -> check out options [here](https://git-scm.com/downloads)
* install node and npm -> check out different installation options [here](https://nodejs.org/download/)
* install mongodb -> [here](https://www.mongodb.org/downloads)
* install grunt -> `npm install -g grunt-cli`
* install bower -> `npm install -g bower`
* Set up your github -> great setup instructions [here](https://help.github.com/articles/set-up-git/)
* Now, clone the directory from github
* `mkdir Projects`
* `cd Projects`
* clone -> `git clone https://github.com/gemfarmer/realize-change-revisited.git`
* `cd realize-change-revisited`
* install node modules -> `npm install`
* install bower packages -> `bower install`
* run server -> `grunt serve`


# Collaboration
* For collaboration, we will be using github for version control management and using a method called Git Flow specifically to assure that our individual submissions do not conflict with others.
* [This](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) is a great resource on Git Flow.
* If this is overwhelming, no worries, i'll try to run through the basics that you will need to contribute.
* First, make sure you have a cloned version of the project in a directory on your machine. This is in the instructions above.
* Check to make sure that the remote repository exists -> `git remote -v` 
* This should give a fetch and push github url. If it doesn't (it should) add one -> git remote add origin https://github.com/gemfarmer/realize-change-revisited.git
* Check again -> `git remote -v`
* Now, if you are going to start working, create a new branch locally (on your machine) -> `git checkout -b NAME_OF_YOUR_NEW_BRANCH`
* Now work on changes
* If you would like to save those changes without adding them to the code on the master branch, you can push them to a remote version of that local branch. To do that, do the following
* Stage the changes -> `git add -A`
* Commit the changes and add a message -> git commit -m "YOUR_MESSAGE"
* git push origin NAME_OF_YOUR_NEW_BRANCH
* Periodically, you should pull in new changes on the remote server to your local machine. To do that, do as follows:
* After committing all changes, switch to the master branch -> `git checkout master`
* Pull your changes -> `git pull origin master`
* 


