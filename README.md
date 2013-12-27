# Legislator Photos

Sunlight Foundation provides zip files of official photos of members of Congress,
as taken from the Congressional Pictorial Directory. We offer them in 3 sizes,
and the files are all named using the member’s Bioguide ID.

* [Small, 40x50](http://assets.sunlightfoundation.com/moc/40x50.zip)
* [Medium, 100x125](http://assets.sunlightfoundation.com/moc/100x125.zip)
* [Large, 200x250](http://assets.sunlightfoundation.com/moc/200x250.zip)

## Requirements

* Node.js
* Grunt - `npm install -g grunt-cli`

## Installation

Install the required NPM packages:

    npm install

## Deployment

The task will download the zip files from sunlightfoundation.com, unzip them,
and build them for distribution.

    grunt

The photos will be built in the `dist/` directory, and can be deployed to
a static server in production.

## Packaging

To package a release for Bower, first build and then release:

    grunt
    grunt build:release

The package will be available in the `build/release` directory.
