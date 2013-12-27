#!/bin/bash
echo Converting to Grayscale
find tmp/result -iname "*.jpg" | xargs mogrify -colorspace Gray
