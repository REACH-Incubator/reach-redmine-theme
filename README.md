# Redmine Theme
## _Reach Project Theme_


Redmine Theme files for REACH - Next Generation Data Incubator.

## Docker


A volume will be defined in the container to include the theme folder.
The url for redmine themes is as follows `/usr/src/redmine/public/themes/` 

Due to the limitations of redmine, the name of the theme itself has had to be 
included in the javascript code of the theme and
this makes it mandatory for the final path to be the following `/usr/src/redmine/public/themes/reach-theme`

## SCSS

The css code is written in scss, so to make any changes to the project, 
it is required to compile the scss file with sass.

IT IS IMPORTANT not to directly modify the css file as any future 
modification and compilation of the scss file will overwrite the changes made.

To install sass it is recommended not to use the package contained in the 
Linux distribution, since the sass program made in ruby is currently unattended.

It is best to install the npm package for sass with the following code 
from the terminal.

```sh
npm install -g sass
```


