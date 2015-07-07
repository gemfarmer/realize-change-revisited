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
* `cd ~ && mkdir Projects`
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
* Get into the correct directory -> `cd ~/Projects/realize-change-revisited`
* Check to make sure that the remote repository exists -> `git remote -v` 
* This should give a fetch and push github url. If it doesn't (it should) add one -> git remote add origin https://github.com/gemfarmer/realize-change-revisited.git
* Check again -> `git remote -v`
* Now, if you are going to start working, create a new branch locally (on your machine) -> `git checkout -b NAME_OF_YOUR_NEW_BRANCH`
* Now work on changes
* If you would like to save those changes without adding them to the code on the master branch, you can push them to a remote version of that local branch. To do that, do the following
* Stage the changes -> `git add -A`
* Commit the changes and add a message -> git commit -m "YOUR_MESSAGE"
* git push origin NAME_OF_YOUR_NEW_BRANCH
#### Push to your remote branch
* Periodically, you should pull in new changes on the remote server to your local machine. To do that, do as follows:
* After committing all changes, switch to the master branch -> `git checkout master`
* Pull your changes -> `git pull origin master`
* The easiest way (probably not the best, but will work) is to creat a separate, temporary branch to merge the master and your feature branch. -> `git checkout -b temporary-branch`
* Then, merge your feature changes onto that branch -> `git merge NAME_OF_YOUR_NEW_BRANCH`
* If there are conflicts, refer to the files where there is overlap and try to resolve them. Make sure to get rid of extra angle brackets <<<<<<<< or >>>>>>>>>. If you don't know what is going on here, give me a ring.
* There probably won't be if you do this regularly, so if not, continue by navigating to your feature branch -> `git checkout NAME_OF_YOUR_NEW_BRANCH`
* add your changes to this branch -> `git merge temporary-branch`
* now stage, commit, and push these changes to the server:
* Stage -> `git add -A`
* Commit -> `git commit -m "YOUR_MESSAGE"`
* Push -> `git push origin NAME_OF_YOUR_NEW_BRANCH`
* Then, delete the temporary branch -> `git branch -D temporary-branch`

#### Making additions to master
* When you are ready to add your additions to master, follow all the steps in the 'Push to your remote branch' section, then submit a pull request on github.
* Go to [the repo](https://github.com/gemfarmer/realize-change-revisited), then click on the Pull Requests tab on the right side, and submit a pull request comparing the master branch to your branch
* I'll take a look at it, and merge it.
* Once this is done, you can pull the new changes down by:
* `git checkout master`
* `git pull origin master`


