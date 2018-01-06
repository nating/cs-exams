
# Transformations
* Affine Transformation
* Perspective Transformation

## Affine Transformation

An Affine Transformation is the multiplication of the vector of a pixel's coordinates in the output image by a matrix of values to get the corresponding coordinates in the input image to look for the pixel to place in the new position.

Some specific **known transformations** can be done by using a 2x3 matrix of specific values, which might include 1s, 0s, cos(𝞍), sin(𝞍), tan(𝞍), -cos(𝞍) etc. These specific transformations include:  
* Rotation
* Translation
* Change of Scale
* Skewing
* Panoramice Distortion

For **unknown transformations** given three coordinate to coordinate pairs, they can be used to find the transformation matrix. With even more coordinate pairs, the transformation coefficients can be found even more accurately.
