
## Basic Techniques

### Sampling

*"A sample is a small part or quantity intended to show what the whole is like"*

#### High Level

Light from the real world is continuous, so digital images are made be 'Sampling' the continuous data. An image's sampling refers to the number of pixels in it.

#### Low Level

TODO: Difficult to find how the process of changing the number of pixels in the image actually works.

#### Pros & Cons

**Pros**:  
* Changing an image's sampling so that there are less pixels speeds up computation so for a vision program to be most efficient, there should be only as much pixels as is necessary.
* Changing an image's sampling so that there are less pixels also means that the image takes up less space in memory.

**Cons**:  
* Sampling an image loses detail, so an image must be sampled enough to have the detail necessary for processing the image.

## Quantisation

*"To quantize is to restrict the number of possible values or states of a system"*

### High & Low Level Description

Brightness in the real world is continuous, but to have digital images, pixels need be restricted to only having certain values. The quantisation of an image is how many bits each pixel is represented by.

### Pros & Cons

**Pros**:  
* Changing the quantisation of an image so pixels are represented by less bits speeds up computation.
* Changing the quantisation of an image so pixels are represented by less bits also means that the image takes up less space in memory.

**Cons**:  
* Decreasing the amount of possible values for a pixel means that information is lost. There are more than e.g. 8 values that brightness can take on in the real world, so the quantisation of the images being dealt with has to be high enough for the specific vision problem on hand.

### Inversion

#### High & Low level Description

Inverting an image means to set all of its pixel values to the opposite of their current value. If a pixel can take on values from 0 to 255 and its current value is *x*, then to invert the pixel it is set to (255-*x*).

### Pros & Cons

When an image is inverted, no information is lost. It is only a new representation of the image. Sometimes images are inverted in OpenCV if for instance there is a function that gets all the white objects in a binary image, but you want all of the black objects in your binary image. By inverting the image, you can make use of the function.

### Smoothing

#### High Level Description

Smoothing reduces noise in an image. Smoothing works by setting pixel values in an image to be the average of the nearby pixel values.

#### Low Level Description

There are several different ways of smoothing images. **Linear Smoothing** involves doing the same sum on every pixel in the image to calculate its new value. **Non-Linear Smoothing** involves doing a test on the pixels in each location in the image to see what pixels should be taken into account for the averaging process.

#### Image Averaging

Image averaging is done when there are multiple noisy versions of the same image. If the noise is [additive]() (TODO: link additive noise here when done) then setting each pixel value in the output image to the average of the corresponding pixels in each of the noisy versions is likely to be get a more accurate output image than any of the input images.

The values of the pixel in all the versions of the image are added together and divided by the number of versions of the image. The resulting value is set as the pixel's value in the output image.

Image Averaging is not appropriate for salt & pepper noise because the noise will be smoothed into the image.

#### Local Averaging

In local averaging, each pixel's value is set to the average pixel value of itself & its neighbours. Its own & neighbours' pixel values are added together and divided by the number of pixels taken into consideration.

Local Averaging is not appropriate for salt & pepper noise because the noise will be smoothed into the image.

#### Gaussian Smoothing

Gaussian Smoothing is the same as local averaging, except that weights are given to the pixels so that closer pixels have more of an impact on the final value for the final value than the pixels further away.

The weights are usually put in a matrix called the 'convolution mask', and this matrix of pixels travels across the pixels of the image (is convolved with the image) for the computation.

Gaussian Smoothing is not appropriate for salt & pepper noise because the noise will be smoothed into the image.

#### Rotating Mask

In rotating mask averaging, one of nine possible masks is used for the averaging. The masks are different shapes that all include the pixel of interest. Each mask is applied to check which one when fitted on the pixel of interest has the most similar pixels throughout. The mask that is chosen is the mask who's average 'pixel value distance from the average' is smallest. The average of the chosen mask is set to the the value for the pixel of interest. The masks are best understood with the image below:  
<img src="./assets/rotating-mask.png"/>

Different shapes and sizes can be used in different rotating mask **filters**. Rotating mask filtering is better for salt & pepper noise than Linear Averaging or Gaussian Smoothing.

#### Median Filtering

Median filtering is another smoothing operation that involves a mask. The median value (the middle value when all values are put in order) of the pixels in the mask, when it is centred on the pixel of interest, is given to the pixel of interest.

Median Filtering is good at removing noise because at the end of the day, only the middle pixel value from the mask is chosen so outliers in a region of similar pixel values don't have an effect.

Median Filtering can be expensive process in terms of computation, but done right it can be O(n). This is called the Perreault approach and involves keeping values in the mask as it moves. When the mask moves from one pixel of interest to the next, most of the values in the mask will not have changed (In the direction it is moving, no pixel values change apart from the two on either edge).

#### Bilateral Filter

A Bilateral filter is the same as Gaussian Smoothing, except the weights depend not only on the euclidean distance of pixels to the pixel of interest, but on the differences in color / brightness etc.

### Pros & Cons

#### Pros
* Reduces the amount of noise in an image.

#### Cons
* Blurring an image with **Linear Smoothing** can also blur sharp edges which might make a specific vision problem harder (This is not really certainly as much of a problem with rotating mask filtering).
* Lose some information because pixels non-noise pixels are changed from their original values.

## Back Projection

### High Level Description

Back Projection is used to find pixels of a certain color in an image. A combined histogram is made of sample images of the color to be found. The histogram is normalised so that the maximum value is 1, and the pixels in the target image are compared to this histogram to get a probability of them being the color in question.

### Low Level Description

To obtain the histogram of all the sample images of the color to be searched for, the possible values for the color space(s) that is (are) being used are split up into 'bins'. Every pixel value from the sample images is used to increment the 'count' for one 'bin'. This ends up in a number of bins that represent the image.  
The histogram is then 'normalised', which means that the values are changed so that the maximum value is 1. The histogram can then be used as the probability of a certain pixel value being the color being searched for.  
For each pixel in the target image, check which bin it would go in and the value for that bin will give the probability of that pixel being the color being searched for.

### Pros & Cons

#### Pros
* Back projection is a more effective approach to finding the color of pixels you are looking for than checking that pixel values are within a certain hardcoded range in some color space(s).

#### Cons
* The choice of color space can make a big impact on how well the back projection works.
* The choice of the amount of bins in the histogram can make a big impact on how well the back projection works.

### Sharpening

#### High level Description

Sharpening an image involves taking the edge pixels in the image and making them more extreme. An edge is a rapid change in brightness from one pixel to the next. The brighter pixel is made brighter and the darker pixel is made darker to make the edge stand out more and the image look 'sharper'.

#### Low Level Description

To sharpen an image, a fraction of the second derivative of the image is subtracted from the original image. The second derivative of the image is found using the [Laplacian filter]() (TODO: Add link to the laplacian filter here), then each value from the laplacian is multiplied by some factor (less than one) and subtracted from the corresponding pixel value in the original image.

### Pros & Cons

TODO: I think sharpening images is of no value in computer vision and that it is only used to represent images to humans in a different way.
