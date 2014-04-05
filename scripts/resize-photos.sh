#!/bin/sh

# Script to resize congress photos into the sizes we typically use.
# Run this from the root images directory: scripts/resize-photos.sh.
# Directory congress/original contains images named by bioguide ID.
# The photos will be resized and placed into directories named after the size, retaining their original filename.

SOURCE=bower_components/images/congress/
TARGET=img/

for SIZE in "40x50" "100x125" "200x250"
    do
    mkdir -p $TARGET/$SIZE;
    for f in $SOURCE/original/*.jpg
    do
        f=$(basename "$f")
        outfile=$TARGET/$SIZE/$f
        if [ ! -f $outfile ]; then
            convert $SOURCE/original/$f -resize $SIZE^ -modulate 100,0 -gravity center -extent $SIZE $outfile;
        fi
    done
done
