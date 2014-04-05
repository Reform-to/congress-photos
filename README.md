# Legislator Photos

Official photos of members of Congress as taken from the Congressional Pictorial
Directory, resized and converted to grayscale. Available in three sizes. All
images are in the public domain. See the `img` folder for details.

# Development

This package uses an upstream repository from
[theunitedstates.io](https://github.com/unitedstates/images). These instructions
will update the contents of this package.

## Requirements

* Bower
* ImageMagick

## Installation

Install the upstream package:

    bower install

Run the script:

    ./scripts/resize-photos.sh

The script won't overwrite any existing images. If you want a clean start, first
run the command `rm -Rf img/*` followed by `./scripts/resize-photos.sh`.

