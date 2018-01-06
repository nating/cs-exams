
# Clustering
* [K-Means Clustering](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/clustering.md#k-means)
* [Watershed Segmentation](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/clustering.md#watershed-segmentation)
* [Mean-Shift Segmentation](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/clustering.md#mean-shift-segmentation)

## K-Means

K-Means Clustering uses a type of unsupervised learning, to create K groups of pixels in the image and pixels of the same color are drawn to the same group during an iterative process.

1. **First Pass:** *k* random evenly distributed starting pixels, called 'exemplars', are chosen. Every pixel in the image is associated with the nearest exemplar, and every time a pixel is associated with an exemplar, the exemplar is set to be the centre of gravity of all the pixels associated with it.
2. **Second Pass:** The final exemplars from the first pass are used and every pixel is associated with its nearest exemplar.

The 'Davies-Bouldin' index is a way of measuring cluster separation in K-means, and is a way of comparing k-means for different values of *k* for an image.

Because the starting pixels are chosen randomly, the algorithm is non-deterministic. K-means is an example of Unsupervised learning.

* Reduces the amount of colors in the image, which can be good for image compression.
* Reduces detail in objects that we are tracking so that they are easier to track.
* Loses detail from image.
* Difficult to determine the best value for K.

## Watershed Segmentation

Watershed Segmentation involves gradually labelling pixels in a grayscale image as being part of regions, starting at the minima and working up, while keeping already defined regions from joining up.

Regions are formed by first taking the minima in a grayscale image. The threshold for being part of a region rises from there. Pixels that were not before part of a region that find themselves below the threshold are added to a region if touching pixels from one, otherwise they become their own region. Regions are not allowed to meet, so if pixels join one region to another, they are considered part of a 'watershed line'.

Generally watershed gets too many regions, so a way to make sure that objects are encapsulated in one region is to 'label' them. This is done be essentially changing certain values in the object to be the minimum so that they start off as being in a region together.

* Finds regions within an image.
* Generally finds too many regions in an image, unless specific labels are created.
* Labelling involves human processing, which is not ideal in a computer vision program.

## Mean Shift Segmentation

Mean Shift segmentation involves shifting pixels towards close areas of high density in a color space to determine which of them should be placed in the same region.

The 'local kernel density' at a point is found by using the weighted average (with a Kernel) of the distance of the value at the centre point to the value of the neighbouring pixels.

For each pixel:  
1. The direction of the local increasing kernel density (the mean shift vector) is found, by differentiating the local kernel density.
2. The pixel is shifted in the direction of the increasing density.
3. This is recomputed until the pixel location stabilises.

At the end, all pixels that end up in the same location are set to be part of the same region. That value of that region is set to be the mean value of all the pixels associated with it.

Another Kernel can be used for color, to limit the colors that are included in the calculation of the local kernel density for any point.

* Doesn't need to know how many regions to create in advance.
* Provides useful spatial **and** color information.
* Selecting the right widths for the kernels can be difficult.
* If there are many clusters the process can be very slow.
