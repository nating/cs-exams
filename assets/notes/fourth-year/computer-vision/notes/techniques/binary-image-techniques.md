
# Binary Image Techniques
* [Thresholding](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#thresholding)
* [Dilation](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#dilation)
* [Erosion](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#erosion)
* [Opening](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#opening)
* [Closing](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#closing)
* [Connected Components Analysis](https://github.com/nating/cs-exams/tree/master/assets/notes/fourth-year/computer-vision/notes/techniques/binary-image-techniques.md#connected-components-analysis)

## Thresholding

### Description

Binary thresholding is turning a grayscale image into an image where pixels can only have one of two values (usually black or white). A threshold is chosen and pixels with a value greater than or equal to the threshold are set to be one color and all the other pixels are set to be the other color. The value for the threshold can be chosen using different methods described below.

The threshold for binary thresholding can be manually chosen in some industrial vision problems, but even in these situations the lighting can change over time due to the nature of light bulbs so the threshold should be chosen with using a special technique.

### Bimodal Histogram Analysis

Bimodal histogram analysis involves assuming that the grayscale image's foreground pixels are all sort of at the same value and all the background pixels are all sort of at the same value (i.e. that the histogram will be bimodal). The Threshold is set to be the 'Anti-mode' (the minimum between the two peaks of the histogram). The highest peak of the histogram is easy to find but the second peak can be difficult to find because of other bins which have heights in between the two modes. Smoothing can be done to make it easier to find the two modes, which should not be very sloped.

It is recommended that you do not use Bimodal Histogram Analysis to find the threshold of a binary image because it is difficult to find the anti-mode correctly.

### Optimal Thresholding

Optimal Thresholding can be done if the histogram of the grayscale image could be modelled as the sum of two normal distributions. A random threshold is chosen, then it is iteratively updated to be half of the sum of the average foreground pixel values and the average background pixel values until it converges. This ends up being about half way between the two modes of the grayscale image's histogram.

### Otsu Thresholding

If the histogram of the grayscale image can not be modelled as the sum of two normal distributions, then Otsu thresholding is a better solution than Optimal Thresholding.

Otsu Thresholding chooses the threshold value that minimises the within class variance in background & foreground pixels. Variance is the square of the standard deviation within a class. In other words, the variance is the average of the squared distances of the pixel values to the mean pixel value within the class.

### Adaptive Thresholding

In Adaptive Thresholding, a threshold is calculated for lots of sub-images within the original grayscale image. For any pixel, the threshold that is used to determine whether it is a foreground or background pixel is calculated by interpolating the four nearest threshold values (Using [Bilinear Interpolation]() TODO: link to bilinear-thresholding here). A weighted average of the four nearest thresholds is used, and the weights come from how close each threshold is to the pixel of interest.

Adaptive Thresholding is of use when the foreground and background pixels don't all have similar pixel values.

#### Band Thresholding

In Band Thresholding, two thresholds are used to get the outline of the object pixels.

#### Semi-Thresholding

In Semi-Thresholding, object pixels keep their original grayscale value.

#### Multispectral Thresholding

Multispectral Thresholding is thresholding color images by thresholding each channel individually.

### Pros & Cons

#### Pros
* Can be used to distinct the foreground from the background in certain images.
* Less values for the pixels in the image means that computation time in binary image processing is faster.
* Images can be represented by less bits, so memory can be saved.

#### Cons
* The perfect threshold varies from image to image and is difficult to get.
* All color information in the image is lost in Binary Thresholding.

## Dilation

Dilation is a way of expanding object pixels.

### Description

A structuring element is moved across the pixels in the image. If the structuring element is centered on a pixel with a value of 0 but also on a pixel(s) with a value(s) of 255, then it is set to have a value of 255.

### Pros & Cons

#### Pros  
* Can be used to enclose pixels that were left out of the object in a binary image.

#### Cons
* Loses information from the original binary image.

## Erosion

Erosion is used to shrink objects by removing the pixels at their extremities.

### Description

A structuring element is moved across the pixels in the image. If the structuring element is only on pixels with a value of 255, then the pixel it is centered on is set to have a value of 255.

### Pros & Cons

#### Pros  
* Can get rid of extra pixels that were in objects by mistake in the binary image.

#### Cons
* Loses information from the original binary image.

## Opening

Opening is an Erosion followed by a Dilation.

### Pros & Cons

#### Pros
* Original object's size stays the same.
* Noise is removed.
* Object boundaries are smoothed.

#### Cons
* ? (**Note to the reader:** edit if you know some!)

## Closingq

Closing is a Dilation followed by an Erosion.

### Pros & Cons

#### Pros
* Original object's size stays the same.
* Holes are filled in inside objects.

#### Cons
* Closing may join objects together.

## Connected Components Analysis

### Description

The algorithm for connected components involves:
1. stepping through the pixels, and:
* If their value is not zero, and their previous neighbours are: assign them a new label to note that they are part of a new component.
* If their value is not zero and neither are their previous neighbours: assign them the same label as their neighbours to note that they are part of the same component. (If some of their previous neighbours have different labels, join them up to have the same label)
2. Passing over the image once more to set labels of components that are connected to have the same label value.

### Pros
* Finds all connected components in a binary image!

### Cons
There are no cons. It is a way of finding certain groups of pixels within a binary image.
