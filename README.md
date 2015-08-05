# foundation-workflow
This is the workflow for Foundation 5 and Compass SCSS. Just clone it and GO !!


Do not remove "compass" or try to fiddle with it by symlinking gems etc. (as I did, heh)
Simply uninstall the old "zurb-foundation-4.3.2" gem

###gem uninstall zurb-foundation

Install the "foundation" CLI gem
###gem install foundation

Install bower (if you don't have it yet - remember it depends on nodejs & npm)
###npm install -g bower

Create a new project with the CLI command. This will run bower.
Bower won't run as root, in case it complains that you're using sudo/root the solution is below

### foundation new ---> myproject path 

(optional) if bower complains do this:

### cd ---> myproject path 
###bower install foundation --allow-root

Now you should be inside the project's directory and
you should have a directory in there called "bower_components" required by compass.
From there you can just run:

###compass watch
